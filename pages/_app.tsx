import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React, { Fragment } from 'react'
import Head from 'next/head'

import '@/styles/globals.css'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const Container = (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <title>Find.ai help you find everything in seconds</title>
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://onboarding.per-diem.co" />
        <meta property="og:title" content="Local subscriptions made easy" />
        <meta
          property="og:description"
          content=""
        />
        <meta
          property="og:image"
          content="https://cdn.per-diem.co/assets/favicon.ico"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link
          rel="icon"
          type="image/ico"
          href="https://cdn.per-diem.co/assets/favicon.ico"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )

  return Container;
}

export default App