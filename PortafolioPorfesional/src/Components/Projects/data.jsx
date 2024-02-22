import goodbooks from './ProjectCard/Images/GoodBooks.JPG'
import twitter from './ProjectCard/Images/Twitter.JPG'
import Images from './ProjectCard/Images';
import Flags from './ProjectCard/Images/flags.jpg';
import TICTACTOE from './ProjectCard/Images/tictactoe.jpg';
import Fakeshop from './ProjectCard/Images/fakeshop.jpg';
import Pokedex from './ProjectCard/Images/pokedex.jpg';
import FutureWorld from './ProjectCard/Images/FutureWorld.jpg'
export const projects = [
    {
        'title':'Future World',
        'img':<Images img={FutureWorld} title={'Future World'}/>,
        'description':'Fake e-commerce where users can purchase futuristic items.',
        'github':'https://github.com/Leslie-L/next-14',
        'technoligies':['Next.js','React','Typescript','Zustand','CSS','Supabase'],
        'link':'https://next-14-adxc.vercel.app'
    },
    {
        'title':'GoodBooks',
        'img':<Images img={goodbooks} title={'Goodbooks'}/>,
        'description':'App that allows users to view a list of books and save their favorite books.',
        'github':'https://github.com/Leslie-L/pruebas-tecnicas/tree/main/pruebas/01-reading-list/Leslie-L/goodbooks',
        'technoligies':['Html','React','Zustand','Taildwind','Vite.js'],
        'link':'https://adorable-piroshki-cc3799.netlify.app/'
    },
    {
        'title':'TIC TAC TOE',
        'img':<Images img={TICTACTOE} title={'Tic Tac Toe'}/>,
        'description':'Tic tac toe game. You can play versus a player or versus the computer.',
        'github':'https://github.com/Leslie-L/TicTacToe',
        'technoligies':['Html','React','Taildwind','Vite.js'],
        'link':'https://clever-sable-45175b.netlify.app'
    },
    {
        'title':'Pokedex',
        'img':<Images img={Pokedex} title={'Pokedex'}/>,
        'description':'App where you can see all the Pokemons.',
        'github':'https://github.com/Leslie-L/Pokedex',
        'technoligies':['Html','React','Taildwind','Vite.js','Redux'],
        'link':'https://velvety-monstera-4607d4.netlify.app'
    },
    {
        'title':'FakeShop',
        'img':<Images img={Fakeshop} title={'Fakeshop'}/>,
        'description':'Application that simulates a virtual store',
        'github':'https://github.com/Leslie-L/E-commerceV1/tree/main/E-CommerceV1',
        'technoligies':['Html','React','Taildwind','Vite.js'],
        'link':'https://classy-llama-096c90.netlify.app/'
    },
    {
        'title':'Where\'s in the Wold?',
        'img':<Images img={Flags} title={'Flags in the world'}/>,
        'description':'Application where you can see all the countries in the world and their details.',
        'github':'https://github.com/Leslie-L/Projects/tree/main/Advance/rest-countries-api-with-color-theme-switcher-master',
        'technoligies':['Html','CSS','JavaScript'],
        'link':'https://amazing-cobbler-b17f99.netlify.app'
    },
    {
        'title':'Twitter Login Clone',
        'img':<Images img={twitter} title={'Twitter Clon'}/>,
        'description':'This project involves replicating the Twitter login interface, with the primary goal of recreating all the webpage\'s styles using only HTML and CSS.',
        'github':'https://github.com/Leslie-L/TwitterClonLogIn',
        'technoligies':['Html','CSS','JavaScript'],
        'link':'https://leslie-l.github.io/TwitterClonLogIn/'
    }
]