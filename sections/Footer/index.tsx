import Image from "next/image";
import { useState } from "react";
import ContactProposalModal from "../../components/ContactProposalModal";
import type { PublicLinks } from "../../data/publicLinks";

const currentYear = new Date().getFullYear();

const internalLinks = [
  ["Sobre", "/#Section-A"],
  ["Skills", "/#Section-C"],
  ["Github", "/#Section-D"],
  ["Currículo", "/curriculo"],
];

const externalLinks = [
  ["GitHub", "github"],
  ["LinkedIn", "linkedin"],
] as const;

type FooterProps = {
  publicLinks: PublicLinks;
};

export default function Footer({ publicLinks }: FooterProps) {
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  return (
    <footer className="mt-24 border-t border-(--color-secondary)/20 px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Image
            src="/favico.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded"
          />
          <div>
            <p className="m-0 text-lg font-semibold">Leony Leal</p>
            <p className="m-0 mt-1 text-sm opacity-75">
              Desenvolvedor Fullstack | {currentYear}
            </p>
          </div>
        </div>

        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold sm:justify-end"
        >
          {internalLinks.map(([label, href]) => (
            <a key={href} href={href} className="no-underline hover:underline">
              {label}
            </a>
          ))}
          {externalLinks.map(([label, linkKey]) => (
            <a
              key={label}
              href={publicLinks[linkKey]}
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline"
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setIsProposalOpen(true)}
            className="cursor-pointer rounded border border-(--color-secondary)/30 bg-transparent px-3 py-1 font-semibold text-(--color-secondary) transition hover:bg-(--color-secondary) hover:text-(--color-primary)"
          >
            Enviar contato
          </button>
        </nav>
      </div>
      <ContactProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />
    </footer>
  );
}
