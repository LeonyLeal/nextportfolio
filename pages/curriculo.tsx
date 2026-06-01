import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ContactProposalModal from "../components/ContactProposalModal";
import { getPublicLinks, type PublicLinks } from "../data/publicLinks";
import { resume } from "../data/resume";

type CurriculoProps = {
  publicLinks: PublicLinks;
};

const resumeSections = [
  ["Base", [resume.location]],
  ["Links", resume.links.map((link) => link.label)],
  ["Competências", resume.skills],
  ["Idiomas", resume.languages],
] as const;

function Curriculo({ publicLinks }: CurriculoProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const resumeLinks = resume.links.map((link) => ({
    label: link.label,
    href: publicLinks[link.key],
  }));

  return (
    <>
      <Head>
        <title>Currículo - Leony Leal</title>
        <meta
          name="description"
          content="Currículo de Leony Leal, Desenvolvedor Fullstack Pleno."
        />
      </Head>

      <main className="min-h-screen bg-(--color-primary) px-4 pt-24 pb-12 text-(--color-secondary) sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="w-fit rounded border border-(--color-secondary)/30 px-4 py-2 text-sm font-semibold no-underline transition hover:bg-(--color-secondary) hover:text-(--color-primary)!"
            >
              Voltar ao portfólio
            </Link>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="w-fit rounded bg-(--color-secondary) px-4 py-2 text-sm font-semibold text-(--color-primary)! no-underline transition hover:opacity-80"
            >
              Entrar em contato
            </button>
          </div>

          <article className="overflow-hidden rounded-2xl border border-(--color-secondary)/20 bg-(--color-primary) shadow-[0_18px_60px_rgba(0,0,0,.18)]">
            <header className="bg-(image:--about-bg) px-6 py-8 text-white sm:px-10">
              <p className="m-0 text-sm font-bold tracking-[0.22em] uppercase opacity-80">
                Currículo
              </p>
              <h1 className="m-0 mt-2 text-4xl font-black leading-none sm:text-6xl">
                {resume.name}
              </h1>
              <p className="m-0 mt-3 text-lg font-semibold sm:text-2xl">
                {resume.role}
              </p>
            </header>

            <div className="grid gap-0 lg:grid-cols-[18rem_1fr]">
              <aside className="border-b border-(--color-secondary)/15 bg-(--color-secondary)/6 px-6 py-8 lg:border-r lg:border-b-0 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                  {resumeSections.map(([title, items]) => (
                    <section key={title}>
                      <h2 className="m-0 border-b border-(--color-secondary)/25 pb-2 text-sm font-black tracking-[0.16em] uppercase">
                        {title}
                      </h2>
                      <div className="mt-4 flex flex-col gap-2 text-sm leading-relaxed">
                        {title === "Links"
                          ? resumeLinks.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={
                                  link.href.startsWith("http")
                                    ? "noreferrer"
                                    : undefined
                                }
                                className="font-semibold underline-offset-4 hover:underline"
                              >
                                {link.label}
                              </a>
                            ))
                          : items.map((item) => <span key={item}>{item}</span>)}
                      </div>
                    </section>
                  ))}
                </div>
              </aside>

              <div className="px-6 py-8 sm:px-10">
                <section>
                  <h2 className="m-0 text-2xl font-black">
                    Resumo profissional
                  </h2>
                  <p className="mt-4 text-base leading-relaxed opacity-90">
                    {resume.summary}
                  </p>
                </section>

                <section className="mt-10">
                  <h2 className="m-0 text-2xl font-black">
                    Experiência profissional
                  </h2>
                  <div className="mt-5 border-l-2 border-(--color-secondary)/25 pl-5">
                    <h3 className="m-0 text-xl font-bold">
                      {resume.experience.title}, {resume.experience.company}
                    </h3>
                    <p className="mt-1 text-sm font-semibold opacity-70">
                      {resume.experience.period}
                    </p>
                    <ul className="mt-4 grid gap-3 pl-4 text-base leading-relaxed">
                      {resume.experience.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="mt-10 grid gap-8 md:grid-cols-2">
                  <div>
                    <h2 className="m-0 text-2xl font-black">Formação</h2>
                    <p className="mt-4 text-lg font-bold">
                      {resume.education.institution}
                    </p>
                    <p className="mt-1 text-sm font-semibold opacity-70">
                      {resume.education.period}
                    </p>
                  </div>
                  <div>
                    <h2 className="m-0 text-2xl font-black">Cursos</h2>
                    {resume.courses.map((course) => (
                      <div key={course.title} className="mt-4">
                        <p className="m-0 text-lg font-bold">{course.title}</p>
                        <p className="m-0 mt-1 text-sm opacity-80">
                          {course.institution}
                        </p>
                        <p className="m-0 mt-1 text-sm font-semibold opacity-70">
                          {course.period}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mt-10">
                  <h2 className="m-0 text-2xl font-black">
                    Atividades extracurriculares
                  </h2>
                  <p className="mt-4 text-lg font-bold">
                    {resume.extracurricular.title}
                  </p>
                  <p className="mt-2 text-base leading-relaxed opacity-90">
                    {resume.extracurricular.description}
                  </p>
                </section>
              </div>
            </div>
          </article>
        </div>
        <ContactProposalModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </main>
    </>
  );
}

Curriculo.hideNavbar = true;
Curriculo.showThemeToggle = true;

export default Curriculo;

export const getServerSideProps: GetServerSideProps<
  CurriculoProps
> = async () => ({
  props: {
    publicLinks: getPublicLinks(),
  },
});
