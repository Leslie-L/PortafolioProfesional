import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Tools from './Components/Tools'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Tools/>
    </>
  )
}

export default App
