import '../styles/globals.scss'
import React from 'react'
import usePageView from '../src/hooks/usePageView'

const MyApp = ({ Component, pageProps }) => {
  usePageView()

  return <Component {...pageProps} />
}

export default MyApp
