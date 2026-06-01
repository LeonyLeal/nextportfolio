type ThemeToggleProps = {
  onClick: () => void;
  className?: string;
};

export default function ThemeToggle({
  onClick,
  className = "",
}: ThemeToggleProps) {
  return (
    <button
      type="button"
      aria-label="Alternar tema"
      onClick={onClick}
      className={`h-[2.2rem] w-[2.2rem] cursor-pointer bg-(image:--theme-icon) bg-contain bg-center bg-no-repeat hover:bg-(image:--theme-icon-fill) ${className}`}
    />
  );
}
