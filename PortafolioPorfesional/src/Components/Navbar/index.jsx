import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import { navTitles } from '../../Constants'
import { useState } from 'react'
function Navbar() {
    
    const [toggle, setToggle]=useState(true);

    return(
    <>
        <nav className="w-full h-12 fixed flex justify-between items-center px-4 bg-pink shadow-md text-lg">
            <span className="font-bebas font-bold text-lg">LOGO</span>
            <div className='flex items-center'>
                <FontAwesomeIcon className='px-5' icon={faMoon} />
                <button className='md:hidden' onClick={()=>{setToggle(!toggle)}}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className={`${toggle && 'hidden'} absolute top-11 md:hidden`}>
                    <ul className='bg-pink w-28 h-15 p-1 rounded-md font-bebas relative  right-8'>
                            <li className='mt-2 border-b-2 border-b-black'><a className='px-2' href="#AboutMe" >{navTitles.ABOUTME}</a></li>
                            <li className='mt-2 border-b-2 border-b-black'><a className='px-2' href="#tools">{navTitles.TOOLS}</a></li>
                            <li className='mt-2 border-b-2 border-b-black'><a className='px-2' href="#projects">{navTitles.PROJECTS}</a></li>
                            <li className='mt-2'><a className='px-2' href="#contact">{navTitles.CONTACT}</a></li>
                    </ul>
                </div>
                <ul className=' hidden md:flex font-bebas'>
                    <li><a className='px-2' href="#AboutMe" >{navTitles.ABOUTME}</a></li>
                    <li><a className='px-2' href="#tools">{navTitles.TOOLS}</a></li>
                    <l><a className='px-2' href="#projects">{navTitles.PROJECTS}</a></l>
                    <li><a className='px-2' href="#contact">{navTitles.CONTACT}</a></li>
                </ul>
            </div>
        </nav>
    </>
    )
}
export default Navbar