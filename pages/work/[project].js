import {useEffect, useState, useRef} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head';
import { Navbar } from "../../components/nav/Navbar";
import { ProjectImage } from "../../components/projects/ProjectImage";

import {TweenMax, gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ImageSlider } from '../../components/projects/ImageSlider';


gsap.registerPlugin(ScrollTrigger);



export default function project ({project}){
    const router = useRouter()
    const [clicked, setClicked] = useState(undefined)
    // REMOVE "//" FROM END OF BUILT WITH SECTION
    useEffect(()=>{
        let str = document.querySelectorAll('.detail-txt.built')[0]
        if(str.innerText.endsWith("//")) str.innerText = str.innerText.substring(0, str.innerText.length - 2)
    }, [])

    // ENTER ANIMATION
    let ctaBtns, titleLabel, title, description, projectImages, projectInfo, projectLinks = useRef(null)
    useEffect(()=>{
        TweenMax.from(ctaBtns, 0.5, {css: {translateY: "-200px"}})
        TweenMax.from(titleLabel, 0.5, {css: {translateX: "-200px"}})
        TweenMax.from(title, 0.5, {css: {translateY: "200px"}})
        TweenMax.from(description, 0.5, {css: {translateY: "200px"}})
        TweenMax.from(document.querySelectorAll('.project-images')[0], 0.5, {css: {translateX: "200px", opacity: "0"}})
    },[])

    // SCROLL ANIMATIION
    useEffect(()=>{
        let scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: projectLinks,
                start: "top bottom",
            }
        })
        scrollTl.to(ctaBtns, {translateY: "-100px", opacity: 0, duration: 0.5})
    },[])


    // EXIT ANIMATION
    function exitAnimation(pageToGoTo){
        // pass the destination page as the parameter.
        // push to page at end of animation
        TweenMax.to(ctaBtns, 0.5, {css: {translateY: "-200px", opacity: "0"}})
        TweenMax.to(titleLabel, 0.5, {css: {translateX: "-200px", opacity: "0"}})
        TweenMax.to(title, 0.5, {css: {translateY: "200px", opacity: "0"}})
        TweenMax.to(description, 0.5, {css: {translateY: "200px", opacity: "0"}})
        TweenMax.to(document.querySelectorAll(`.expanded`)[0], 0.5, {css: {translateY: "-500vh"}})
        TweenMax.to(projectInfo, 0.5, {css: {translateY: "200px", opacity: "0"}})
        TweenMax.to(projectImages, 0.5, {css: {translateX: "200px", opacity: "0"}})
        TweenMax.to(projectLinks, 0.5, {css: {translateY: "-20px", opacity: "0"}})
        setTimeout(()=>{
            if(pageToGoTo === "clicked") router.push(`/${clicked}`)
            else if(pageToGoTo === "back") router.back()
        }, 700)
    }

    // TRANSITION TO OTHER PAGE
    useEffect(()=>{
        if(!clicked) return
        exitAnimation("clicked")
    },[clicked])

    return (
        <>
        <Head>
            <title>{`${project.title} - James Todd`}</title>
        </Head>
        <div className="nav-wrappper">
            <Navbar setClicked={setClicked} light={project.lightNav}/>
        </div>
        <ProjectImage project={project} isExpanded={true}/>
        <div className="cta-buttons" ref={el=> ctaBtns = el}>
            <a className="demo" href={project.demo} target="_blank">DEMO</a>
            <a className="repo" href={project.repo} target="_blank">REPO</a>
        </div>

        <section className="project-wrapper">
            <div className="project-info" ref={el=> projectInfo = el}>
                <div className="project-meta">
                    <span className="label" id="title-label" ref={el=> titleLabel = el}>PROJECT NAME</span>
                    <h1 className="project-title" ref={el=> title = el}>{project.title}</h1>
                    <p className="project-description" ref={el=> description = el}>
                        {project.description}
                    </p>
                </div>
                <div className="project-images" ref={el=> projectImages = el}>
                    <ImageSlider images={project.sliderImages}/>
                </div>
                <div className="details">
                    <div className="detail-item">
                        <span className="label">TYPE</span>
                        <span className="detail-txt">{project.type}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Built With</span>
                        <span className="detail-txt built">{project.builtWith.map(tool=> `${tool} // `)}</span>
                    </div>
                </div>
            </div>
            <div className="project-links" ref={el=> projectLinks = el}>
                    <a href={project.demo} target="_blank" className="big-link cta-link">demo</a>
                    <a href={project.repo} target="_blank" className="big-link cta-link">repo</a>
            </div>
            <a onClick={e=> exitAnimation("back")} className="big-link reverse back-link">back</a>
        </section>
        </>
    )
}

// project.getInitialProps = async (ctx)=> {
//     const projectCall = await fetch(`https://jamestodd.dev/api/_v1/interface/projects/${ctx.query.project}`)
//     const projectData = await projectCall.json()
//     return {project: projectData}
// }

export const getServerSideProps = async(ctx)=> {
    const projectCall = await fetch(`https://jamestodd.dev/api/_v1/interface/projects/${ctx.query.project}`)
    const projectData = await projectCall.json()
    return {props: {project: projectData}}
}