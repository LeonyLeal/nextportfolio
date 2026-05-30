import { useRef, useState } from "react";
import { palette, Title } from "../../styles/GlobalStyles";
import Card from "../../components/Card";
import Modal from "../../components/ModalCard";

import { CardWrapper, SkillsContainer, Slide, SlideButton } from "./style";

import cardRedSVG from "../../public/img/cards/card_red.svg";
import cardGreenSVG from "../../public/img/cards/card_green.svg";
import cardBlueSVG from "../../public/img/cards/card_blue.svg";
import cardPurpleSVG from "../../public/img/cards/card_purple.svg";
import htmlSVG from "../../public/img/cards/html.svg";
import designSVG from "../../public/img/cards/design.svg";
import starsSVG from "../../public/img/cards/stars.svg";
import frameworksSVG from "../../public/img/cards/frameworks.svg";

const skills = [
  {
    title: "Back-end e APIs",
    description: "APIs, regras de negócio e integrações pensadas para sistemas reais.",
    wave: cardRedSVG.src,
    cardFill: palette.cards.background.red,
    icon: htmlSVG.src,
    shadow: palette.cards.border.red,
    shadowHover: palette.cards.border.selectedRed,
  },
  {
    title: "Dados e Consistência",
    description: "Modelagem, consultas e automações para dados confiáveis.",
    wave: cardGreenSVG.src,
    cardFill: palette.cards.background.green,
    icon: designSVG.src,
    shadow: palette.cards.border.green,
    shadowHover: palette.cards.border.selectedGreen,
  },
  {
    title: "Front-end de Produto",
    description: "Interfaces responsivas com React, Next.js e TypeScript.",
    wave: cardBlueSVG.src,
    cardFill: palette.cards.background.blue,
    icon: starsSVG.src,
    shadow: palette.cards.border.blue,
    shadowHover: palette.cards.border.selectedBlue,
  },
  {
    title: "Entrega, Infra e DevOps",
    description: "Deploy, containers e automação para tirar sistemas do localhost.",
    wave: cardPurpleSVG.src,
    cardFill: palette.cards.background.purple,
    icon: frameworksSVG.src,
    shadow: palette.cards.border.purple,
    shadowHover: palette.cards.border.selectedPurple,
  },
];

function Skills() {
  const [isBackendModalOpen, setIsBackendModalOpen] = useState(false);
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);
  const [isFrontendModalOpen, setIsFrontendModalOpen] = useState(false);
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
  const slideRef = useRef(Function);

  const skillCards = [
    {
      ...skills[0],
      isOpen: isBackendModalOpen,
      openModal: () => setIsBackendModalOpen(true),
      closeModal: () => setIsBackendModalOpen(false),
      content: (
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
      ...skills[1],
      isOpen: isDataModalOpen,
      openModal: () => setIsDataModalOpen(true),
      closeModal: () => setIsDataModalOpen(false),
      content: (
        <>
          <p>
            Trabalho com banco de dados como parte central da arquitetura, não
            apenas como lugar para salvar informação. A modelagem precisa apoiar
            o produto, proteger consistência e facilitar evoluções futuras.
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
      ...skills[2],
      isOpen: isFrontendModalOpen,
      openModal: () => setIsFrontendModalOpen(true),
      closeModal: () => setIsFrontendModalOpen(false),
      content: (
        <>
          <p>
            Desenvolvo interfaces com foco em produto: telas responsivas,
            componentes reutilizáveis e experiências que equilibram clareza,
            performance e organização do código.
          </p>
          <p>
            Uso React, Next.js, TypeScript, SSR, Redux, React Query, Tailwind,
            MUI, Ant Design, zod e react-hook-form para criar fluxos consistentes,
            formulários robustos e layouts mobile-first.
          </p>
        </>
      ),
    },
    {
      ...skills[3],
      isOpen: isDeliveryModalOpen,
      openModal: () => setIsDeliveryModalOpen(true),
      closeModal: () => setIsDeliveryModalOpen(false),
      content: (
        <>
          <p>
            Gosto de fechar o ciclo entre código e produção. Além de desenvolver,
            preparo ambientes, organizo deploys e automatizo partes do processo
            para reduzir trabalho manual e risco operacional.
          </p>
          <p>
            Tenho vivencia com Docker, Docker Swarm, Dockerfile, Docker Compose,
            Portainer, Nginx Proxy Manager, Jenkins, GitLab CI/CD, VPS Linux e
            Windows, IIS e estudos aplicados em AWS com EC2, S3 e SQS.
          </p>
        </>
      ),
    },
  ];

  const previous = () => {
    if (slideRef.current.scrollLeft < 18) {
      return (slideRef.current.scrollLeft += 945);
    }
    return (slideRef.current.scrollLeft -= 200);
  };

  const next = () => {
    if (slideRef.current.scrollLeft >= 650) {
      return (slideRef.current.scrollLeft -= 945);
    }
    return (slideRef.current.scrollLeft += 200);
  };

  return (
    <SkillsContainer id="Section-C">
      <Title>Skills</Title>
      <Slide>
        <SlideButton onClick={() => previous()} id="previous">
          &#60;
        </SlideButton>
        <SlideButton onClick={() => next()} id="next">
          &#62;
        </SlideButton>
        <CardWrapper ref={slideRef} id="slides">
          {skillCards.map((skill) => (
            <Card
              key={skill.title}
              wave={skill.wave}
              card_fill={skill.cardFill}
              icon={skill.icon}
              shadow={skill.shadow}
              shadow_hover={skill.shadowHover}
              onClick={skill.openModal}
            >
              <h2>{skill.title}</h2>
              <p>{skill.description}</p>
            </Card>
          ))}
        </CardWrapper>
      </Slide>

      {skillCards.map((skill) => (
        <Modal
          key={skill.title}
          isOpen={skill.isOpen}
          onClose={skill.closeModal}
          backColor={skill.cardFill}
          icon={skill.icon}
          shadow={skill.shadowHover}
        >
          <h2>{skill.title}</h2>
          {skill.content}
        </Modal>
      ))}
    </SkillsContainer>
  );
}

export default Skills;
