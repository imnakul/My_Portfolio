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
            <div id='about' className='pt-16'>
               <About />
            </div>
            <h1 className=' text-white text-6xl font-bold mt-9 ml-12 font-sans hover:text-cyan-400 hover:underline'>
               Projects:
            </h1>
            <div id='projects' className='pt-16 flex flex-row justify-evenly '>
               <Projects
                  imageSrc='/assets/1.jpg'
                  title='HouseMarketPlace'
                  description=' Its a responsive web application based on react, here a user can create a account then upload his properties for rent or sale.'
                  link='https://house-marketplace-app-kohl.vercel.app/'
               />
               <Projects
                  imageSrc='/assets/2.jpg'
                  title='Github Finder'
                  description='Its a react based Responsive Web application ( for Mobile + Desktop ) which uses local storage to save your tasks ( for persistence ).'
                  link='https://github-finder-app-mocha-seven.vercel.app/'
               />
               <Projects
                  imageSrc='/assets/3.jpg'
                  title='To-Do App'
                  description=' Its a React based project, in which we can search any Github profiles and see all their details with repositories.'
                  link='https://to-do-app-localstorage.vercel.app/'
               />
            </div>
            <div id='contact' className='pt-20'>
               <Contact />
            </div>
         </div>
      </>
   )
}

export default App
