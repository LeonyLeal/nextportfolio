import Apps from "../../components/apps";
import type { PublicLinks } from "../../data/publicLinks";
import type { GithubRepo } from "../../service/github";

type ProjectsProps = {
  repos?: GithubRepo[];
  forbiddenTopics: string[];
  publicLinks: PublicLinks;
};

export default function Projectxs({
  repos = [],
  forbiddenTopics,
  publicLinks,
}: ProjectsProps) {
  const visibleRepos = repos.filter(
    (repo) => !repo.topics.some((topic) => forbiddenTopics.includes(topic)),
  );
  const hasVisibleRepos = visibleRepos.length > 0;

  return (
    <section
      id="Section-D"
      className="mt-[25vh] flex min-h-fit scroll-mt-20 flex-col flex-wrap content-center items-center justify-center px-6"
    >
      <h1 id="Projects" className="section-title m-0 text-[2rem] min-[1370px]:text-[2.5rem]">
        Github
      </h1>
      {hasVisibleRepos ? (
        <div className="grid auto-cols-auto grid-flow-col grid-rows-[repeat(2,200px)] lg:grid-rows-[repeat(6,200px)]">
          {visibleRepos.map((repo) => (
            <div
              key={repo.id}
              id={repo.name}
              className="flex flex-col content-center items-center"
            >
              <Apps title={repo.name}>
                <a
                  id={repo.name}
                  target="_blank"
                  rel="noreferrer"
                  href={repo.html_url}
                  className="cursor-pointer text-center text-[1.2rem] font-medium underline [-webkit-user-drag:none]"
                >
                  Ir para o repositorio
                </a>
              </Apps>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 flex w-full max-w-3xl flex-col items-center text-center">
          <p className="m-0 text-xl font-semibold">
            Projetos públicos em curadoria
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed sm:text-lg">
            Estou reorganizando quais repositórios entram aqui para manter esta
            área focada nos projetos que melhor representam meu trabalho atual.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={publicLinks.github}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-(--color-secondary) px-5 py-2 text-base font-semibold no-underline transition hover:bg-(--color-secondary) hover:text-(--color-primary)!"
            >
              Ver GitHub
            </a>
            <a
              href={publicLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded bg-(--color-secondary) px-5 py-2 text-base font-semibold text-(--color-primary)! no-underline transition hover:opacity-80"
            >
              Conversar no LinkedIn
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
