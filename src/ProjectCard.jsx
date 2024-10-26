import { IoOpenOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import ProjectPage from "./ProjectPage";
const ProjectCard=({image, Name ,link,id})=>{
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/project/${id}`);
    }
return(
    <>
    <div className="bg-transparent flex flex-col">
        <img src={image} alt="" className="w-[32rem] h-96 " />
        <div className="flex flex-col gap-3">
        <p className="text-white text-2xl font-bold mt-5 ">{Name}</p>
       
        <p className="text-green-600 text-lg flex gap-3 items-center cursor-pointer hover:text-white transition duration-150" onClick={()=>{handleClick(id)}}>
            See Project <IoOpenOutline  className="text-lg"/></p>
    

            </div>

    </div>
    </>
)

}

export default ProjectCard;