import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Theme from '../styles/theme'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
