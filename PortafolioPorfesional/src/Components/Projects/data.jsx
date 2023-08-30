import goodbooks from './ProjectCard/Images/GoodBooks.JPG'
import twitter from './ProjectCard/Images/Twitter.JPG'
import Images from './ProjectCard/Images';
export const projects = [
    {
        'title':'GoodBooks',
        'img':<Images img={goodbooks} title={'Goodbooks'}/>,
        'description':'Web application that allows users to view a list of books and save their favorite books. Its purpose is to implement user interaction, state and code management, as well as the ability to filter data and effectively organize the project\'s structure.',
        'github':'https://github.com/Leslie-L/pruebas-tecnicas/tree/main/pruebas/01-reading-list/Leslie-L/goodbooks',
        'technoligies':['Html','React','Zustand','Taildwind','Vite.js'],
        'link':'https://adorable-piroshki-cc3799.netlify.app/'
    },
    {
        'title':'Twitter Login Clon',
        'img':<Images img={twitter} title={'Twitter Clon'}/>,
        'description':'This project involves replicating the Twitter login interface, with the primary goal of recreating all the webpage\'s styles using only HTML and CSS.',
        'github':'https://github.com/Leslie-L/TwitterClonLogIn',
        'technoligies':['Html','CSS','JavaScript'],
        'link':'https://leslie-l.github.io/TwitterClonLogIn/'
    }
]