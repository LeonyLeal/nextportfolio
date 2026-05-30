const currentYear = new Date().getFullYear();

const internalLinks = [
  ["Sobre", "/#Section-A"],
  ["Skills", "/#Section-C"],
  ["Github", "/#Section-D"],
];

const externalLinks = [
  ["GitHub", "https://www.github.com/LeonyLeal"],
  ["LinkedIn", "https://www.linkedin.com/in/leony-leal99/"],
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-secondary)]/20 px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="m-0 text-lg font-semibold">Leony Leal</p>
          <p className="m-0 mt-1 text-sm opacity-75">
            Desenvolvedor Fullstack | {currentYear}
          </p>
        </div>

        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold sm:justify-end"
        >
          {internalLinks.map(([label, href]) => (
            <a key={href} href={href} className="no-underline hover:underline">
              {label}
            </a>
          ))}
          {externalLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
