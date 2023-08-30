import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Tools from './Components/Tools'
import Projects from './Components/Projects'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Tools/>
      <Projects/>
    </>
  )
}

export default App
