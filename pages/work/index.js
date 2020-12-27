import {TweenMax, gsap} from 'gsap'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from "react";
import { Navbar } from "../../components/nav/Navbar";
import { ProjectImage } from '../../components/projects/ProjectImage';
export default function index({projects}){
   
    // ENTER ANIMATION
    useEffect(()=>{
        let project = document.querySelectorAll('.project-thumbnail-wrapper')
        let container = document.querySelectorAll('.projects-container')[0]
        const enterTl = gsap.timeline()
        enterTl
            .from(container, {width: 0})
            // .from(project[0], {width: 0, transition: 0})
            // .from(project[1], {height: 0, transition: 0, delay: -0.5})
            // .from(project[2], {width: 0, transition: 0, delay: -0.5})
            // .from(project[3], {height: 0, transition: 0, delay: -0.5})
        setTimeout(()=>{enterTl.kill()}, 1000)
    },[])

    // OPEN PROJECT ANIMATION
    projects = [{name: "porject nam", id: "01"}, {name: "porject nam", id: "02"}, {name: "porject nam", id:"03"}, {name: "porject nam", id:"04"}, ]
    const [selectedProject, setSelectedProject] = useState(undefined)
    useEffect(()=>{
        if(!selectedProject) return
        let unselected = []
        document.querySelectorAll('.project-thumbnail-wrapper').forEach(img=>{
            if(img !== selectedProject) unselected.push(img)
        })
        unselected.forEach(img=> img.style.opacity = 0)
        setTimeout(()=>{
            unselected.forEach(img=> img.style.display = 'none')
        }, 50)

        let transitionTl = gsap.timeline({defaults: {ease: "bounce"}})
        transitionTl
        .add(()=>{ selectedProject.onClick = null})
        // .to(selectedProject, {translateY: "-18%", translateX: "-11%", duration: 0.2})
        // .to(selectedProject, {minWidth: "100vw", height: "80vh", duration: 0.2})
        // .to(selectedProject.firstChild, {width: "100vw", duration: 0.2})

            .to(selectedProject, {position: "fixed", zIndex: 0})
            .to(selectedProject, {top: 0, left:0, duration: 0.3, minWidth: "100vw", height: "80vh", objectFit: "cover", objectPosition: "center"})
            .to(selectedProject.firstChild, {width: "100vw"})
        setTimeout(()=>{ router.push(`/work/${selectedProject.id}`)}, 1500)
    },[selectedProject])

    // EXIT ANIMATION
    
    const router = useRouter()
    const [clicked, setClicked] = useState(undefined)
    useEffect(()=>{

        if(!clicked) return
        let project = document.querySelectorAll('.project-thumbnail-wrapper')
        const exitTl = gsap.timeline()
        exitTl
        .to(project[0], {width: "0px", duration: 0.2})
        .to(project[1], {height: "0px", duration: 0.2, delay: "-0.1"})
        .to(project[2], {width: "0px", duration: 0.2, delay: "-0.1"})
        .to(project[3], {height: "0px", duration: 0.2, delay: "-0.1"})
        setTimeout(()=>{router.push(`/${clicked}`)}, 1500)
    },[clicked])

    return (
        <>
        <Navbar setClicked={setClicked}/>
        <div className="projects-container">
            {projects.map(proj=> <ProjectImage key={proj.id} project={proj} setSelectedProject={setSelectedProject}/>)}
        </div>
        </>
    )
}

index.getInitialProps = async(ctx)=> {
    let projects
    return {projects}
}