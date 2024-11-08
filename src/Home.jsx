import { MdOutlineFileDownload } from "react-icons/md";

const Home=()=>{

return(
<>
<div className="flex">
<div className="sm:p-40  p-5 pb-30 text-white w-min flex h-full flex-col gap-7">
    <div className="flex flex-col gap-2">
    <p className="text-green-600 text-4xl font-bold">Hello I'm Hamza Khaled.</p>
    <p className="text-6xl font-extrabold ">Web Developer <span className="font-normal animate-blink">|</span></p>
    </div>
<div className="text-gray-500 sm:w-[40rem] w-72 ">
    I'm a Computer Engineer from Egypt and I am a highly skilled MERN Stack Developer with a strong foundation in Computer
    Engineering, gained through my studies at Shorouck Academy and further enhanced by
    diverse learning experiences, including the DEPI Diploma. Specializing in MongoDB,
    Express.js, React, and Node.js, I have developed dynamic, responsive web applications
    that prioritize user experience and performance. My expertise spans front and backend
    development, ensuring seamless, scalable solutions across devices. I thrive in fast-paced
    environments, and I am committed to delivering high-quality results that are aligned
    with modern web standards and business goals.
</div>
<div className="flex gap-10 ">
    <div className="bg-green-600 text-lg  cursor-pointer hover:bg-green-400 pt-2 pb-2 pr-4 pl-4  text-white"> <a href="mailto:hamza.khaled2091@gmail.com">Email me</a> </div>
    <div className="bg-transparent cursor-pointer text-gray-500 pt-2 pb-2 pr-4 pl-4 flex gap-3 items-center text-lg "><a href="https://drive.google.com/uc?export=download&id=1NDEyykSFp6bsdeNfnMwy9G0dwvEdwRsq" className="flex gap-3 items-center"><MdOutlineFileDownload className="text-xl" /> Downlod CV</a></div>

</div>
</div>
<div className="h-full w-full mt-32 hidden sm:block">
    <img src="/image.png" alt="" className="w-[50rem]" />
</div>


</div>
</>
)
}

export default Home;