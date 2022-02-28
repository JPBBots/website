import { Flex } from '@chakra-ui/react'
import { JPBProvider } from '@jpbbots/theme'
import Head from 'next/head'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="https://branding.jt3ch.net/jpbbots.png" />
        <title>JPBBots</title>

        <meta property="og:image" content="https://branding.jt3ch.net/jpbbots.png" />
        <meta name="theme-color" content="#3269a9" />
        <meta property="og:title" content="JPBBots" />
        <meta
          property="og:description"
          content="Creating the bots you love, serving over 120,000 communities"
        />
        <meta
          name="description"
          content="Creating the bots you love, serving over 120,000 communities"
        />
      </Head>
      <JPBProvider useCssReset useGlobalStyle cookies={pageProps.cookies}>
        <Flex h="full" flexDirection="column" minH="full" w="full" flexGrow={1}>
          <Component {...pageProps} />
        </Flex>
      </JPBProvider>
    </>
  )
}
export default MyApp
