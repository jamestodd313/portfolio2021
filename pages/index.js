import Head from 'next/head'
import {TweenMax} from 'gsap'
import {useEffect, useState, useRef} from 'react'
import {Navbar} from '../components/nav/Navbar'


export default function Home() {
  let app, bar, james, todd, block1, block2, box, content, nav, watermark = useRef(null)

  //========================================================
  // EXIT ANIMATION
  const [clicked, setClicked] = useState(undefined)
  useEffect(()=>{
    if(!clicked) return
    //play exit animation
    TweenMax.to(nav, 0.25, {css: {translateY: "100px", opacity: "0"}})
    TweenMax.to(content, 0.85, {css: {scale: "10"}})
    TweenMax.to(watermark, 0.25, {css: {translateX: "100px", opacity: "0"}})
    TweenMax.to(box, 0.25, {css: {height: "0px"}}).delay(0.25)
    //send browser to clicked link
    setTimeout(()=>{
      window.location.href= `/${clicked}`
      setClicked(undefined)
    }, 800)
  },[clicked])
  //========================================================


  //========================================================
  // CIRCLE TEXT STUFF 
  const [letters, setLetters] = useState([])
  useEffect(()=>{
    let str = "james todd•minneapolis•full stack web developer•mern•gsap•i need a job•"
    setLetters(str.split(""))
  },[])
  useEffect(()=>{
    const lets = document.querySelectorAll('.circle-letter')
    let i = 0
    lets.forEach(letter=>{
      letter.style.transform = `rotate(${i}deg)`
      i = i + 5.07042253521
    })
  },[letters])
  //=======================================================


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


  //=======================================================
  // INTRO ANIMATION
  useEffect(()=>{
    //  MAKE APP VISIBLE
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
    //  LOADING BAR GROW
    TweenMax.to(bar, 0.75, {css: {width: "calc(100vw - 80px)"}})
    //  JAMES TODD TEXT COMES IN
    TweenMax.to(james, 0.5, {css: {translateY: "-90%"}}).delay(0.85)
    TweenMax.to(todd, 0.5, {css: {translateY: "90%"}}).delay(0.85)
    //  BLOCKS DISAPPEAR
    TweenMax.from(block1, {css: {visibility: 'visible', display: "block"}}).delay(0.85)
    TweenMax.from(block2, {css: {visibility: 'visible', display: "block"}}).delay(0.85)
    // BAR DISAPPEARS
    TweenMax.to(bar, 0.25, {css: {opacity: "0"}}).delay(0.85)
    // JAMES TODD TEXT LEAVES
    TweenMax.to(james, 0.3, {css: {color: "transparent", webkitTextStroke: "1px black"}}).delay(2)
    TweenMax.to(todd, 0.3, {css: {color: "transparent", webkitTextStroke: "1px black"}}).delay(2)
    TweenMax.to(james, 0.5, {css: {translateX: "150vw"}}).delay(2.3)
    TweenMax.to(todd, 0.5, {css: {translateX: "-150vw"}}).delay(2.3)


// PAGE BOX COMES IN
    TweenMax.from(box, 0.6, {css: {height: "1px", marginTop: "50vh"}}).delay(2.5)
    TweenMax.to(box, 1, {css: {visibility: "visible"}}).delay(2.5)
// MENU SLIDES UP
    TweenMax.to(nav, 0.75, {css: {visibility: "visible", translateY: "0", zIndex: "0"}}).delay(3.2)
    TweenMax.from(watermark, 0.75, {css: {left: "100px", opacity: "0"}}).delay(3.2)
// CIRCLE TEXT COMES IN
    TweenMax.to(content, 0.5, {css: {visibility: "visible", opacity: 1}}).delay(3.6)
  },[app])
  //=======================================================



  return (
    <div className="wrapper" ref={el=> app = el}>
      <Head>
        <title>James Todd</title>
      </Head>
      <div className="nav-wrap" ref={el=> nav = el}>
        <Navbar setClicked={setClicked}/>
      </div>

      {/* intro animation stuff */}
      <div className="loader" ref={el=> bar = el}/>
      <div className="block1" ref={el=>block1 = el}/>
      <span className="load-txt" ref={el=> james = el}>{firstTxt}</span>
      <span className="load-txt" ref={el=> todd = el}>{lastTxt}</span>
      <div className="block2" ref={el=>block2 = el}/>


      {/* page content */}
      <section className="content-container" ref={el=> box = el}>
        <span className="watermark" ref={el=> watermark = el}>2021 PORTFOLIO</span>
        <div className="content-inner" ref={el=> content = el}>
          <div className="circle-text">
            {letters.map(letter=>{
              return <span className="circle-letter" key={Math.random()}>{letter}</span>
            })}
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
