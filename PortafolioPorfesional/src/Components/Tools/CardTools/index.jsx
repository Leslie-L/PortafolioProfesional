function CardTools({tool}) {
    return(
        <div className="w-28 h-28 shadow-xl rounded-lg flex flex-col justify-center justify-self-center items-center">
            {tool.icon}
            <p>{tool.name}</p>
        </div>
    )
}
export default CardTools;