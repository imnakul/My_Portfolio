import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Quotes from './Quotes'
import Navbar from './Navbar'
import CustomCursor from '../design/designComponents/CustomCursor'
import { useEffect } from 'react'

function Home() {
   useEffect(() => {
      // Scroll to the section if there's a hash in the URL
      const hash = window.location.hash
      if (hash) {
         const section = document.querySelector(hash)
         if (section) {
            section.scrollIntoView({ behavior: 'auto' })

            // Remove the hash from the URL after scrolling
            window.history.replaceState(
               {},
               document.title,
               window.location.pathname
            )
         }
      }
   }, [])
   return (
      <>
         <div className='bg-gradient-to-b from-[#0A1630] via-[#0F1E40] to-[#122C50] min-h-screen'>
            <CustomCursor />

            <div className='flex flex-col'>
               <Navbar />

               {/* Sections */}
               <div id='about' className='xl:pt-6'>
                  <About />
               </div>

               <Quotes />

               <div id='projects' className='pt-11 flex flex-col'>
                  <h1 className='text-4xl text-white xl:text-5xl font-bold m-9 xl:m-12 font-sans hover:text-cyan-400 self-center '>
                     PROJECTS
                  </h1>
                  <div className='flex flex-row justify-evenly flex-wrap gap-y-10'>
                     <Projects
                        // imageSrc='/assets/1.jpg'
                        images={[
                           '/assets/hmp/1.jpg',
                           '/assets/hmp/2.jpg',
                           '/assets/hmp/3.jpg',
                        ]}
                        title='HouseMarketPlace'
                        description=' Its a responsive web application based on react, here a user can create a account then upload his properties for rent or sale.'
                        link='https://house-marketplace-app-kohl.vercel.app/'
                     />
                     <Projects
                        images={['/assets/ghf/1.jpg', '/assets/ghf/2.png']}
                        title='Github Finder'
                        description='Its a react based Responsive Web application ( for Mobile + Desktop ) which uses local storage to save your tasks ( for persistence ).'
                        link='https://github-finder-app-mocha-seven.vercel.app/'
                     />
                     <Projects
                        images={['/assets/tda/1.jpg', '/assets/tda/2.jpg']}
                        title='To-Do App'
                        description=' Its a React based project, in which we can search any Github profiles and see all their details with repositories.'
                        link='https://to-do-app-localstorage.vercel.app/'
                     />
                     <Projects
                        images={['/assets/si.jpg']}
                        title='Sample Project1'
                        description=' Its a React based project, in which we can search any Github profiles and see all their details with repositories.'
                        link='https://to-do-app-localstorage.vercel.app/'
                     />
                     <Projects
                        images={[]}
                        title='Sample Project2'
                        description=' Its a React based project, in which we can search any Github profiles and see all their details with repositories.'
                        link='https://to-do-app-localstorage.vercel.app/'
                     />
                     <Projects
                        images={['/assets/si.jpg']}
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
         </div>
      </>
   )
}
export default Home
