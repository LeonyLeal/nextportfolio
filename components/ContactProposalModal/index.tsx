import { FormEvent, useEffect, useRef, useState } from "react";

type ContactStatus =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

type TurnstileWindow = Window & {
  turnstile?: TurnstileApi;
};

type ContactProposalModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const proposalTypes = [
  "Oportunidade profissional",
  "Projeto freelance",
  "Parceria técnica",
] as const;

export default function ContactProposalModal({
  isOpen,
  onClose,
}: ContactProposalModalProps) {
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<ContactStatus>({
    type: "idle",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const turnstileConfigMessage = turnstileSiteKey
    ? ""
    : "Turnstile não configurado. Defina NEXT_PUBLIC_TURNSTILE_SITE_KEY.";

  useEffect(() => {
    if (!isOpen) return;

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    body.classList.add("modal-open");
    documentElement.classList.add("modal-open");
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    return () => {
      body.classList.remove("modal-open");
      documentElement.classList.remove("modal-open");
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !turnstileSiteKey) return;

    const renderTurnstile = () => {
      const turnstile = (window as TurnstileWindow).turnstile;

      if (!turnstile || !turnstileRef.current || widgetIdRef.current) return;

      widgetIdRef.current = turnstile.render(turnstileRef.current, {
        sitekey: turnstileSiteKey,
        callback: setTurnstileToken,
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    };

    if (!(window as TurnstileWindow).turnstile) {
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"]',
      );

      if (existingScript) {
        existingScript.addEventListener("load", renderTurnstile);
      } else {
        const script = document.createElement("script");
        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        script.addEventListener("load", renderTurnstile);
        document.head.appendChild(script);
      }
    } else {
      renderTurnstile();
    }

    return () => {
      const turnstile = (window as TurnstileWindow).turnstile;

      if (turnstile && widgetIdRef.current) {
        turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [isOpen, turnstileSiteKey]);

  if (!isOpen) return null;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const proposalType = String(formData.get("proposalType") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !proposalType || message.length < 20) {
      setStatus({
        type: "error",
        message: "Preencha os campos obrigatórios e detalhe melhor o contato.",
      });
      return;
    }

    if (!turnstileToken) {
      setStatus({
        type: "error",
        message: "Confirme a verificação anti-spam antes de enviar.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        proposalType,
        message,
        website: String(formData.get("website") ?? ""),
        turnstileToken,
      }),
    });

    const result: { message?: string } = await response.json().catch(() => ({}));

    setIsSending(false);

    if (!response.ok) {
      setStatus({
        type: "error",
        message: result.message ?? "Não foi possível enviar agora.",
      });
      (window as TurnstileWindow).turnstile?.reset(widgetIdRef.current ?? "");
      setTurnstileToken("");
      return;
    }

    form.reset();
    setTurnstileToken("");
    (window as TurnstileWindow).turnstile?.reset(widgetIdRef.current ?? "");
    setStatus({
      type: "success",
      message: "Contato enviado. Obrigado pela mensagem!",
    });
  };

  return (
    <div
      className="fixed inset-0 z-2000 flex items-stretch justify-center overflow-hidden overscroll-contain bg-black/60 px-4 py-6 sm:items-center"
      onClick={onClose}
      onWheel={(event) => event.preventDefault()}
      role="presentation"
    >
      <section
        className="h-full w-full max-w-2xl overflow-y-auto overscroll-contain rounded-2xl border border-white/20 bg-(--color-primary) p-6 text-(--color-secondary) shadow-[0_20px_80px_rgba(0,0,0,.35)] sm:h-auto sm:max-h-[88dvh] sm:p-8"
        onClick={(event) => event.stopPropagation()}
        onWheel={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="proposal-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar formulário"
          className="ml-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-(--color-secondary)/20 bg-(--color-secondary)/10 text-2xl leading-none"
        >
          &times;
        </button>
        <h2 id="proposal-modal-title" className="m-0 text-2xl font-black">
          Enviar contato
        </h2>
        <p className="mt-2 text-sm leading-relaxed opacity-75">
          Use este espaço para oportunidades profissionais, projetos freelance
          ou parcerias técnicas. A mensagem chega direto no meu email.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          <input
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            name="website"
            aria-hidden="true"
          />
          <label className="grid gap-2 text-sm font-semibold">
            Nome
            <input
              name="name"
              required
              className="rounded border border-(--color-secondary)/25 bg-transparent px-3 py-2 outline-none focus:border-(--color-secondary)"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Email
            <input
              name="email"
              type="email"
              required
              className="rounded border border-(--color-secondary)/25 bg-transparent px-3 py-2 outline-none focus:border-(--color-secondary)"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Assunto
            <select
              name="proposalType"
              required
              defaultValue={proposalTypes[0]}
              className="rounded border border-(--color-secondary)/25 bg-(--color-primary) px-3 py-2 outline-none focus:border-(--color-secondary)"
            >
              {proposalTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Mensagem
            <textarea
              name="message"
              required
              minLength={20}
              rows={6}
              className="resize-y rounded border border-(--color-secondary)/25 bg-transparent px-3 py-2 outline-none focus:border-(--color-secondary)"
            />
          </label>
          <div ref={turnstileRef} className="min-h-16.25" />
          {(status.message || turnstileConfigMessage) && (
            <p
              className={`m-0 rounded px-3 py-2 text-sm ${
                status.type === "success"
                  ? "bg-emerald-500/15 text-emerald-300"
                  : "bg-red-500/15 text-red-300"
              }`}
            >
              {status.message || turnstileConfigMessage}
            </p>
          )}
          <button
            type="submit"
            disabled={isSending}
            className="rounded bg-(--color-secondary) px-5 py-3 font-bold text-(--color-primary) transition hover:opacity-80 disabled:cursor-wait disabled:opacity-60"
          >
            {isSending ? "Enviando..." : "Enviar contato"}
          </button>
        </form>
      </section>
    </div>
  );
}
