import React from "react"
import { Provider } from "jotai"
import type { AppProps } from "next/app"

import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
