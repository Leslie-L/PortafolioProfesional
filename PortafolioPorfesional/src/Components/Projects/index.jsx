import { projectInfo } from "../../Constants";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";
function Projects() {
    return(
        <section id='projects' className="mt-20 mb-20 w-full max-h-full min-h-screen flex flex-col justify-center bg-white dark:bg-black">
            <div  className='w-full md:h-1/5'>
                <h2 className='justify-self-start px-4 font-beba font-bold text-xl text-orange'>{projectInfo.TITLE}</h2>
            </div>
            <div className="w-full flex justify-center ">
                <div className="pl-[300px] pb-6 w-[95%] overflow-x-auto snap-x snap-mandatory  flex flex-1 space-x-10 items-center  md:pl-0 sm:pb-0" >
                    {
                        projects.map(project=>{
                            return <ProjectCard key={project.title} props={project}/>
                        })
                    }
                </div>
                
            </div>
        </section>
    )
}
export default Projects;