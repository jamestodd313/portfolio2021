import Head from 'next/head'
import {useRouter} from 'next/router'
import {TweenMax} from 'gsap'
import {useEffect, useState, useRef} from 'react'
import {Navbar} from '../components/nav/Navbar'

export default function Home({pageData}) {
  let app, james, todd, block1, block2, box, content, nav, watermark = useRef(null)
  const router = useRouter()
  //=======================================================
  // INTRO TEXT
  const [firstTxt, setFirstTxt] = useState('JAMES')
  const [lastTxt, setLastTxt] = useState('TODD')
  useEffect(()=>{
    if(window.innerWidth < 768){
      setFirstTxt('J')
      setLastTxt('T')
    } 
  },[])

  //=======================================================
  // ENTER ANIMATION
  useEffect(()=>{
    if(!app) return
    //  MAKE APP VISIBLE
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
    //  JAMES TODD TEXT COMES IN
    TweenMax.to(james, 0.5, {css: {translateY: "-90%"}}).delay(0)
    TweenMax.to(todd, 0.5, {css: {translateY: "90%"}}).delay(0)
    //  BLOCKS DISAPPEAR
    TweenMax.from(block1, {css: {visibility: 'visible', display: "block"}}).delay(0.5)
    TweenMax.from(block2, {css: {visibility: 'visible', display: "block"}}).delay(0.5)
    // JAMES TODD TEXT LEAVES
    TweenMax.to(james, 0.3, {css: {color: "transparent", webkitTextStroke: "1px black"}}).delay(1.15)
    TweenMax.to(todd, 0.3, {css: {color: "transparent", webkitTextStroke: "1px black"}}).delay(1.15)
    TweenMax.to(james, 0.5, {css: {translateX: "150vw"}}).delay(1.35)
    TweenMax.to(todd, 0.5, {css: {translateX: "-150vw"}}).delay(1.35)
    // CIRCLE TEXT COMES IN
    TweenMax.to(content, 0.5, {css: {visibility: "visible", opacity: 1}}).delay(1.3)
    TweenMax.from(content, 0.5, {css: {scale: 0.1}}).delay(1.3)
    // MENU SLIDES UP
    TweenMax.to(nav, 0.75, {css: {visibility: "visible", translateY: "0", zIndex: "0"}}).delay(1.4)
    if(window.innerWidth > 992) TweenMax.from(watermark, 0.75, {css: {left: "100px", opacity: "0"}}).delay(1.4)
    // PAGE BOX COMES IN
    TweenMax.from(box, 0.6, {css: {height: "1px", marginTop: "50vh"}}).delay(1.5)
    TweenMax.to(box, 1, {css: {visibility: "visible"}}).delay(1.5)
  },[app])


  //========================================================
  // EXIT ANIMATION
  const [clicked, setClicked] = useState(undefined)
  useEffect(()=>{
    if(!clicked) return
    //play exit animation
    TweenMax.to(content, 0.3, {css: {scale: "10", ease: "back"}},)
    TweenMax.to(watermark, 0.2, {css: {translateX: "100px", opacity: "0"}})
    TweenMax.to(box, 0.25, {css: {height: "0px"}}).delay(0.25)
    //send browser to clicked link
    setTimeout(()=>{
      router.push(`/${clicked}`)
      setClicked(undefined)
    }, 750)
  },[clicked])


  //========================================================
  // CIRCLE TEXT STUFF 
  const [letters, setLetters] = useState([])
  useEffect(()=>{
    if(!pageData.circleText) return
    setLetters(pageData.circleText.split(""))
  },[pageData])
  useEffect(()=>{
    if(!letters) return
    const lets = document.querySelectorAll('.circle-letter')
    let degreesToRotate = 360 / lets.length
    let i = 0
    lets.forEach(letter=>{
      TweenMax.to(letter, 1.5, {css: {rotate: `${i}deg`}}).delay(i / 149)
      i = i + degreesToRotate
    })
  },[letters])




  return (
    <div className="wrapper" ref={el=> app = el}>
      <Head>
        <title>{pageData.title ? pageData.title : 'Welcome - James Todd'}</title>
        <meta property="og:title" content="James Todd - Full Stack Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jamestodd.dev" />
        <meta property="og:image" content="https://jamestodd.dev/ogimg.jpg"/>
      </Head>
      <div className="nav-wrap" ref={el=> nav = el}>
        <Navbar setClicked={setClicked}/>
      </div>

      {/* intro animation stuff */}
      <div className="block1" ref={el=>block1 = el}/>
      <span className="load-txt" aria-hidden="true" ref={el=> james = el}>{firstTxt}</span>
      <span className="load-txt" aria-hidden="true" ref={el=> todd = el}>{lastTxt}</span>
      <div className="block2" ref={el=>block2 = el}/>


      {/* page content */}
      <section className="content-container" ref={el=> box = el}>
        <span className="watermark" ref={el=> watermark = el}>{pageData.watermark}</span>
        <div className="content-inner" ref={el=> content = el}>
          <div className="circle-text">
            <h1>
            {letters.map(letter=>{
              return <span className="circle-letter" key={Math.random()}>{letter}</span>
            })}
            </h1>

          </div>
          <svg className="dashed-circle" xmlns="http://www.w3.org/2000/svg" width="191" height="191" viewBox="0 0 191 191">
            <g id="Inner_Circle" data-name="Inner Circle" fill="none" stroke="#707070" strokeWidth="5" strokeDasharray="50">
              <circle cx="95.5" cy="95.5" r="95.5" stroke="none"/>
              <circle cx="95.5" cy="95.5" r="93" fill="none"/>
            </g>
          </svg>
        </div>
      </section>
    </div>
  )
}

export const getStaticProps = async()=> {
  const pageCall = await fetch('https://jamestodd.dev/api/_v1/interface/pages/home')
  const pageData = await pageCall.json()
  return {props: {pageData: pageData[0]}}
}