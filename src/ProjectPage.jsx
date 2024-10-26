import projectsdata from "../projects.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoOpenOutline } from "react-icons/io5";

const ProjectPage=()=>{
    const id=useParams().id;
    const [project,setProject]=useState({});
    useEffect(()=>{
        setProject(projectsdata.Projects[id-1])
    },[])
    
    console.log(project)

    console.log(project.image)
    return(
        <>
        <div className="text-white p-14 gap-5 flex h-screen">
    <div>
        <img src={project.image} alt={project.name} />
    </div>
    <div className="flex flex-col gap-10">
        <p className="text-6xl font-bold ">{project.name}</p>
        <div className="flex flex-col gap-5">
        <p className="text-2xl ">Description:</p>
        <p className="w-[40rem] opacity-70">{project.description}</p>
        </div>
    <div className=" flex  gap-5">
    <p>Code Link:</p>
    <p> <a href={project.link} target="_blank" className="flex gap-3 items-center cursor-pointer hover:text-green-700 transition duration-150"><IoOpenOutline  className="text-lg"/> Link </a></p>
    </div>
    </div>


        </div>
        </>
    )
}
export default ProjectPage;