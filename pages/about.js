import Head from 'next/head'
import {useRouter} from 'next/router'
import {TweenMax, gsap} from 'gsap'
import {useState, useEffect, useRef} from 'react'
import {Navbar} from '../components/nav/Navbar'

const skills = [
    {name: "html", size: "small", top: "0%", left: "0%", i: 0},
    {name: "css", size: "small", top: "50%", left: "30%", i: 1},
    {name: "javascript", size: "big", top: "20%", left: "5%", i: 2},
    {name: "sass", size: "big", top: "55%", left: "45%", i: 3},
    {name: "next", size: "big", top: "0%", left: "25%", i: 4},
    {name: "react", size: "small", top: "60%", left: "2%", i: 5},
    {name: "gulp", size: "small", top: "70%", left: "80%", i: 6},
    {name: "mongo", size: "small", top: "40%", left: "70%", i: 7},
    {name: "express", size: "small", top: "20%", left: "45%", i: 8},
    {name: "node", size: "small", top: "65%", left: "15%", i: 9},
    {name: "jest", size: "small", top: "10%", left: '60%', i: 10},
    {name: "gsap", size: "big", top: "2%", left: "75%", i: 11},
]
export default function about(){
    const [clicked, setClicked] = useState(undefined)
    let nav, container, content = useRef(null)
    const router = useRouter()
    let circles, HTMLcirc, CSScirc, JScirc, SASScirc, NEXTcirc, REACTcirc, GULPcirc, MONGOcirc, EXPRESScirc, NODEcirc, JESTcirc, GSAPcirc
    useEffect(() => {
        circles = document.querySelectorAll('.skill')
        HTMLcirc = document.querySelectorAll('.html-circle')[0]
        CSScirc = document.querySelectorAll('.css-circle')[0]
        JScirc = document.querySelectorAll('.javascript-circle')[0]
        SASScirc = document.querySelectorAll('.sass-circle')[0]
        NEXTcirc = document.querySelectorAll('.next-circle')[0]
        REACTcirc = document.querySelectorAll('.react-circle')[0]
        GULPcirc = document.querySelectorAll('.gulp-circle')[0]
        MONGOcirc = document.querySelectorAll('.mongo-circle')[0]
        EXPRESScirc = document.querySelectorAll('.express-circle')[0]
        NODEcirc = document.querySelectorAll('.node-circle')[0]
        JESTcirc = document.querySelectorAll('.jest-circle')[0]
        GSAPcirc = document.querySelectorAll('.gsap-circle')[0]
    }, [])
    // ENTER ANIMATION
    useEffect(()=>{
        let enterTl = gsap.timeline()
        enterTl
            .from(container, {width: "0px", duration: 1})
            .to(content, {opacity: "1", duration: 0.2})
            .from(circles, {scale: 0, bottom: 0, duration: 0.5, delay: -0.25, stagger: 0.1})
    },[])

    //  CIRCLE FLOAT ANIMATION
    useEffect(()=>{
        const floatTl = gsap.timeline({repeat: -1 ,defaults: {ease: "none"}})
        floatTl
            .to(HTMLcirc, {left: "2%", top: "2%", duration: 1.5, delay: 0})
            .to(CSScirc, {left: "32%", top: "45%", duration: 1.5, delay: -1.5})
            .to(JScirc, {left: "7%", top: "22%", duration: 1.5, delay: -1.5})
            .to(SASScirc, {left: "47%", top: "45%", duration: 1.5, delay: -1.5})
            .to(NEXTcirc, {left: "24%", top: "2%", duration: 1.5, delay: -1.5})
            .to(REACTcirc, {left: "5%", top: "55%", duration: 1.5, delay: -1.5})
            .to(GULPcirc, {left: "75%", top: "65%", duration: 1.5, delay: -1.5})
            .to(MONGOcirc, {left: "75%", top: "42%", duration: 1.5, delay: -1.5})
            .to(EXPRESScirc, {left: "50%", top: "25%", duration: 1.5, delay: -1.5})
            .to(NODEcirc, {left: "20%", top: "70%", duration: 1.5, delay: -1.5})
            .to(JESTcirc, {left: "55%", top: "0%", duration: 1.5, delay: -1.5})
            .to(GSAPcirc, {left: "70%", top: "4%", duration: 1.5, delay: -1.5})

            .to(HTMLcirc, {left: "5%", top: "5%", duration: 1.5, delay: -0})
            .to(CSScirc, {left: "35%", top: "42%", duration: 1.5, delay: -1.5})
            .to(JScirc, {left: "10%", top: "26%", duration: 1.5, delay: -1.5})
            .to(SASScirc, {left: "51%", top: "50%", duration: 1.5, delay: -1.5})
            .to(NEXTcirc, {left: "28%", top: "0%", duration: 1.5, delay: -1.5})
            .to(REACTcirc, {left: "5%", top: "59%", duration: 1.5, delay: -1.5})
            .to(GULPcirc, {left: "72%", top: "62%", duration: 1.5, delay: -1.5})
            .to(MONGOcirc, {left: "80%", top: "45%", duration: 1.5, delay: -1.5})
            .to(EXPRESScirc, {left: "53%", top: "22%", duration: 1.5, delay: -1.5})
            .to(NODEcirc, {left: "25%", top: "73%", duration: 1.5, delay: -1.5})
            .to(JESTcirc, {left: "52%", top: "3%", duration: 1.5, delay: -1.5})
            .to(GSAPcirc, {left: "66%", top: "7%", duration: 1.5, delay: -1.5})

            .to(HTMLcirc, {left: "2%", top: "7%", duration: 1.5, delay: -0})
            .to(CSScirc, {left: "36%", top: "38%", duration: 1.5, delay: -1.5})
            .to(JScirc, {left: "13%", top: "29%", duration: 1.5, delay: -1.5})
            .to(SASScirc, {left: "48%", top: "56%", duration: 1.5, delay: -1.5})
            .to(NEXTcirc, {left: "30%", top: "3%", duration: 1.5, delay: -1.5})
            .to(REACTcirc, {left: "3%", top: "63%", duration: 1.5, delay: -1.5})
            .to(GULPcirc, {left: "75%", top: "62%", duration: 1.5, delay: -1.5})
            .to(MONGOcirc, {left: "83%", top: "42%", duration: 1.5, delay: -1.5})
            .to(EXPRESScirc, {left: "52%", top: "26%", duration: 1.5, delay: -1.5})
            .to(NODEcirc, {left: "28%", top: "70%", duration: 1.5, delay: -1.5})
            .to(JESTcirc, {left: "50%", top: "0%", duration: 1.5, delay: -1.5})
            .to(GSAPcirc, {left: "69%", top: "4%", duration: 1.5, delay: -1.5})

            .to(HTMLcirc, {left: "5%", top: "5%", duration: 1.5, delay: -0})
            .to(CSScirc, {left: "35%", top: "42%", duration: 1.5, delay: -1.5})
            .to(JScirc, {left: "10%", top: "26%", duration: 1.5, delay: -1.5})
            .to(SASScirc, {left: "51%", top: "50%", duration: 1.5, delay: -1.5})
            .to(NEXTcirc, {left: "28%", top: "0%", duration: 1.5, delay: -1.5})
            .to(REACTcirc, {left: "5%", top: "59%", duration: 1.5, delay: -1.5})
            .to(GULPcirc, {left: "72%", top: "62%", duration: 1.5, delay: -1.5})
            .to(MONGOcirc, {left: "80%", top: "45%", duration: 1.5, delay: -1.5})
            .to(EXPRESScirc, {left: "53%", top: "22%", duration: 1.5, delay: -1.5})
            .to(NODEcirc, {left: "25%", top: "73%", duration: 1.5, delay: -1.5})
            .to(JESTcirc, {left: "52%", top: "3%", duration: 1.5, delay: -1.5})
            .to(GSAPcirc, {left: "66%", top: "7%", duration: 1.5, delay: -1.5})

            .to(HTMLcirc, {left: "2%", top: "2%", duration: 1.5, delay: 0})
            .to(CSScirc, {left: "32%", top: "45%", duration: 1.5, delay: -1.5})
            .to(JScirc, {left: "7%", top: "22%", duration: 1.5, delay: -1.5})
            .to(SASScirc, {left: "47%", top: "45%", duration: 1.5, delay: -1.5})
            .to(NEXTcirc, {left: "24%", top: "2%", duration: 1.5, delay: -1.5})
            .to(REACTcirc, {left: "5%", top: "55%", duration: 1.5, delay: -1.5})
            .to(GULPcirc, {left: "75%", top: "65%", duration: 1.5, delay: -1.5})
            .to(MONGOcirc, {left: "75%", top: "42%", duration: 1.5, delay: -1.5})
            .to(EXPRESScirc, {left: "50%", top: "25%", duration: 1.5, delay: -1.5})
            .to(NODEcirc, {left: "20%", top: "70%", duration: 1.5, delay: -1.5})
            .to(JESTcirc, {left: "55%", top: "0%", duration: 1.5, delay: -1.5})
            .to(GSAPcirc, {left: "70%", top: "4%", duration: 1.5, delay: -1.5})

            .to(HTMLcirc, {left: "0%", top: "0%", duration: 2, delay: 0})
            .to(CSScirc, {left: "30%", top: "50%", duration: 2, delay: -2})
            .to(JScirc, {left: "5%", top: "20%", duration: 2, delay: -2})
            .to(SASScirc, {left: "45%", top: "55%", duration: 2, delay: -2})
            .to(NEXTcirc, {left: "25%", top: "0%", duration: 2, delay: -2})
            .to(REACTcirc, {left: "2%", top: "60%", duration: 2, delay: -2})
            .to(GULPcirc, {left: "80%", top: "70%", duration: 2, delay: -2})
            .to(MONGOcirc, {left: "70%", top: "40%", duration: 2, delay: -2})
            .to(EXPRESScirc, {left: "45%", top: "20%", duration: 2, delay: -2})
            .to(NODEcirc, {left: "15%", top: "65%", duration: 2, delay: -2})
            .to(JESTcirc, {left: "60%", top: "10%", duration: 2, delay: -2})
            .to(GSAPcirc, {left: "75%", top: "2%", duration: 2, delay: -2})

    },[])

    // EXIT ANIMATION
    useEffect(()=>{
        if(!clicked) return
        circles = document.querySelectorAll('.skill')
        const exitTl = gsap.timeline()
        exitTl
            .to(circles, {scale: 0, duration: 0.5})
            .to(content, {opacity: 0, duration: 0.1})
            .to(container, {height: "0px", marginTop: "80vh", padding: "0", duration: 0.3, delay: -0.1})
        setTimeout(()=>{
            router.push(`/${clicked}`)
        }, 1000)
    },[clicked])
    return(
        <>
            <Head><title>About - James Todd</title></Head>
            <Navbar setClicked={setClicked}/>
            <div className="about-container" ref={el=> container = el}>
                <div className="about-inner" ref={el=> content = el}>
                    {skills.map(skill=> <div className={`skill ${skill.size} ${skill.name}-circle`} key={Math.random()} style={{top: skill.top, left: skill.left}}>{skill.name}</div>)}
                    <p className="about-me">hey, i'm a minneapolis based full stack developer. i like javscript, css and rest apis. hire me please.</p>
                </div>
            </div>
        </>
    )
}