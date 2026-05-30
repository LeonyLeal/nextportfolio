import type { AppProps } from "next/app";
import Head from "next/head";
import type { NextPage } from "next";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { themes, type ThemeName } from "../styles/theme";

type ThemeVariables = CSSProperties & Record<`--${string}`, string>;

type PortfolioPage = NextPage & {
  hideNavbar?: boolean;
};

type PortfolioAppProps = AppProps & {
  Component: PortfolioPage;
};

const THEME_STORAGE_KEY = "portfolio-theme";

function getStoredTheme(): ThemeName {
  if (typeof window === "undefined") return "dark";

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  return storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : "dark";
}

export default function MyApp({ Component, pageProps }: PortfolioAppProps) {
  const [themeName, setThemeName] = useState<ThemeName>(getStoredTheme);
  const theme = themes[themeName];

  const onThemeClick = () => {
    setThemeName((current) => (current === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = themeName;
    document.body.dataset.theme = themeName;
    window.localStorage.setItem(THEME_STORAGE_KEY, themeName);
  }, [themeName]);

  const themeVariables: ThemeVariables = {
    "--nav-bg": `url(${theme.menuBackground.src})`,
    "--burger-icon": `url(${theme.burger.src})`,
    "--theme-icon": `url(${theme.buttonTheme.src})`,
    "--theme-icon-fill": `url(${theme.buttonThemeFill.src})`,
    "--social-figma": `url(${theme.social.figma.src})`,
    "--social-figma-fill": `url(${theme.social.figmaFill.src})`,
    "--social-github": `url(${theme.social.github.src})`,
    "--social-github-fill": `url(${theme.social.githubFill.src})`,
    "--social-instagram": `url(${theme.social.instagram.src})`,
    "--social-instagram-fill": `url(${theme.social.instagramFill.src})`,
    "--social-linkedin": `url(${theme.social.linkedin.src})`,
    "--social-linkedin-fill": `url(${theme.social.linkedinFill.src})`,
  };

  return (
    <div
      data-theme={themeName}
      style={themeVariables}
      suppressHydrationWarning
      className="min-h-screen bg-(--color-primary) text-(--color-secondary)"
    >
      <Head>
        <title>Leony.dev</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favico.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favico.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta
          name="description"
          content="Portfolio Leony Leal, Desenvolvedor Fullstack"
        />
      </Head>
      {!Component.hideNavbar && <Navbar onChangeTheme={onThemeClick} />}
      <Component {...pageProps} />
    </div>
  );
}
