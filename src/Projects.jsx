import ProjectCard from "./ProjectCard"
import Galleria from "../public/Projects/Galleria.webp"
import projectsdata from "../projects.json"
import axios from "axios"
import { useEffect, useState } from "react"
const Projects=()=>{
    const [projects,setProjects]=useState([]);
    console.log(projectsdata.Projects)
    useEffect(()=>{ setProjects(projectsdata.Projects)},[])
    console.log(projects)
    return(
        <>
        <div id="projects" className="bg-neutral-700 p-36 pt-10" >
            <div className="flex flex-col gap-7">
                <div className="flex gap-4 items-center">
                <div className="bg-green-600 w-16 h-0.5"></div>
                <div className=" text-green-600 text-lg font-bold">Recent Work</div>
                </div>
                <p className="text-white text-4xl font-bold w-96">Some of my favorite projects</p>
            </div>
            <div className="flex flex-wrap gap-16 mt-28 justify-center">
                {
                    projects.map((project)=><ProjectCard key={project.id} Name={project.name} image={project.image} id={project.id} Link={project.link} />
                    )
                }
                

            </div>

        </div>
        
        </>
    )
}

export default Projects 