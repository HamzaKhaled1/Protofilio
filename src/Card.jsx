const Card=({name,description,logo})=>{



    return(
        <>
        <div className="bg-neutral-700 flex flex-col relative justify-between   pb-10 pl-4 pr-12 w-96 h-96 text-white after:marker:">
            <img src={logo} alt=""  className="w-56 mt-8 "/>
            <div className="flex flex-col gap-4">
            <p className="text-3xl font-bold">{name}</p>
            <p className="text-gray-400 text-sm">{description}</p>
            </div>
            <div className="absolute h-2 w-full bg-green-600 bottom-0 inset-x-0 "></div>
        </div>
        </>
    )
}

export default Card;