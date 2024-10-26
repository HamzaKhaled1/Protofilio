import Card from "./Card";
import Frontendlogo from "../public/Frontendlogo.png"
import Mernlogo from "../public/Mernlogo.png"
import UIUX from "../public/UIUX.png"
const Services=()=>{

    return(
        <>
        <div id="services" > 
        <div className=" pl-32 pr-32 pt-10 pb-48 flex h-full justify-between items-center">
            <div>
             <p className="text-white text-4xl font-bold w-[35rem]">Years of experience in Web Development</p>
            </div>
            
                    <div className="flex flex-col ">
                        <div className="flex items-center gap-4 ">
                        <div className="bg-green-600 w-20 h-0.5"></div>
                        <div className=" text-green-600 text-lg font-bold">Services</div>
                    </div>
                        <p className="text-gray-500 w-80 ">Discover the best services I offer, designed to ensure the success of your project.</p>
             </div>
        </div>
        <div className="pb-20 flex flex-wrap gap-10 justify-evenly">
            <Card  name="MERN Stack develop"
                description="Skilled in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js). Proficient in building responsive and interactive applications, with a focus on creating seamless user experiences and robust backend functionality."
                logo={Mernlogo}
            />
            <Card  name="Frontend develop"
                description="Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS."
                logo={Frontendlogo}
            />
            <Card  name="UI/UX develop"
                description="Passionate about creating intuitive and engaging user interfaces. Specializing in user research, wireframing, and prototyping, with a strong understanding of responsive design principles to enhance user experience across devices."
                logo={UIUX}
            />
        </div>
       </div>
        </>
    )
}

export default Services;