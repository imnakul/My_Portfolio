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

            <div id='projects' className='pt-11 flex flex-col'>
               <h1 className='text-4xl text-white xl:text-5xl font-bold m-9 xl:m-12 font-sans hover:text-cyan-400 self-center '>
                  Projects
               </h1>
               <div className='flex flex-row justify-evenly flex-wrap gap-y-10'>
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
                  <Projects
                     imageSrc='/assets/bgImage.jpg'
                     title='Sample Project1'
                     description=' Its a React based project, in which we can search any Github profiles and see all their details with repositories.'
                     link='https://to-do-app-localstorage.vercel.app/'
                  />
                  <Projects
                     imageSrc='/assets/bgImage2.jpg'
                     title='Sample Project2'
                     description=' Its a React based project, in which we can search any Github profiles and see all their details with repositories.'
                     link='https://to-do-app-localstorage.vercel.app/'
                  />
                  <Projects
                     imageSrc='/assets/3.jpg'
                     title='SampleProject3'
                     description=' Its a React based project, in which we can search any Github profiles and see all their details with repositories.'
                     link='https://to-do-app-localstorage.vercel.app/'
                  />
               </div>
            </div>

            <div id='contact' className='pt-[100px]'>
               <Contact />
            </div>
         </div>
      </>
   )
}

export default App
