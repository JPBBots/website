import { Flex } from '@chakra-ui/react'
import { JPBProvider } from '@jpbbots/theme'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <JPBProvider useCssReset useGlobalStyle cookies={pageProps.cookies}>
        <Flex h="full" flexDirection="column" minH="full" w="full" flexGrow={1}>
          <Component {...pageProps} />
        </Flex>
      </JPBProvider>
    </>
  )
}
export default MyApp
