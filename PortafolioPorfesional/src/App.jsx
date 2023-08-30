import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Tools from './Components/Tools'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Tools/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
