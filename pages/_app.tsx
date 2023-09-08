import '../styles/globals.scss'
import React from 'react'
import usePageView from '../src/hooks/usePageView'
import Script from 'next/script'
import * as gtag from '../src/lib/gtag'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }) => {
  usePageView()

  const router = useRouter()
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouterChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouterChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${gtag.GA_MEASUREMENT_ID}');
           `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
