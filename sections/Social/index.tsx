import type { PublicLinks } from "../../data/publicLinks";

const socials = [
  {
    label: "Github",
    linkKey: "github",
    className:
      "bg-[image:var(--social-github)] hover:bg-[image:var(--social-github-fill)]",
  },
  {
    label: "Instagram",
    linkKey: "instagram",
    className:
      "bg-[image:var(--social-instagram)] hover:bg-[image:var(--social-instagram-fill)]",
  },
  {
    label: "Linkedin",
    linkKey: "linkedin",
    className:
      "bg-[image:var(--social-linkedin)] hover:bg-[image:var(--social-linkedin-fill)]",
  },
] as const;

type SocialsProps = {
  publicLinks: PublicLinks;
};

export default function Socials({ publicLinks }: SocialsProps) {
  return (
    <section id="Section-B" className="flex scroll-mt-20 flex-col items-center">
      <h1 className="section-title">Redes</h1>
      <div className="grid grid-cols-1 gap-x-12 gap-y-5 min-[450px]:grid-cols-3 sm:gap-x-16 sm:gap-y-6 pt-10">
        {socials.map((social) => (
          <a
            key={social.label}
            target="_blank"
            rel="noreferrer"
            href={publicLinks[social.linkKey]}
            className={`flex h-7.5 min-w-36 cursor-pointer items-center bg-left bg-no-repeat pl-10 pr-4 text-base font-semibold transition-all duration-500 ease-in-out select-none [-webkit-user-drag:none] min-[400px]:text-[1.2rem] ${social.className}`}
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}
