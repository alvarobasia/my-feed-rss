import type { AppProps } from 'next/app'
import GlobalStyle from '../../styles/globals'
import { ThemeProvider } from 'styled-components'
import light from '../../styles/themes/light'
import { AnimateSharedLayout } from 'framer-motion'
import client from '../../apollo-client'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from '../contexts/AuthContext'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimateSharedLayout>
        <ApolloProvider client={client}>
          <AuthProvider>
            <ThemeProvider theme={light}>
              <GlobalStyle />
              <Component {...pageProps} />
            </ThemeProvider>
          </AuthProvider>
        </ApolloProvider>
      </AnimateSharedLayout>
    </>
  )
}
export default MyApp
