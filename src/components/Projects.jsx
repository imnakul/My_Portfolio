import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useNavigate } from 'react-router-dom'

// Single color hover - working fine

const Projects = ({ images, title, description, link, id }) => {
   const navigate = useNavigate()
   // const projectImageClick = () => {
   //    navigate('/project')
   // }

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

         {/* flex-1 min-w-[300px] max-w-[430px] h-[420px] */}
         {/* max-w-xs xl:max-w-md h-auto mx-auto //working very good - 3 columns in medium font looking conjusted */}
         {/* max-w-xs xl:max-w-9 h-auto mx-auto //working very good - 3 columns in medium font-perfect, wide for picture + plenty space around as well */}
         {/* max-w-xs xl:size-auto h-auto mx-7 //working very good - 4 columns little open, change mx-8 for 3 columns only but then too slim - but no image proper*/}

         <div className='max-w-xs xl:max-w-96 h-auto mx-7 bg-trasparent rounded-md overflow-hidden transition-transform duration-300 xl:hover:scale-105 xl:hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] xl:border border-cyan-400 z-20 shadow-[0_0_10px_8px_rgba(0,255,255,0.5)] xl:shadow-none'>
            {/* green glow+border: */}
            {/* hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.6)] border border-green-400 */}
            {/* Cyan glow+border: */}
            {/* hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] border border-cyan-400  */}

            {/* //Single image option */}
            {/* <img
               src={imageSrc}
               alt={title}
               className='w-auto xl:w-full h-auto xl:h-[275px] object-cover border-b border-cyan-400'
            /> */}

            {images.length > 1 ? (
               <Slider {...sliderSettings}>
                  {images.map((imageSrc, index) => (
                     <div key={index}>
                        <img
                           src={imageSrc}
                           alt={`${title} Slide ${index + 1}`}
                           className='w-auto xl:w-full h-auto xl:h-[275px] object-cover border-b border-cyan-400 bg-opacity-50 text-white opacity-100 hover:opacity-70 transition-opacity duration-300'
                        />
                        {/* <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 z-10'>
                           <p className='text-xl'>Hovered Text</p>
                        </div> */}
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
            <div className='p-4 flex flex-col justify-between'>
               <h2 className='text-xl font-semibold self-center text-white'>
                  {title}
               </h2>
               <p className='text-pink-400 font-albert-sans mt-2'>
                  {description}
               </p>

               {/* Visit Link Button */}
               <div className='flex justify-between font-playwrite-hr font-normal xl:font-semibold'>
                  <a
                     href='#'
                     onClick={(e) => {
                        e.preventDefault()
                        navigate(`/project/${id}`)
                     }}
                     rel='noopener noreferrer'
                     // className='xl:w-32 xl:h-12 w-28 h-10 inline-flex items-center justify-start py-1 pl-1 xl:pl-2 mt-4 mb-2 text-green-50 bg-emerald-400 rounded-md transform transition-all duration-300 xl:animate-bounce animate-bounce border border-cyan-400 hover:text-cyan-300 text-sm xl:text-base'
                     className='inline-flex items-center justify-start pl-1 xl:pl-2 mt-4 mb-2 mr-2'
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
                     // className='xl:w-32 xl:h-12 w-28 h-10 inline-flex items-center justify-start py-1 pl-1 xl:pl-2 mt-4 mb-2 text-green-50 bg-red-500 rounded-md transform transition-all duration-300 xl:animate-bounce animate-bounce border border-cyan-400 hover:text-cyan-300 text-sm xl:text-base'
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

//Diff color hover - but stopped working, working now- i mistakenly removed useState i guess, and i know we can leave empty string in useState so thats not the problem
// + in box shadow in style i change 30px 10px to random 20px 10px but i think that cannot work together so now i changed to 20px 5px now working...
// STILL NOT WORKING , AFTER A REFRESH

// const Projects = ({ imageSrc, title, description, link }) => {
//    // Default green glow
//    // const [hoverColor, setHoverColor] = useState('rgba(0, 255, 0, 0.6)')
//    const [hoverColor, setHoverColor] = useState('')

//    // Predefined colors for hover shadow
//    const colors = [
//       'rgba(0, 255, 0, 0.6)', // Green
//       'rgba(255, 0, 0, 0.6)', // Red
//       'rgba(0, 0, 255, 0.6)', // Blue
//       'rgba(255, 255, 0, 0.6)', // Yellow
//       'rgba(255, 0, 255, 0.6)', // Magenta
//    ]

//    // Function to pick a random color
//    const handleMouseEnter = () => {
//       const randomColor = colors[Math.floor(Math.random() * colors.length)]
//       setHoverColor(randomColor)
//    }

//    const handleMouseLeave = () => {
//       setHoverColor('') // Reset to default color (optional)
//    }

//    return (
//       <div
//          onMouseEnter={handleMouseEnter} // Trigger random color on hover
//          onMouseLeave={handleMouseLeave} // Reset hover color (optional)
//          style={{
//             boxShadow: `0 0 20px 5px ${hoverColor}`, // Apply dynamic shadow color
//          }}
//          className='max-w-xl h-[400px] mx-auto bg-transparent rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-green-400'
//       >
//          <img
//             src={imageSrc}
//             alt={title}
//             className='w-full h-[275px] object-cover border-b border-green-400'
//          />
//          <div className='p-4 flex flex-col justify-between'>
//             <h2 className='text-xl font-semibold text-white'>{title}</h2>
//             <p className='text-pink-400 mt-2'>{description}</p>
//             <a
//                href={link}
//                target='_blank'
//                rel='noopener noreferrer'
//                className='inline-block mt-4 text-orange-300 font-medium hover:underline'
//             >
//                Visit Live
//             </a>
//          </div>
//       </div>
//    )
// }

// export default Projects

// workign sometimes , sometimes not, to make it good, from useState, empty string so that by default, it doesn't glow , then remove color from handle mouse leave, so that after hover it shouldn't show any color, or if problem then disable it and below disable mouse leave event as its optional
// import { useState } from 'react'

// const Projects = ({ imageSrc, title, description, link }) => {
//    const [hoverColor, setHoverColor] = useState('rgba(0, 255, 0, 0.6)') // Default green glow

//    // Predefined colors for hover shadow
//    const colors = [
//       'rgba(0, 255, 0, 0.6)', // Green
//       'rgba(255, 0, 0, 0.6)', // Red
//       'rgba(0, 0, 255, 0.6)', // Blue
//       'rgba(255, 255, 0, 0.6)', // Yellow
//       'rgba(255, 0, 255, 0.6)', // Magenta
//    ]

//    // Function to pick a random color
//    const handleMouseEnter = () => {
//       const randomColor = colors[Math.floor(Math.random() * colors.length)]
//       setHoverColor(randomColor)
//    }

//    const handleMouseLeave = () => {
//       setHoverColor('rgba(0, 255, 0, 0.6)') // Reset to default color (optional)
//    }

//    return (
//       <div
//          onMouseEnter={handleMouseEnter} // Trigger random color on hover
//          onMouseLeave={handleMouseLeave} // Reset hover color (optional)
//          style={{
//             boxShadow: `0 0 30px 10px ${hoverColor}`, // Apply dynamic shadow color
//          }}
//          className='max-w-xl h-[400px] mx-auto bg-transparent rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-green-400'
//       >
//          <img
//             src={imageSrc}
//             alt={title}
//             className='w-full h-[275px] object-cover border-b border-green-400'
//          />
//          <div className='p-4 flex flex-col justify-between'>
//             <h2 className='text-xl font-semibold text-white'>{title}</h2>
//             <p className='text-pink-400 mt-2'>{description}</p>
//             <a
//                href={link}
//                target='_blank'
//                rel='noopener noreferrer'
//                className='inline-block mt-4 text-orange-300 font-medium hover:underline'
//             >
//                Visit Live
//             </a>
//          </div>
//       </div>
//    )
// }

// export default Projects
