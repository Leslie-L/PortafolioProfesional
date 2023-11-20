import goodbooks from './ProjectCard/Images/GoodBooks.JPG'
import twitter from './ProjectCard/Images/Twitter.JPG'
import Images from './ProjectCard/Images';
import Flags from './ProjectCard/Images/flags.jpg';
import TICTACTOE from './ProjectCard/Images/tictactoe.jpg';
import Fakeshop from './ProjectCard/Images/fakeshop.jpg';
import Pokedex from './ProjectCard/Images/pokedex.jpg';
export const projects = [
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
        'github':'https://github.com/Leslie-L/TicTacToe',
        'technoligies':['Html','React','Taildwind','Vite.js','Redux'],
        'link':'https://github.com/Leslie-L/Pokedex'
    },
    {
        'title':'FakeShop',
        'img':<Images img={Fakeshop} title={'Fakeshop'}/>,
        'description':'Application that simulates a virtual store',
        'github':'https://classy-llama-096c90.netlify.app/',
        'technoligies':['Html','React','Taildwind','Vite.js'],
        'link':'https://github.com/Leslie-L/E-commerceV1/tree/main/E-CommerceV1'
    },
    {
        'title':'Where\'s in the Wold?',
        'img':<Images img={Flags} title={'Flags in the world'}/>,
        'description':'Application where you can see all the countries in the world and their details.',
        'github':'https://amazing-cobbler-b17f99.netlify.app/',
        'technoligies':['Html','CSS','JavaScript'],
        'link':'https://github.com/Leslie-L/E-commerceV1/tree/main/E-CommerceV1'
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