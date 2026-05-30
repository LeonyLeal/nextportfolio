const socials = [
  {
    label: "Figma",
    href: "https://www.figma.com/@leony",
    className:
      "bg-[image:var(--social-figma)] hover:bg-[image:var(--social-figma-fill)]",
  },
  {
    label: "Github",
    href: "https://www.github.com/LeonyLeal",
    className:
      "bg-[image:var(--social-github)] hover:bg-[image:var(--social-github-fill)]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/leony.1999/",
    className:
      "bg-[image:var(--social-instagram)] hover:bg-[image:var(--social-instagram-fill)]",
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/leony-leal99/",
    className:
      "bg-[image:var(--social-linkedin)] hover:bg-[image:var(--social-linkedin-fill)]",
  },
];

export default function Socials() {
  return (
    <section id="Section-B" className="flex scroll-mt-20 flex-col items-center">
      <h1 className="section-title">Redes</h1>
      <div className="grid grid-cols-1 gap-x-12 gap-y-5 min-[320px]:grid-cols-2 sm:gap-x-16 sm:gap-y-6">
        {socials.map((social) => (
          <a
            key={social.href}
            target="_blank"
            rel="noreferrer"
            href={social.href}
            className={`flex h-7.5 min-w-36 cursor-pointer items-center bg-left bg-no-repeat pl-10 pr-4 text-base font-semibold transition-all duration-500 ease-in-out select-none [-webkit-user-drag:none] min-[400px]:text-[1.2rem] ${social.className}`}
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}
