import type { CSSProperties, ReactNode } from "react";
import { useEffect } from "react";

type ModalStyle = CSSProperties & Record<`--${string}`, string>;

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  backColor: string;
  icon: string;
  shadow: string;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  backColor,
  icon,
  shadow,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const { body, documentElement } = document;

    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    body.classList.add("modal-open");
    documentElement.classList.add("modal-open");
    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      body.classList.remove("modal-open");
      documentElement.classList.remove("modal-open");
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const style: ModalStyle = {
    "--modal-bg": backColor,
    "--modal-icon": `url(${icon})`,
    "--modal-shadow": shadow,
  };

  return (
    <div
      className="fixed inset-0 z-2000 flex items-stretch justify-center overflow-hidden overscroll-contain bg-black/60 sm:items-center"
      onClick={onClose}
      onWheel={(event) => event.preventDefault()}
      role="presentation"
    >
      <section
        style={style}
        className="h-dvh w-full overflow-y-auto overscroll-contain border-0 bg-[linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)),var(--modal-bg)] px-6 py-5 shadow-[0_8px_32px_rgba(0,0,0,.1),inset_0_1px_0_rgba(0,0,0,.5),inset_0_-1px_0_rgba(0,0,0,.1),inset_0_0_8px_4px_rgba(0,0,0,.4)] backdrop-blur-sm sm:h-auto sm:max-h-[85dvh] sm:min-h-100 sm:w-[40em] sm:max-w-[90%] sm:rounded-2xl sm:border-2 sm:border-(--color-secondary) sm:p-8"
        onClick={(event) => event.stopPropagation()}
        onWheel={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="skill-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar modal"
          className="sticky top-0 z-10 ml-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-0 bg-black/20 text-[28px] leading-none text-white/80 backdrop-blur-sm hover:text-white"
        >
          &times;
        </button>
        <div className="flex min-h-[calc(100dvh-5rem)] w-full flex-col items-center justify-center pb-8 sm:min-h-0 sm:pb-0">
          <span className="modal-icon mt-2 h-20 w-20 rounded-full bg-[#151515] bg-(image:--modal-icon) bg-center bg-no-repeat shadow-[0_0_5px_4px_var(--modal-shadow)] sm:mt-8 sm:h-24 sm:w-24" />
          <div className="max-w-[34em] text-center text-white">
            <h2
              id="skill-modal-title"
              className="my-5 text-[1.45rem] leading-tight sm:text-[1.8rem]"
            >
              {title}
            </h2>
            <div className="[&>p]:m-3.5 [&>p]:text-base [&>p]:leading-relaxed sm:[&>p]:text-[1.05rem]">
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
