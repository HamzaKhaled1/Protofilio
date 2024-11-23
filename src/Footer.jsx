import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer=()=>{
    return(<>
    <div className="w-min h-0.5  bg-slate-700 "></div>
    <div id="Aboutme" className=" w-full h-auto">

       <div className="bg-black sm:p-24 p-5  gap-10 flex flex-col sm:flex-row justify-between">
        <div>
            <p className="text-white text-3xl font-bold"> Hamza<span className="text-green-600">.</span></p>
        </div>
        <div className="flex flex-wrap gap-10 justify-between ">
            <div className="flex flex-col gap-4">
                <p className="text-white text-sm sm:text-xl  font-bold">Information</p>
                
                    <ul className="text-gray-400 text-sm  sm:text-base cursor-pointer flex gap-3 items-center hover:text-green-600"> <a href="https://wa.link/wdy75u" target="_blank" className="flex gap-3"><FaWhatsapp className="text-lg" />01156444834</a></ul>
                    <ul className="text-gray-400 text-sm  sm:text-base cursor-pointer  flex gap-3 items-center hover:text-red-500"> <BiLogoGmail className="text-lg" />hamza.khaled2091@gmail.com</ul>
                    <ul className="text-gray-400 text-sm  sm:text-base cursor-pointer flex gap-3 items-center hover:text-stone-500"><FaLocationDot className="text-lg" />Sarray Alkoppa, Cairo</ul>
                
            </div>
            <div className="flex flex-col gap-4 " >
                <p className="text-white text-sm sm:text-xl font-bold">SocialMedia&Links</p>
                <ul className="text-gray-400 text-sm sm:text-base cursor-pointer  hover:text-blue-500"><a href="https://www.linkedin.com/in/hamza-khaled-076563314/" target="_blank" className="flex gap-3 items-center"><FaLinkedin className="text-lg" />LinkedIn</a> </ul>
                <ul className="text-gray-400 text-sm  sm:text-base cursor-pointer  hover:text-teal-100 "> <a href="https://github.com/HamzaKhaled1" target="_blank" className="flex gap-3 items-center"><FaGithub className="text-lg"  />Github</a></ul>
                <ul className="text-gray-400 text-sm  sm:text-base cursor-pointer  hover:text-blue-500"><a href="https://www.facebook.com/hamza.khaled.731/" target="_blank" className="flex gap-3 items-center"><FaFacebookSquare  className="text-lg" />  Facebook</a></ul>

            </div>
        </div>
        </div> 
        <div className="w-full h-0.5 bg-slate-700 "></div>
        <div className="p-9">
            <p className="text-white text-xl">Developed by <span className="text-green-600">Hamza .</span></p>
        </div>
    </div>
    </>) 
}

export default Footer;