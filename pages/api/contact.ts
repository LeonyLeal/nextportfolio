import type { NextApiRequest, NextApiResponse } from "next";
import { resolveMx } from "node:dns/promises";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  proposalType?: unknown;
  message?: unknown;
  website?: unknown;
  turnstileToken?: unknown;
};

type ContactResponse = {
  message: string;
};

const allowedProposalTypes = new Set([
  "Oportunidade profissional",
  "Projeto freelance",
  "Parceria técnica",
]);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimit = new Map<string, { count: number; expiresAt: number }>();
const domainMxCache = new Map<string, { isValid: boolean; expiresAt: number }>();

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getClientIp(req: NextApiRequest) {
  const forwardedFor = req.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return req.socket.remoteAddress ?? "unknown";
}

async function hasValidEmailDomain(email: string) {
  const domain = email.split("@")[1]?.toLowerCase();

  if (!domain) return false;

  const now = Date.now();
  const cached = domainMxCache.get(domain);

  if (cached && cached.expiresAt > now) {
    return cached.isValid;
  }

  try {
    const records = await resolveMx(domain);
    const isValid = records.some((record) => record.exchange);

    domainMxCache.set(domain, {
      isValid,
      expiresAt: now + 60 * 60 * 1000,
    });

    return isValid;
  } catch {
    domainMxCache.set(domain, {
      isValid: false,
      expiresAt: now + 15 * 60 * 1000,
    });

    return false;
  }
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = rateLimit.get(ip);

  if (!current || current.expiresAt < now) {
    rateLimit.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 });
    return true;
  }

  if (current.count >= 5) return false;

  current.count += 1;
  rateLimit.set(ip, current);
  return true;
}

async function validateTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) return false;

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  if (ip !== "unknown") {
    formData.append("remoteip", ip);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    },
  );
  const result: { success?: boolean } = await response.json();

  return Boolean(result.success);
}

async function sendEmail({
  name,
  email,
  proposalType,
  message,
}: {
  name: string;
  email: string;
  proposalType: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    throw new Error("Email environment variables are missing.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Novo contato: ${proposalType} - ${name}`,
      text: [
        `Nome: ${name}`,
        `Email: ${email}`,
        `Tipo: ${proposalType}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    throw new Error("Resend request failed.");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Método não permitido." });
  }

  const payload = req.body as ContactPayload;
  const name = getString(payload.name);
  const email = getString(payload.email);
  const proposalType = getString(payload.proposalType);
  const message = getString(payload.message);
  const website = getString(payload.website);
  const turnstileToken = getString(payload.turnstileToken);
  const ip = getClientIp(req);

  if (!checkRateLimit(ip)) {
    return res
      .status(429)
      .json({ message: "Muitas tentativas. Tente novamente mais tarde." });
  }

  if (website) {
    return res.status(400).json({ message: "Envio inválido." });
  }

  if (
    !name ||
    !emailRegex.test(email) ||
    !allowedProposalTypes.has(proposalType) ||
    message.length < 20
  ) {
    return res.status(400).json({
      message: "Preencha os campos corretamente antes de enviar.",
    });
  }

  if (!(await hasValidEmailDomain(email))) {
    return res.status(400).json({
      message: "Use um email com domínio válido para contato.",
    });
  }

  if (!turnstileToken || !(await validateTurnstile(turnstileToken, ip))) {
    return res.status(400).json({
      message: "Não foi possível validar a proteção anti-spam.",
    });
  }

  try {
    await sendEmail({ name, email, proposalType, message });
    return res.status(200).json({ message: "Proposta enviada." });
  } catch {
    return res.status(500).json({
      message: "Não foi possível enviar a proposta agora.",
    });
  }
}
