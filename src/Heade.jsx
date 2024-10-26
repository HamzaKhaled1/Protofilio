const Header=()=>{

return <>
<div className="flex pt-4 pr-16 pl-16 justify-between items-center">
    <p className="font-extrabold text-4xl text-white">Hamza <span className="text-green-600">.</span></p>


<div className="">
    <li className="text-white flex gap-4 font-semibold">
        <ul className="cursor-pointer text-green-600 hover:text-green-600">Home</ul>
        <ul className="cursor-pointer hover:text-green-600"><a href="#services">Services</a> </ul>
        <ul className="cursor-pointer hover:text-green-600"><a href="#projects">Work</a></ul>
        <ul className="cursor-pointer hover:text-green-600"><a href="#Aboutme">About Me</a></ul>

    </li>

</div>
</div>

</>
}

export default Header;