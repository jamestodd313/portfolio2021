// import Head from 'next/head'
// import '../styles/main.css'
// function MyApp({ Component, pageProps }) {
  // return(
  //   <>
  //     <Head>
  //       <link rel="preconnect" href="https://fonts.gstatic.com"/>
  //       <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Hairline&family=Lacquer&family=Montserrat&family=Staatliches&display=swap" rel="stylesheet"/>
  //       {/* <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"/> */}
  //     </Head>
  //     <Component {...pageProps} />
  //   </>
  // ) 
// }

// export default MyApp



import Head from 'next/head'
import '../styles/main.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return(
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Hairline&family=Lacquer&family=Montserrat&family=Staatliches&display=swap" rel="stylesheet"/>
        <meta charset="UTF-8"/>
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default App
