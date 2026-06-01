import Head from "next/head";
import Link from "next/link";
import { Bubbles } from "../sections/AboutMe";

function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Página não encontrada</title>
      </Head>
      <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-(image:--about-bg) px-6 py-12 text-center">
        <Bubbles className="top-0! h-full! max-h-none!" />
        <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
          <p className="m-0 select-none text-[clamp(5rem,22vw,12rem)] font-black leading-none text-white/20">
            404
          </p>
          <h1 className="-mt-4 m-0 select-none text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Essa página saiu do mapa.
          </h1>
          <p className="mt-5 max-w-2xl select-none text-base leading-relaxed text-white/90 sm:text-xl">
            O link pode ter mudado, ou talvez a rota nunca tenha existido. Você
            pode voltar para o início e continuar navegando pelo portfólio.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded bg-white px-5 py-2 text-base font-bold text-[#252525]! no-underline shadow-[0_12px_30px_rgba(0,0,0,.18)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(0,0,0,.22)]"
            >
              Voltar ao início
            </Link>
            <Link
              href="/#Section-D"
              className="inline-flex min-h-11 items-center justify-center rounded border border-white/70 px-5 py-2 text-base font-bold text-white no-underline transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Ver projetos
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

NotFound.hideNavbar = true;

export default NotFound;
