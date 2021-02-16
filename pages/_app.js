import Head from 'next/head'
import '../styles/main.css'
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P3WBVCMECD"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-P3WBVCMECD');
        </script>



        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Hairline&family=Lacquer&family=Montserrat&family=Staatliches&display=swap" rel="stylesheet"/>
        {/* <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"/> */}
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
