import { JPBProvider } from '@jpbbots/theme'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <JPBProvider useCssReset useGlobalStyle cookies={pageProps.cookies}>
        <Component {...pageProps} />
      </JPBProvider>
    </>
  )
}
export default MyApp
