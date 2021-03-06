import {TweenMax, gsap} from 'gsap'
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from "react";
import { Navbar } from "../../components/nav/Navbar";
import { ProjectImage } from '../../components/projects/ProjectImage';

import dbConnect from '../../mongo/dbConnect'
import mongoose from 'mongoose'
import Project from '../../mongo/models/project'
import { ExternalLinks } from '../../components/nav/ExternalLinks';

export default function index({projects, links}){   
    // ENTER ANIMATION
    useEffect(()=>{
        let container = document.querySelectorAll('.projects-container')[0]
        const enterTl = gsap.timeline()
        enterTl
            .from(container, {width: 0, ease: "bounce", duration: 0.8})
    },[])

    // OPEN PROJECT ANIMATION
    const [selectedProject, setSelectedProject] = useState(undefined)
    useEffect(()=>{
        if(!selectedProject) return
        let unselected = []
        document.querySelectorAll('.project-thumbnail-wrapper').forEach(img=>{
            if(img !== selectedProject) unselected.push(img)
        })
        setTimeout(()=>{
            unselected.forEach(img=> img.style.display = 'none')
        }, 50)


        let transitionTl = gsap.timeline({defaults: {ease: "bounce"}})
        transitionTl
            .to(selectedProject, {position: "fixed", zIndex: -10, duration: 0})
            .to(selectedProject, {top: 0, left:0, duration: 0.3, minWidth: "100vw", height: "80vh", objectFit: "cover", objectPosition: "center"})
            .to(selectedProject.firstChild, {width: "100vw"})
            .add(()=>{ 
                selectedProject.blur()
                selectedProject.onClick = null
                selectedProject.classList.add('expanded')
            })
        setTimeout(()=>{ router.push(`/work/${selectedProject.id}`)}, 850)
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
        setTimeout(()=>{router.push(`/${clicked}`)}, 1000)
    },[clicked])

    return (
        <>
        <Head>
            <title>Work - James Todd</title>
        </Head>
        <Navbar setClicked={setClicked}/>
        <div className="projects-container">
            {projects.map(proj=> <ProjectImage key={proj._id} project={proj} setSelectedProject={setSelectedProject}/>)}
        </div>
        {links && <ExternalLinks links={links}/>}
        </>
    )
}

export const getStaticProps = async ()=> {
    if(mongoose.connection.readyState === 0) dbConnect()
    const projects = await Project.find()

    const pageCall = await fetch('https://jamestodd.dev/api/_v1/interface/pages/contact')
    const pageData = await pageCall.json()
    
    return {props: {projects: JSON.parse(JSON.stringify(projects)), links: pageData[0].links}}
}