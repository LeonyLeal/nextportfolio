import { ThemeProvider } from "styled-components"
import {GlobalStyles} from '../styles/GlobalStyles'
import dark from '../styles/theme/dark'
import light from '../styles/theme/light'
import Navbar from "../components/Navbar"
import { useState } from "react"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(dark);

  const onThemeClick = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };
  return(
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <>
    <Head>
      <title>Leony</title>
    </Head>
     <Navbar onChangeTheme={onThemeClick} />
     <Component {...pageProps} />
     </>
  </ThemeProvider>
  
  )
}

export default MyApp
