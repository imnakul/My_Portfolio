import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Quotes from './Quotes'
import Navbar from './Navbar'
import CustomCursor from '../design/designComponents/CustomCursor'
import { useEffect, useState } from 'react'
import { projects } from '../data/ProjectsData'

function Home() {
   const [backgroundClass, setBackgroundClass] = useState(
      "bg-[url('/assets/bg3.jpg')] min-h-screen"
   )

   // const themes = [
   //    {
   //       label: 'Black-Blue - in deployment right now',
   //       class: 'bg-gradient-to-b from-[#0A1630] via-[#0F1E40] to-[#122C50] min-h-screen',
   //    },
   //    {
   //       label: 'Black-Grey-Blue',
   //       class: 'bg-gradient-to-b from-[#3c3f48] via-[#000818] to-[#052a5d] min-h-screen',
   //    },
   //    {
   //       label: 'Black-Turquoise',
   //       class: 'bg-[linear-gradient(198deg,_rgb(0,_0,_0)_11.2%,_rgb(11,_132,_145)_91.1%)] min-h-screen',
   //    },
   //    {
   //       label: 'Custom bg with image in bg',
   //       class: "bg-[url('/assets/bg2.jpg')] min-h-screen bg-cover bg-center",
   //    },
   //    {
   //       label: 'Custom bg with image in bg',
   //       class: "bg-[url('/assets/bg3.jpg')] min-h-screen",
   //    },
   //    {
   //       label: 'Custom bg with image in bg',
   //       class: "bg-[url('/assets/bg.jpg')] min-h-screen bg-cover bg-center",
   //    },
   // ]
   // {themes.map((theme, index) => (setBackgroundClass(theme.class)))}

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
         <div className={`${backgroundClass}`}>
            <CustomCursor />
            <div className='flex flex-col'>
               <Navbar />

               {/* Sections */}
               <div id='about' className='md:pt-6'>
                  <About />
               </div>

               <Quotes />

               <div id='projects' className='pt-11 flex flex-col'>
                  <h1 className='text-4xl font-audiowide text-white md:text-5xl font-bold m-9 md:m-12 hover:text-cyan-400 self-center '>
                     PROJECTS
                  </h1>
                  <div className='flex flex-row justify-evenly flex-wrap gap-y-10'>
                     {projects.map((project) => (
                        <Projects
                           key={project.id}
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
