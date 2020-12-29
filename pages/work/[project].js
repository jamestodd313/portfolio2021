import {useEffect, useState, useRef} from 'react'
import {useRouter} from 'next/router'
import { Navbar } from "../../components/nav/Navbar";
import { ProjectImage } from "../../components/projects/ProjectImage";
import {TweenMax} from 'gsap'
import Head from 'next/head';
export default function project ({project}){
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

    //GO BACK
    const router = useRouter()
    function handleBack(e){

    }

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
            <button className="demo">DEMO</button>
            <button className="repo">REPO</button>
        </div>

        <section className="project-wrapper">
            <div className="project-info" ref={el=> projectInfo = el}>
                <div className="project-meta">
                    <span className="label" id="title-label" ref={el=> titleLabel = el}>PROJECT NAME</span>
                    <h1 className="project-title" ref={el=> title = el}>{project.title}</h1>
                    <p className="project-description" ref={el=> description = el}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quo nisi sapiente. Architecto quas impedit ullam quasi rem cupiditate alias nulla consectetur. Excepturi, reiciendis quisquam.
                    </p>
                </div>
                <div className="project-images" ref={el=> projectImages = el}>
                    <div className="project-image"></div>
                </div>
                <div className="details">
                    {/* <div className="detail-item">
                        <span className="label">CLIENT</span>
                        <span className="detail-txt">Client Name Here</span>
                    </div> */}
                    <div className="detail-item">
                        <span className="label">TYPE</span>
                        <span className="detail-txt">Full Stack Development</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Built With</span>
                        <span className="detail-txt built">{project.builtWith.map(tool=> `${tool} // `)}</span>
                    </div>
                </div>
            </div>
            <div className="project-links" ref={el=> projectLinks = el}>
                    <a href="#" target="_blank" className="big-link cta-link">demo</a>
                    <a href="#" target="_blank" className="big-link cta-link">repo</a>
            </div>
            <a onClick={e=> exitAnimation("back")} className="big-link back-link">back</a>

        </section>
        
        </>
    )
}

project.getInitialProps = async (ctx)=> {
    let project = {
        id: "01", 
        title: "porject nam",
        images: [],
        slug: "project-name",
        lightNav: true,
        builtWith: ["MERN", "GSAP", "MongoDB", "Mongoose"]
    }
    return {project}
}