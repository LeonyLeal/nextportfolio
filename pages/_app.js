import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import dark from "../styles/theme/dark";
import light from "../styles/theme/light";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(dark);

  const onThemeClick = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Head>
          <title>Leony</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <meta name='description' content='Portifólio Leony Leal, Desenvolvedor Fullstack, Trabalho com React, Next, Vue, Django, Axios' />
        </Head>
        <Navbar onChangeTheme={onThemeClick} />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
