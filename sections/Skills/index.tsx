import type { ReactNode } from "react";
import { useRef, useState } from "react";
import Card from "../../components/Card";
import Modal from "../../components/ModalCard";
import { cardPalette } from "../../styles/theme";

import cardRedSVG from "../../public/img/cards/card_red.svg";
import cardGreenSVG from "../../public/img/cards/card_green.svg";
import cardBlueSVG from "../../public/img/cards/card_blue.svg";
import cardPurpleSVG from "../../public/img/cards/card_purple.svg";
import backendSVG from "../../public/img/cards/backend.svg";
import dbSVG from "../../public/img/cards/db.svg";
import frontendSVG from "../../public/img/cards/frontend.svg";
import infraSVG from "../../public/img/cards/infra.svg";

type Skill = {
  title: string;
  summary: string;
  wave: string;
  icon: string;
  cardFill: string;
  shadow: string;
  shadowHover: string;
  modalContent: ReactNode;
};

const skills: Skill[] = [
  {
    title: "Back-end e APIs",
    summary:
      "Construção de APIs, autenticação e regras de negócio com foco em segurança, performance e manutenção.",
    wave: cardRedSVG.src,
    icon: backendSVG.src,
    cardFill: cardPalette.background.red,
    shadow: cardPalette.border.red,
    shadowHover: cardPalette.border.selectedRed,
    modalContent: (
      <>
        <p>
          Construo APIs e fluxos de back-end pensando no uso real do sistema:
          regras de negócio claras, contratos previsíveis e integrações que
          continuam legíveis depois que o projeto cresce.
        </p>
        <p>
          Tenho experiência com .NET, Entity Framework, DTOs, mappers,
          autenticação, JWT e gerenciamento de cookies, sempre conectando
          segurança, performance e manutenção em uma mesma decisão técnica.
        </p>
      </>
    ),
  },
  {
    title: "Dados e Consistência",
    summary:
      "Modelagem, consultas complexas e automações para manter dados confiáveis dentro da regra do produto.",
    wave: cardGreenSVG.src,
    icon: dbSVG.src,
    cardFill: cardPalette.background.green,
    shadow: cardPalette.border.green,
    shadowHover: cardPalette.border.selectedGreen,
    modalContent: (
      <>
        <p>
          Trabalho com banco de dados como parte central da arquitetura, não
          apenas como lugar para salvar informação. A modelagem precisa apoiar o
          produto, proteger consistência e facilitar evoluções futuras.
        </p>
        <p>
          Atuo com SQL Server, abordagem DB First e conceitos de ORM, além de
          queries complexas, transactions, procedures e triggers para
          automatizar rotinas e manter a lógica de dados confiável.
        </p>
      </>
    ),
  },
  {
    title: "Front-end de Produto",
    summary:
      "Interfaces responsivas em React, Next.js e TypeScript, com atenção para usabilidade e organização.",
    wave: cardBlueSVG.src,
    icon: frontendSVG.src,
    cardFill: cardPalette.background.blue,
    shadow: cardPalette.border.blue,
    shadowHover: cardPalette.border.selectedBlue,
    modalContent: (
      <>
        <p>
          Desenvolvo interfaces com foco em produto: telas responsivas,
          componentes reutilizáveis e experiências que equilibram clareza,
          performance e organização do código.
        </p>
        <p>
          Uso React, Next.js, TypeScript, SSR, Redux, React Query, Tailwind, MUI,
          Ant Design, zod e react-hook-form para criar fluxos consistentes,
          formulários robustos e layouts mobile-first.
        </p>
      </>
    ),
  },
  {
    title: "Entrega, Infra e DevOps",
    summary:
      "Deploy, containers, pipelines e servidores para levar aplicações do desenvolvimento à produção.",
    wave: cardPurpleSVG.src,
    icon: infraSVG.src,
    cardFill: cardPalette.background.purple,
    shadow: cardPalette.border.purple,
    shadowHover: cardPalette.border.selectedPurple,
    modalContent: (
      <>
        <p>
          Gosto de fechar o ciclo entre código e produção. Além de desenvolver,
          preparo ambientes, organizo deploys e automatizo partes do processo
          para reduzir trabalho manual e risco operacional.
        </p>
        <p>
          Tenho vivência com Docker, Docker Swarm, Dockerfile, Docker Compose,
          Portainer, Nginx Proxy Manager, Jenkins, GitLab CI/CD, VPS Linux e
          Windows, IIS e estudos aplicados em AWS com EC2, S3 e SQS.
        </p>
      </>
    ),
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const getScrollStep = (element: HTMLDivElement) =>
    Math.min(element.clientWidth * 0.75, 320);

  const previous = () => {
    const slide = slideRef.current;

    if (!slide) return;

    const maxScrollLeft = slide.scrollWidth - slide.clientWidth;

    if (slide.scrollLeft <= 1) {
      slide.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      return;
    }

    slide.scrollBy({ left: -getScrollStep(slide), behavior: "smooth" });
  };

  const next = () => {
    const slide = slideRef.current;

    if (!slide) return;

    const maxScrollLeft = slide.scrollWidth - slide.clientWidth;

    if (slide.scrollLeft >= maxScrollLeft - 1) {
      slide.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    slide.scrollBy({ left: getScrollStep(slide), behavior: "smooth" });
  };

  return (
    <section
      id="Section-C"
      className="mt-[10vh] flex min-h-fit scroll-mt-20 flex-col flex-wrap content-center items-center justify-start"
    >
      <h1 className="section-title">Skills</h1>
      <div className="relative w-[-webkit-fill-available] overflow-hidden min-[1200px]:w-fit">
        <button
          type="button"
          onClick={previous}
          className="absolute top-1/2 left-3 z-100 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-(--color-secondary)/30 bg-(--color-primary)/80 text-(--color-secondary) shadow-lg backdrop-blur-md transition hover:scale-105 active:scale-95 sm:hidden"
          aria-label="Card anterior"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M15 18l-6-6 6-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute top-1/2 right-3 z-100 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-(--color-secondary)/30 bg-(--color-primary)/80 text-(--color-secondary) shadow-lg backdrop-blur-md transition hover:scale-105 active:scale-95 sm:hidden"
          aria-label="Proximo card"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M9 18l6-6-6-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
          </svg>
        </button>
        <div
          ref={slideRef}
          className="flex snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scroll-smooth [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:h-0 [&>button]:snap-center [&>button]:transition-transform [&>button]:duration-500"
        >
          {skills.map((skill) => (
            <Card
              key={skill.title}
              title={skill.title}
              summary={skill.summary}
              wave={skill.wave}
              cardFill={skill.cardFill}
              icon={skill.icon}
              shadow={skill.shadow}
              shadowHover={skill.shadowHover}
              onClick={() => setSelectedSkill(skill)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={Boolean(selectedSkill)}
        onClose={() => setSelectedSkill(null)}
        title={selectedSkill?.title ?? ""}
        backColor={selectedSkill?.cardFill ?? cardPalette.background.red}
        icon={selectedSkill?.icon ?? backendSVG.src}
        shadow={selectedSkill?.shadowHover ?? cardPalette.border.selectedRed}
      >
        {selectedSkill?.modalContent}
      </Modal>
    </section>
  );
}
