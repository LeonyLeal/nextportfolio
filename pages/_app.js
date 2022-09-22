import { ThemeProvider } from "styled-components"
import GlobalStyled from ''

function MyApp({ Component, pageProps }) {
  <ThemeProvider>
    <GlobalStyles>
  return <Component {...pageProps} />
    </GlobalStyles>
  </ThemeProvider>
}

export default MyApp
