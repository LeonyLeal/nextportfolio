import { useRef, useState } from "react";

type NavbarProps = {
  onChangeTheme: () => void;
};

export default function Navbar({ onChangeTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const closeMenu = () => {
    if (!isMenuOpen) return;

    setIsMenuOpen(false);
  };

  const navAnimation = isMenuOpen
    ? "animate-[navOutIn_1s_forwards]"
    : "animate-[navInOut_1s_forwards]";

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 z-1000 flex h-full w-full select-none flex-row flex-wrap items-center justify-between bg-(--color-primary) bg-(image:--nav-bg) bg-contain bg-bottom bg-no-repeat ${
          isMenuOpen ? "visible" : "invisible"
        } ${navAnimation} sm:visible! sm:h-11 sm:bg-transparent sm:bg-none sm:animate-none!`}
      >
        <div className="mx-auto flex h-full min-h-11 w-full flex-col flex-wrap items-center justify-evenly overflow-hidden text-center sm:m-0 sm:h-auto sm:min-h-[3.7em] sm:flex-row sm:justify-start sm:bg-black/10 sm:p-0 sm:shadow-[0_8px_32px_rgba(0,0,0,.1),inset_0_1px_0_rgba(0,0,0,.5),inset_0_-1px_0_rgba(0,0,0,.1),inset_0_0_8px_4px_rgba(0,0,0,.4)] sm:backdrop-blur-sm">
          {[
            ["Sobre mim", "/#Section-A"],
            ["Social", "/#Section-B"],
            ["Skills", "/#Section-C"],
            ["Projects", "/#Section-D"],
          ].map(([label, href]) => (
            <a
              key={href}
              onClick={closeMenu}
              href={href}
              className="cursor-pointer text-[2rem] no-underline [-webkit-user-drag:none] sm:px-4 sm:text-[1.4rem]"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div className="fixed inset-x-0 top-0 z-1001 mx-4 flex h-fit flex-row flex-wrap justify-between sm:hidden">
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="h-7.5 w-7.5 cursor-pointer bg-(image:--burger-icon) bg-center bg-no-repeat"
        />
        <button
          type="button"
          aria-label="Alternar tema"
          onClick={onChangeTheme}
          className="h-[2.2rem] w-[2.2rem] cursor-pointer bg-(image:--theme-icon) bg-contain bg-center bg-no-repeat hover:bg-(image:--theme-icon-fill)"
        />
      </div>

      <button
        type="button"
        aria-label="Alternar tema"
        onClick={onChangeTheme}
        className="fixed top-[1.85rem] right-6 z-1001 hidden h-[2.2rem] w-[2.2rem] -translate-y-1/2 cursor-pointer bg-(image:--theme-icon) bg-contain bg-center bg-no-repeat hover:bg-(image:--theme-icon-fill) sm:block"
      />
    </>
  );
}
