import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
//import { faTwitter} from '@fortawesome/free-brands-svg-icons'
//import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
/*
<a href=""><FontAwesomeIcon className='w-8 h-8 hover:text-pink dark:text-white dark:hover:text-pink' icon={faTwitter} /></a>
                    <a href=""><FontAwesomeIcon className='w-8 h-8 hover:text-pink dark:text-white dark:hover:text-pink' icon={faLinkedin} /></a>*/

import { homeInfo } from '../../Constants'
function Home() {
    return(
        <main id='AboutMe' className='w-full max-h-auto min-h-screen flex flex-col justify-center items-center md:flex-row bg-white dark:bg-black'>
            <section className='mt-28'>
                <img className='w-72 h-80 rounded-md shadow-lg' src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="My photo" />
                <div className='w-72 flex justify-center gap-4 mt-4'>
                    <a href="https://github.com/Leslie-L"><FontAwesomeIcon className='w-8 h-8 hover:text-pink dark:text-white dark:hover:text-pink' icon={faGithub} /></a>
                    <a href="#contact"><FontAwesomeIcon className='w-8 h-8 hover:text-pink dark:text-white  dark:hover:text-pink' icon={faEnvelope} /></a>
                </div>
            </section>
            <section className='font-size font-monserrat md:mt-28 md:ml-12 md:flex md:justify-center md:items-center'>
                <div>
                    <h2 className='text-xl font-regular dark:text-white'>{homeInfo.GREETING}</h2>
                    <h1 className='font-semibold text-orange text-xl'>{homeInfo.NAME}</h1>
                    <p  className='w-72 text-md font-light md:w-80 md:mt-4 dark:text-white'>{homeInfo.INTRODUCE}</p>
                </div>
            </section>
        </main>
    )
}
export default Home;