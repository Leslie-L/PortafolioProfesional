import { toolsInfo } from '../../Constants';
import CardTools from './CardTools';
import {technologies} from './infoTech';
function Tools() {
    return(
        <section id='tools' className='w-full  max-h-full min-h-screen flex flex-col justify-center md:items-center bg-white dark:bg-black '>
            <div  className='w-full md:h-1/5'>
                <h2 className='justify-self-start px-4 font-beba font-bold text-xl text-orange'>{toolsInfo.TITLE}</h2>
                <h3 className='text-center font-monserrat font-semibold text-blue mb-4'>{toolsInfo.SUBTITLE}</h3>  
            </div>
            <article className='w-full grid grid-cols-3 gap-2  md:gap-3 lg:grid-cols-6 lg:gap-4 md:w-4/5  '>
                {
                   technologies.map(item=>{
                        return <CardTools key={item.name} tool={item}/>
                    })
                }
            </article>
        </section>
    )
}
export default Tools;