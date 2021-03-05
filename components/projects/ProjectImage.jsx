import Image from 'next/image'

export const ProjectImage = ({project, setSelectedProject, isExpanded}) => {
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
    function handleClick(e){
        if(isExpanded) return
        setSelectedProject(e.currentTarget)
    }
    return (
        <a tabIndex="0" className={`project-thumbnail-wrapper ${isExpanded ? 'expanded' : ''}`} id={project.slug} onFocus={e=> handleHover(e)} onMouseOver={e=> handleHover(e)} onMouseLeave={unHover} onClick={e=> handleClick(e)}>
            <img src={project.coverImage} className="project-thumbnail" rel="preload" alt={project.title}/>
            <span className="project-thumbnail-title">{project.title}</span>
        </a>
    )
}