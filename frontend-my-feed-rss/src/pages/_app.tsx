import type { AppProps } from 'next/app'
import GlobalStyle from '../../styles/globals'
import { ThemeProvider } from 'styled-components'
import light from '../../styles/themes/light'
import { AnimateSharedLayout } from 'framer-motion'
import client from '../../apollo-client'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from '../contexts/AuthContext'
import { FeedProvider } from '../contexts/FeedContext'
import 'react-toastify/dist/ReactToastify.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimateSharedLayout>
        <ApolloProvider client={client}>
          <AuthProvider>
            <FeedProvider>
              <ThemeProvider theme={light}>
                <GlobalStyle />
                <Component {...pageProps} />
              </ThemeProvider>
            </FeedProvider>
          </AuthProvider>
        </ApolloProvider>
      </AnimateSharedLayout>
    </>
  )
}
export default MyApp
