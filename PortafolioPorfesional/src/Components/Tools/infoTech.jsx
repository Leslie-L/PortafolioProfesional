import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5} from '@fortawesome/free-brands-svg-icons'
import { faCss3} from '@fortawesome/free-brands-svg-icons'
import { faJsSquare} from '@fortawesome/free-brands-svg-icons'
import { faReact} from '@fortawesome/free-brands-svg-icons'
import { faBootstrap} from '@fortawesome/free-brands-svg-icons'
import { faPhp} from '@fortawesome/free-brands-svg-icons'
import { faPython} from '@fortawesome/free-brands-svg-icons'
import { faJava} from '@fortawesome/free-brands-svg-icons'
import { faNode} from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faGit} from '@fortawesome/free-brands-svg-icons'
import { faRProject} from '@fortawesome/free-brands-svg-icons'
import taildwind from './ImageCard/images/tailwindsvg.svg'
import zustand from './ImageCard/images/zustand.png'
import next from './ImageCard/images/nextjs.svg'
import postgres from './ImageCard/images/postgresql.svg'
import firebase from './ImageCard/images/firebase.svg'

import ImageCard from './ImageCard'
export const technologies = [
    {
        'name': 'HTML',
        'icon': <FontAwesomeIcon className='w-16 h-16' icon={faHtml5} />
    },
    {
        'name': 'CSS',
        'icon': <FontAwesomeIcon className='w-16 h-16' icon={faCss3} />
    },
    {
        'name': 'JavaScript',
        'icon': <FontAwesomeIcon className='w-16 h-16' icon={faJsSquare} />
    },
    {
        'name': 'React',
        'icon': <FontAwesomeIcon className='w-16 h-16' icon={faReact} />
    },
    {
        'name': 'Zustand',
        'icon': <ImageCard img={zustand} tech={'Zustand'}/>
    },
    {
        'name': 'Next.js',
        'icon': <ImageCard img={next} tech={'Next'}/>
    },
    {
        'name': 'Booststrap',
        'icon': <FontAwesomeIcon className='w-16 h-16' icon={faBootstrap} />
    },
    {
        'name': 'Tailwind',
        'icon': <ImageCard img={taildwind} tech={'Tailwind'}/>
    },
    {
        'name': 'PHP',
        'icon': <FontAwesomeIcon className='w-16 h-16' icon={faPhp} />
    },
    {
        'name': 'Python',
        'icon': <FontAwesomeIcon className='w-16 h-16' icon={faPython} />
    },
    {
        'name': 'Java',
        'icon': <FontAwesomeIcon className='w-16 h-16' icon={faJava} />
    },
    {
        'name': 'Node.js',
        'icon': <FontAwesomeIcon className='w-16 h-16' icon={faNode} />
    },
    {
        'name': 'Git',
        'icon': <FontAwesomeIcon className='w-16 h-16' icon={faGit} />
    },
    {
        'name': 'Github',
        'icon': <FontAwesomeIcon className='w-16 h-16' icon={faGithub} />
    },
    {
        'name': 'R',
        'icon': <FontAwesomeIcon className='w-16 h-16' icon={faRProject} />
    },
    {
        'name': 'Firebase',
        'icon': <ImageCard img={firebase} tech={'Firebase'}/>
    },
    {
        'name': 'Postgres',
        'icon': <ImageCard img={postgres} tech={'Postgres'}/>
    }
]