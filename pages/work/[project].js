import {useState} from 'react'
import { Navbar } from "../../components/nav/Navbar";
import { ProjectImage } from "../../components/projects/ProjectImage";
export default function project ({project}){
    project = {name: "porject nam", id: "01"}
    const [clicked, setClicked] = useState(undefined)
    return (
        <>
        <div className="nav-wrappper">
            <Navbar setClicked={setClicked}/>
        </div>
        <ProjectImage project={project} isExpanded={true}/>
        </>
    )
}