import Card from "./Card";
import Frontendlogo from "../public/Frontendlogo.png"
const Services=()=>{

    return(
        <>
        <div id="services"> 
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
        <div className="pb-20 flex justify-evenly">
            <Card  name="Frontend develop"
                description="Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS."
                logo={Frontendlogo}
            />
            <Card  name="Frontend develop"
                description="Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS."
                logo={Frontendlogo}
            />
            <Card  name="Frontend develop"
                description="Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS."
                logo={Frontendlogo}
            />
        </div>
       </div>
        </>
    )
}

export default Services;