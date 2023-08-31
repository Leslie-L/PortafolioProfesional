function CardTools({tool}) {
    return(
        <div className="w-28 h-28 shadow-xl rounded-lg flex flex-col justify-center justify-self-center items-center dark:bg-white dark:shadow-white dark:shadow-md dark:border-2 dark:border-white">
            {tool.icon}
            <p>{tool.name}</p>
        </div>
    )
}
export default CardTools;