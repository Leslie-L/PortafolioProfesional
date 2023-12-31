function ProjectCard({props}) {
    function tech(name) {
        return(
            <span key={`${name}-${props.title}`} className="bg-beige font-monserrat rounded-xl h-7 w-auto px-2 text-center">
                {name}
            </span>
        )
    }
    return(//
        <article className="w-[300px] h-[450px] snap-always snap-center mb-2 flex-shrink-0 p-6 rounded-lg shadow-lg  bg-white flex flex-col justify-center items-center dark:bg-black dark:shadow-white ">
            {props.img}
            <h3 className="font-montserrat font-semibold text-md text-blue text-center">{props.title}</h3>
            <p className="font-montserrat font-light text-sm m-2 flex-1 dark:text-white">{props.description}</p>
            <a className="p-1 w-auto h-7 rounded-md bg-orange self-start font-bebas text-white hover:bg-pink" href={props.github}>Github Repository</a>
            <div className="self-start py-2">
                <h4 className="font-montserrat font-semibold text-md text-blue">Technologies</h4>
                <div className="flex flex-wrap justify-start  items-center space-x-1 space-y-1">
                    {props.technoligies.map(item=>{
                        return tech(item)
                    })}
                </div>
            </div>
            <a className=" p-1 pb-1 w-full h-8 rounded-md bg-orange font-bebas text-white self-start text-center hover:bg-pink"  href={props.link}>Visit Website</a>
        </article>
    )
}
export default ProjectCard;