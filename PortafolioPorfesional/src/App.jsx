import {  useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Tools from './Components/Tools'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  const [dark, setDark] = useState(false);
  useEffect(()=>{
      dark?
      document.documentElement.classList.add('dark'):
      document.documentElement.classList.remove('dark');
  },[dark,setDark])

  return (
    <>
      <Navbar dark={dark} setDark={setDark}/>
      <div className={`flex flex-col space-y-12 dark:bg-black`}>
        <Home/>
        <Tools/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
