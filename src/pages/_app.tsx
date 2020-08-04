import '@openfonts/inter_all'
import '@openfonts/noto-sans-jp_japanese'
import '@openfonts/noto-sans-kr_korean'
import '@openfonts/noto-sans-kr_latin'
import { CssBaseline, ZeitProvider } from '@zeit-ui/react'
import { AppProps } from 'next/app'
import React from 'react'
import { JssProvider } from 'react-jss'

function App ({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>{`
      body, h1, h2, h3, h4, h5, h6, div, span {
        font-family: 'Inter', 'Noto Sans KR', 'Noto Sans JP', sans-serif !important;
      }
    `}</style>
    <JssProvider id={{ minify: true }}>
      <ZeitProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ZeitProvider>
    </JssProvider>
  </>
}

export default App
