import type { AppProps } from 'next/app'
import GlobalStyle from '../../styles/globals'
import { ThemeProvider } from 'styled-components'
import light from '../../styles/themes/light'
import { AnimateSharedLayout } from 'framer-motion'
import { Head } from 'next/document'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimateSharedLayout>
        <ThemeProvider theme={light}>
          <GlobalStyle />
          <head>
            <title>My feed RSS</title>
          </head>
          <Component {...pageProps} />
        </ThemeProvider>
      </AnimateSharedLayout>
    </>
  )
}
export default MyApp
