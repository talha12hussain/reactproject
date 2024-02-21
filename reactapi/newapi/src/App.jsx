import React from 'react'
import Navbar from './component/Navbar'
import About from './component/About'
import INtro from './component/INtro'
import Skills from './component/Skills'




const App = () => {
  return (
    <div className=' bg-gray-900'>
      
    <Navbar/>
    <About/>
    <INtro/>
    <Skills/>
     
    </div>
  )
}

export default App

