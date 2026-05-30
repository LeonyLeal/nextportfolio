import type { ReactNode } from "react";

type AppsProps = {
  title: string;
  children: ReactNode;
};

export default function Apps({ title, children }: AppsProps) {
  return (
    <article className="flex h-fit flex-col items-center">
      <h2 className="text-center text-2xl [-webkit-user-drag:none]">
        {title}
      </h2>
      <div className="w-4/5 text-center">{children}</div>
    </article>
  );
}
