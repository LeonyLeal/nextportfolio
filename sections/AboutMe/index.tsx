import Image from "next/image";
import type { CSSProperties } from "react";
import { Carousel } from "../../components/CarouselMemo";
import type { GithubProfile } from "../../service/github";

type AboutMeProps = {
  yearsExperience: number;
  command: string;
  profile: GithubProfile;
};

type BubbleStyle = CSSProperties & Record<`--${string}`, string>;

const bubbles: Array<{
  className: string;
  style: BubbleStyle;
}> = [
  {
    className: "h-6 w-6",
    style: {
      left: "6%",
      bottom: "-12%",
      "--bubble-duration": "8.2s",
      "--bubble-delay": "-6.4s",
      "--bubble-drift-start": "-10px",
      "--bubble-drift-end": "38px",
    },
  },
  {
    className: "h-4 w-4",
    style: {
      left: "16%",
      bottom: "-18%",
      "--bubble-duration": "9.6s",
      "--bubble-delay": "-1.8s",
      "--bubble-drift-start": "22px",
      "--bubble-drift-end": "-24px",
    },
  },
  {
    className: "h-10 w-10",
    style: {
      left: "27%",
      bottom: "-10%",
      "--bubble-duration": "10.8s",
      "--bubble-delay": "-8.7s",
      "--bubble-drift-start": "-18px",
      "--bubble-drift-end": "30px",
    },
  },
  {
    className: "h-[1.4em] w-[1.4em]",
    style: {
      left: "39%",
      bottom: "-15%",
      "--bubble-duration": "7.8s",
      "--bubble-delay": "-3.1s",
      "--bubble-drift-start": "8px",
      "--bubble-drift-end": "-36px",
    },
  },
  {
    className: "h-[.9em] w-[.9em]",
    style: {
      left: "51%",
      bottom: "-22%",
      "--bubble-duration": "9.1s",
      "--bubble-delay": "-5.5s",
      "--bubble-drift-start": "-28px",
      "--bubble-drift-end": "18px",
    },
  },
  {
    className: "h-[1.8em] w-[1.8em]",
    style: {
      left: "62%",
      bottom: "-8%",
      "--bubble-duration": "11.4s",
      "--bubble-delay": "-2.4s",
      "--bubble-drift-start": "12px",
      "--bubble-drift-end": "-28px",
    },
  },
  {
    className: "h-16 w-16",
    style: {
      left: "73%",
      bottom: "-16%",
      "--bubble-duration": "12s",
      "--bubble-delay": "-9.3s",
      "--bubble-drift-start": "-20px",
      "--bubble-drift-end": "42px",
    },
  },
  {
    className: "h-[1.6em] w-[1.6em]",
    style: {
      left: "87%",
      bottom: "-11%",
      "--bubble-duration": "8.8s",
      "--bubble-delay": "-4.6s",
      "--bubble-drift-start": "18px",
      "--bubble-drift-end": "-18px",
    },
  },
  {
    className: "h-4 w-4",
    style: {
      left: "94%",
      bottom: "-24%",
      "--bubble-duration": "10.2s",
      "--bubble-delay": "-7.2s",
      "--bubble-drift-start": "-32px",
      "--bubble-drift-end": "6px",
    },
  },
  {
    className: "h-7 w-7",
    style: {
      left: "33%",
      bottom: "-20%",
      "--bubble-duration": "13.2s",
      "--bubble-delay": "-11s",
      "--bubble-drift-start": "30px",
      "--bubble-drift-end": "-14px",
    },
  },
  {
    className: "h-5 w-5",
    style: {
      left: "81%",
      bottom: "-18%",
      "--bubble-duration": "7.4s",
      "--bubble-delay": "-6.9s",
      "--bubble-drift-start": "-12px",
      "--bubble-drift-end": "26px",
    },
  },
];

export function Bubbles({ className = "" }: { className?: string }) {
  return (
    <div
      id="Bubbles"
      className={`pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {bubbles.map((bubble, index) => (
        <span
          key={`${bubble.style.left}-${index}`}
          style={bubble.style}
          className={`bubble absolute rounded-full bg-(image:--bubble-bg) ${bubble.className}`}
        />
      ))}
    </div>
  );
}

export default function AboutMe({
  yearsExperience,
  command,
  profile,
}: AboutMeProps) {
  return (
    <section
      id="Section-A"
      className="mt-20 flex min-h-fit scroll-mt-20 flex-col items-stretch"
    >
      <h1 id="Who" className="section-title">
        Sobre mim
      </h1>
      <div className="relative overflow-hidden bg-(image:--about-bg) bg-cover bg-center px-6 py-10 text-center">
        <Bubbles />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center">
          <h1 className="w-full max-w-184 py-6 pb-0 text-left text-2xl font-normal italic [-webkit-user-drag:none] sm:self-start sm:text-[2rem] lg:ml-[calc((100%-64rem)/2)]">
            Leony Leal
          </h1>
          <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <div className="flex w-full max-w-184 flex-col items-center justify-center">
              <p className="select-none px-1 text-center text-base font-normal [-webkit-user-drag:none] sm:text-[1.4rem]">
                Atuo no mercado de trabalho com desenvolvimento de software{" "}
                <strong>há {yearsExperience} anos</strong>, construindo
                sistemas web seguros, escaláveis e eficientes para ambientes
                reais de produção. Tenho experiência em todo o ciclo do
                software, da modelagem de dados e desenvolvimento de APIs à
                criação de interfaces responsivas, integrações e otimização de
                consultas. Trabalho principalmente com <strong>.NET</strong>,{" "}
                <strong>SQL Server</strong>, <strong>Next.js</strong>,{" "}
                <strong>React</strong> e <strong>TypeScript</strong>, além de
                atuar com infraestrutura, automação de entregas e deploys usando{" "}
                <strong>Docker</strong>, Linux, Windows Server e pipelines de{" "}
                <strong>CI/CD</strong>.
              </p>
              <p className="w-full select-none pr-4 text-end text-sm font-normal sm:text-base">
                {command}
              </p>
            </div>
            <div className="flex w-fit flex-col items-center">
              <Image
                alt="Foto Perfil"
                src={profile.avatar_url}
                width={240}
                height={240}
                unoptimized
                id="Profile_Photo"
                className="h-auto w-[calc(100%-50px)] max-w-50 select-none rounded-[10em] border-[5px] border-white/80 [-webkit-user-drag:none] sm:w-60 sm:max-w-none"
              />
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
