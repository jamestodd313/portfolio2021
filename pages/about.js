import Head from 'next/head'
import {useRouter} from 'next/router'
import {TweenMax, gsap} from 'gsap'
import {useState, useEffect, useRef} from 'react'
import {Navbar} from '../components/nav/Navbar'


export default function about({pageData}){
    const [clicked, setClicked] = useState(undefined)
    let nav, container, content = useRef(null)
    const router = useRouter()
    let circles, HTMLcirc, CSScirc, JScirc, SASScirc, NEXTcirc, REACTcirc, webpackcirc, MONGOcirc, EXPRESScirc, NODEcirc, JESTcirc, GSAPcirc
    useEffect(() => {
        circles = document.querySelectorAll('.skill')
        HTMLcirc = document.querySelectorAll('.html-circle')[0]
        CSScirc = document.querySelectorAll('.css-circle')[0]
        JScirc = document.querySelectorAll('.javascript-circle')[0]
        SASScirc = document.querySelectorAll('.sass-circle')[0]
        NEXTcirc = document.querySelectorAll('.next-circle')[0]
        REACTcirc = document.querySelectorAll('.react-circle')[0]
        webpackcirc = document.querySelectorAll('.gulp-circle')[0]
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
            .from(container, {width: "0px", duration: 0.8, ease: "back"})
            .to(content, {opacity: "1", duration: 0.2, delay: "-0.3"})
            .from(circles, {scale: 0, bottom: 0, duration: 0.5, delay: "-0.2", stagger: 0.1, ease: "back"})
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
            .to(webpackcirc, {left: "75%", top: "65%", duration: 1.5, delay: -1.5})
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
            .to(webpackcirc, {left: "72%", top: "62%", duration: 1.5, delay: -1.5})
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
            .to(webpackcirc, {left: "75%", top: "62%", duration: 1.5, delay: -1.5})
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
            .to(webpackcirc, {left: "72%", top: "62%", duration: 1.5, delay: -1.5})
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
            .to(webpackcirc, {left: "75%", top: "65%", duration: 1.5, delay: -1.5})
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
            .to(webpackcirc, {left: "80%", top: "70%", duration: 2, delay: -2})
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
                    {pageData.skills.map(skill=> <div className={`skill ${skill.size} ${skill.name}-circle`} key={Math.random()} style={{top: skill.top, left: skill.left}}>{skill.name}</div>)}
                    <p className="about-me">{pageData.bio}</p>
                </div>
            </div>
        </>
    )
}

about.getInitialProps = async ctx=> {
    const pageCall = await fetch('https://portfolio2021-two.vercel.app/api/_v1/interface/pages/about')
    let pageData = await pageCall.json()

    return {pageData: pageData[0]}
}