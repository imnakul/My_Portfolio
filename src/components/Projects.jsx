import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useNavigate } from 'react-router-dom'

const Projects = ({ images, title, description, link, id }) => {
   const navigate = useNavigate()

   // Slider settings for smooth swiping and dots
   const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => (
         <div
            style={{
               bottom: '-15px',
               paddingBottom: '20px',
            }}
         >
            <ul>{dots}</ul>
         </div>
      ),
   }
   return (
      <>
         {/* Card for showing projects*/}
         <div className='flex flex-col max-w-xs xl:max-w-96 h-auto mx-7 bg-slate-800 rounded-md overflow-hidden transition-transform duration-300 xl:hover:scale-110 xl:hover:shadow-[0_0_20px_10px_rgba(0,255,255,0.5)] xl:border border-cyan-400 z-20 shadow-[0_0_10px_8px_rgba(0,255,255,0.5)] xl:shadow-none'>
            {images.length > 1 ? (
               <Slider {...sliderSettings}>
                  {images.map((imageSrc, index) => (
                     <div key={index}>
                        <img
                           src={imageSrc}
                           alt={`${title} Slide ${index + 1}`}
                           className='w-auto xl:w-full h-auto xl:h-[275px] object-cover border-b border-cyan-400 bg-opacity-50 text-white opacity-100 hover:opacity-70 transition-opacity duration-300'
                        />
                     </div>
                  ))}
               </Slider>
            ) : images.length === 1 ? (
               // Single Image Case
               <div>
                  <img
                     src={images[0]}
                     alt={`${title} Slide 1`}
                     className='w-auto xl:w-full h-auto xl:h-[275px] object-cover border-b border-cyan-400'
                  />
               </div>
            ) : (
               // No Images Case
               <div className='w-auto xl:w-full h-auto xl:h-[275px] flex items-center justify-center bg-gray-800 text-gray-500 border-b border-cyan-400'>
                  No Images Available
               </div>
            )}

            {/* ContentBelowImage in ProjectCard */}
            <div className='p-2 flex flex-col justify-between'>
               <h2 className='xl:text-xl text-md font-medium font-aclonica self-center text-cyan-400 mt-1'>
                  {title}
               </h2>
               <p className='text-white font-albert-sans text-center text-sm xl:text-md mt-2 mx-2'>
                  {description}
               </p>

               {/* Visit Info & Link Button */}
               <div className='flex justify-between font-playwrite-hr font-normal xl:font-semibold'>
                  <a
                     href='#'
                     onClick={(e) => {
                        e.preventDefault()
                        navigate(`/project/${id}`)
                     }}
                     rel='noopener noreferrer'
                     className='inline-flex items-center justify-start pl-1 xl:pl-2 mt-2 mb-2 mr-2'
                  >
                     <img
                        src='/assets/information.png'
                        alt=''
                        className='w-10 h-10 hover:animate-spin hover:rounded-full hover:shadow-[0_0_10px_5px_rgba(0,255,255,0.5)]'
                     />
                  </a>

                  <a
                     href={link}
                     target='_blank'
                     rel='noopener noreferrer'
                     className='inline-flex items-center justify-start pl-1 xl:pl-2 mt-4 mb-2 mr-2'
                  >
                     <img
                        src='/assets/linkforproject.png'
                        alt=''
                        className='w-10 h-10 hover:animate-spin hover:rounded-full hover:shadow-[0_0_10px_5px_rgba(0,255,255,0.5)]'
                     />
                  </a>
               </div>
            </div>
         </div>
      </>
   )
}

export default Projects
