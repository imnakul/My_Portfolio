// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CustomCursor from './design/designComponents/CustomCursor'
import GradientBackground from './design/designComponents/GradientComponent'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'

function App() {
   return (
      <>
         <CustomCursor />
         <GradientBackground />
         <div className='flex flex-col'>
            <Navbar />

            {/* Sections */}
            <div id='about' className='pt-20'>
               <About />
            </div>
            <div id='projects' className='pt-20'>
               <Projects />
            </div>
            <div id='contact' className='pt-20'>
               <Contact />
            </div>
         </div>
      </>
   )
}

export default App
