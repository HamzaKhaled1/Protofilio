import ProjectCard from "./ProjectCard"
import Galleria from "../public/Projects/Galleria.webp"
import projectsdata from "../projects.json"
import axios from "axios"
import { useEffect, useState } from "react"
const Projects=()=>{
     const projects=[
        {
            "id": 1,
            "name": "Galleria-slideshow-site",
            "image": "../public/Projects/Galleria.webp",
            "link": "https://github.com/HamzaKhaled1/Galleria-slideshow-site.git"
        },
        {
            "id": 2,
            "name": "Dictionary",
            "image": "../public/Projects/Dictionary.webp",
            "link": "https://github.com/HamzaKhaled1/dictionary.git"
        }
        ,
        {
            "id": 3,
            "name": "BlackMart",
            "image": "../public/Projects/BlackMart.jpg",
            "link": "https://github.com/HamzaKhaled1/Galleria-slideshow-site.git"
        }
        ,
        {
            "id": 4,
            "name": "Time-tracking-dashboard",
            "image": "../public/Projects/Time Tracking.jpg",
            "link": "https://github.com/HamzaKhaled1/Time-tracking-dashboard.git"
        }
    ]
    
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
                    projects.map((project)=><ProjectCard Name={project.name} image={project.image}/>
                    )
                }
                

            </div>

        </div>
        
        </>
    )
}

export default Projects 