import Head from 'next/head'
import '../styles/main.css'
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Hairline&family=Lacquer&family=Montserrat&family=Staatliches&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
