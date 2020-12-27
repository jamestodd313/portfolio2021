import React, { useEffect, useState } from 'react'

export const ProjectImage = ({project, setSelectedProject, isExpanded}) => {
    const [expanded, setExpanded] = useState(false)
    useEffect(()=>{
        if(isExpanded) setExpanded(true)
    },[])
    function handleHover(e){
        let thumbos = document.querySelectorAll('.project-thumbnail-wrapper')
        thumbos.forEach(thumbnail=>{
            if(thumbnail !== e.target) thumbnail.classList.add('small')
        })
    }
    function unHover(e){
        let thumbos = document.querySelectorAll('.project-thumbnail-wrapper')
        thumbos.forEach(thumbnail=> thumbnail.classList.remove('small'))
    }
    return (
        <div className={`project-thumbnail-wrapper ${expanded ? 'expanded' : ''}`} id={`project-${project.id}`} onMouseOver={e=> handleHover(e)} onMouseLeave={unHover} onClick={e=> setSelectedProject(e.currentTarget)}>
            <img src={'/images/project-placeholder-01.jpg'} className="project-thumbnail"/>
            <span className="project-thumbnail-title">{project.name}</span>
        </div>
    )
}


// on click, setSelectedProject as e.currentTarget
// in the index page, have an effect that fire on selectedProject change
// have the effect trigger a gsap animation. something like this:
// for each thumbnail if the thumbnail === selectedProject, add the 'expanded' class to the selected project
// otherwise remove the unselected thumbnail from the dom
// after animations are done, router.push(/project-name)