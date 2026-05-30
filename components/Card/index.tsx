import type { ButtonHTMLAttributes, CSSProperties } from "react";

type CardStyle = CSSProperties & Record<`--${string}`, string>;

type CardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  summary: string;
  wave: string;
  icon: string;
  shadow: string;
  cardFill: string;
  shadowHover: string;
};

export default function Card({
  title,
  summary,
  wave,
  icon,
  shadow,
  cardFill,
  shadowHover,
  ...rest
}: CardProps) {
  const style: CardStyle = {
    "--wave": `url(${wave})`,
    "--icon": `url(${icon})`,
    "--card-fill": cardFill,
    "--shadow": shadow,
    "--shadow-hover": shadowHover,
  };

  return (
    <button
      type="button"
      style={style}
      className="skill-card relative z-1 my-12 mx-3 h-[28.12em] w-[17.18em] shrink-0 cursor-pointer overflow-hidden rounded-2xl border-2 border-(--color-secondary) bg-[#202020] bg-(image:--wave) bg-bottom bg-no-repeat p-0 text-center text-[#f2f2f2] [word-wrap:break-word]"
      {...rest}
    >
      <span className="skill-card-bg pointer-events-none absolute top-8 right-[calc(50%-3rem)] left-[calc(50%-3rem)] z-1 h-24 rounded-full bg-(image:--card-fill)" />
      <span className="skill-card-icon pointer-events-none absolute top-8 left-1/2 z-20 h-24 w-24 -translate-x-1/2 rounded-full bg-[#151515] bg-(image:--icon) bg-center bg-no-repeat shadow-[0_0_5px_4px_var(--shadow)]" />

      <span className="pointer-events-none absolute top-37 left-1/2 z-10 block w-[14.5em] -translate-x-1/2 px-3">
        <span className="block text-[1.15rem] font-semibold leading-tight">
          {title}
        </span>
      </span>

      <span className="pointer-events-none absolute top-51 bottom-8 left-1/2 z-10 flex w-[14.5em] -translate-x-1/2 items-center justify-center rounded px-3 py-4">
        <span className="block text-base leading-snug">{summary}</span>
      </span>
    </button>
  );
}
