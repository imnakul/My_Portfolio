import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Quotes from './Quotes'
import Navbar from './Navbar'
import CustomCursor from '../design/designComponents/CustomCursor'
import { useEffect } from 'react'
import { projects } from '../data/ProjectsData'

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
               <div id='about' className='md:pt-6'>
                  <About />
               </div>

               <Quotes />

               <div id='projects' className='pt-11 flex flex-col'>
                  <h1 className='text-4xl text-white md:text-5xl font-bold m-9 md:m-12 font-sans hover:text-cyan-400 self-center '>
                     PROJECTS
                  </h1>
                  <div className='flex flex-row justify-evenly flex-wrap gap-y-10'>
                     {projects.map((project) => (
                        <Projects
                           images={project.media
                              .filter((item) => item.type === 'image')
                              .map((item) => item.url)}
                           title={project.name}
                           description={project.description}
                           link={project.link}
                           id={project.id}
                        />
                     ))}
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
