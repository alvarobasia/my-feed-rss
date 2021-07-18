import type { AppProps } from 'next/app'
import GlobalStyle from '../../styles/globals'
import { ThemeProvider } from 'styled-components'
import light from '../../styles/themes/light'
import { AnimateSharedLayout } from 'framer-motion'
import client from '../../apollo-client'
import { ApolloProvider } from '@apollo/client'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimateSharedLayout>
        <ThemeProvider theme={light}>
          <GlobalStyle />
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </AnimateSharedLayout>
    </>
  )
}
export default MyApp
