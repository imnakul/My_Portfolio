// <div className='min-h-screen flex bg-transparent text-white'>
//    {/* justify-center  items-center */}
//    <h1 className='text-4xl font-bold hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)]'>
//       About Me
//    </h1>
// </div>

// import { useState } from 'react'

// function About() {

//    const [isClicked, setIsClicked] = useState(false)

//    const handleCircleClick = () => {
//       setIsClicked(true)
//    }

//    return (
//       <div className='flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-black text-white'>
//          {!isClicked ? (
//             // Circular Shape
//             <div
//                className='w-40 h-40 flex items-center justify-center rounded-full bg-gray-800 text-center text-xl font-bold cursor-pointer hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.6)] transition-all duration-500'
//                onClick={handleCircleClick}
//             >
//                About Me
//             </div>
//          ) : (
//             // Rectangle with a folded style and an image placeholder
//             <div className='relative bg-gray-800 w-[350px] h-[300px] rounded-lg shadow-lg p-6 hover:shadow-[0_0_40px_10px_rgba(0,255,255,0.6)] transition-all duration-700'>
//                {/* Circular Image Placeholder */}
//                <div className='absolute -top-12 left-1/2 transform -translate-x-1/2'>
//                   <div className='w-24 h-24 rounded-full border-4 border-gray-700 overflow-hidden shadow-md'>
//                      <img
//                         src='/assets/your-picture.jpg' // Replace with your image path
//                         alt='Your Picture'
//                         className='object-cover w-full h-full'
//                      />
//                   </div>
//                </div>

//                {/* About Me Text */}
//                <div className='mt-16 text-center'>
//                   <h1 className='text-2xl font-semibold text-cyan-400'>
//                      About Me
//                   </h1>
//                   <p className='mt-4 text-sm text-gray-300 leading-relaxed'>
//                      Hi! I'm Nakul Srivastava, a passionate web developer who
//                      loves creating innovative, user-friendly applications. With
//                      a knack for solving real-world problems, I focus on
//                      bringing creative ideas to life.
//                   </p>
//                </div>

//                {/* Folded Corner Effect */}
//                <div className='absolute bottom-0 right-0 w-12 h-12 bg-gray-700 transform rotate-45 translate-y-6 translate-x-6'></div>
//             </div>
//          )}
//       </div>
//    )
// }

// export default About

// 2nd circular shape wokring fine
// import { useState } from 'react'

// function AboutMe() {
//    const [isExpanded, setIsExpanded] = useState(false)

//    const handleToggleClick = () => {
//       setIsExpanded(!isExpanded)
//    }

//    return (
//       <div className='flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-black text-white'>
//          {!isExpanded ? (
//             // Circular Shape
//             <div
//                className='w-40 h-40 flex items-center justify-center rounded-full bg-gray-800 text-center text-xl font-bold cursor-pointer hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.6)] transition-all duration-500'
//                onClick={handleToggleClick}
//             >
//                About Me
//             </div>
//          ) : (
//             // Expanded Rectangle
//             <div className='relative bg-gray-800 w-[90%] max-w-6xl h-[350px] rounded-lg shadow-lg p-6 hover:shadow-[0_0_40px_10px_rgba(0,255,255,0.6)] transition-all duration-700'>
//                {/* Human-Shaped Image Placeholder */}
//                <div className='absolute -top-16 left-8'>
//                   <div
//                      className='w-32 h-40 overflow-hidden rounded-full border-4 border-gray-700 shadow-md bg-cover bg-center bg-no-repeat'
//                      style={{
//                         clipPath:
//                            'polygon(50% 0%, 90% 10%, 100% 50%, 90% 90%, 50% 100%, 10% 90%, 0% 50%, 10% 10%)',
//                         backgroundImage: `url('/assets/your-picture.jpg')`,
//                      }}
//                   ></div>
//                </div>

//                {/* About Me Content */}
//                <div className='ml-[150px]'>
//                   <h1 className='text-3xl font-semibold text-cyan-400'>
//                      About Me
//                   </h1>
//                   <p className='mt-4 text-base text-gray-300 leading-relaxed'>
//                      Hi! I'm [Your Name], a passionate web developer who loves
//                      creating innovative, user-friendly applications. With a
//                      knack for solving real-world problems, I focus on bringing
//                      creative ideas to life.
//                   </p>
//                </div>

//                {/* Page Fold Effect */}
//                <div className='absolute top-0 right-0 w-20 h-20 bg-gray-900 transform rotate-45 translate-x-6 -translate-y-6 border-t-2 border-r-2 border-cyan-500'></div>

//                {/* Collapse Button */}
//                <button
//                   onClick={handleToggleClick}
//                   className='absolute bottom-4 right-4 px-4 py-2 bg-cyan-500 text-black font-medium rounded-md shadow-md hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.6)] transition-transform duration-300'
//                >
//                   Collapse
//                </button>
//             </div>
//          )}
//       </div>
//    )
// }

// export default AboutMe

// import { useState } from 'react'

// function About() {
//    const [isExpanded, setIsExpanded] = useState(false)

//    const handleToggleClick = () => {
//       setIsExpanded(!isExpanded)
//    }

//    return (
//       <div className='border border-width-2 border-teal-400 mx-2 flex justify-center items-center h-screen bg-transparent text-white'>
//          {!isExpanded ? (
//             // Circular Shape
// <div
//    className='w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-b from-gray-700 to-gray-900 text-center text-xl font-bold cursor-pointer hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.6)] transition-all duration-500'
//    onClick={handleToggleClick}
// >
//    About Me
// </div>
//          ) : (
//             // <div
//             //    class='h-70 w-70 border-t-[25px] border-l-[55px] border-b-[25px]
//             //       border-solid border-t-transparent border-b-transparent border-l-[#555] flex items-center justify-center bg-gradient-to-b from-gray-700 to-gray-900 text-center text-xl font-bold hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.6)] transition-all duration-500'
//             //    onClick={handleToggleClick}
//             // >

//             // Expanded Rectangle
//             <div className='relative bg-gradient-to-b from-[#0A1630] to-[#122C50] w-[90%] max-w-6xl h-[350px] rounded-lg shadow-lg p-8 hover:shadow-[0_0_40px_10px_rgba(0,255,255,0.6)] transition-all duration-700'>
//                <div className='fold-effect'>
//                   {/* Human-Shaped Image Placeholder */}
//                   <div className='absolute -top-16 left-8'>
//                      <div
//                         className='w-32 h-40 overflow-hidden rounded-full border-4 border-gray-700 shadow-md bg-cover bg-center bg-no-repeat'
//                         style={{
//                            clipPath:
//                               'polygon(50% 0%, 90% 10%, 100% 50%, 90% 90%, 50% 100%, 10% 90%, 0% 50%, 10% 10%)',
//                            backgroundImage: `url('/assets/your-picture.jpg')`,
//                         }}
//                      ></div>
//                   </div>

//                   {/* About Me Content */}
//                   <div className='ml-[150px]'>
//                      <h1 className='text-3xl font-semibold text-cyan-400'>
//                         About Me
//                      </h1>
//                      <p className='mt-4 text-base text-gray-300 leading-relaxed'>
//                         Hi! I'm [Your Name], a passionate web developer who
//                         loves creating innovative, user-friendly applications.
//                         With a knack for solving real-world problems, I focus on
//                         bringing creative ideas to life.
//                      </p>
//                   </div>
//                </div>

//                {/* Fold Effect */}
//                <div className='absolute bottom-0 right-0 w-16 h-16 bg-[#122C50] transform rotate-45 translate-x-8 translate-y-8 border-b-2 border-r-2 border-gray-600'></div>

//                {/* Collapse Button */}
//                <button
//                   onClick={handleToggleClick}
//                   className='absolute bottom-4 right-4 px-4 py-2 bg-cyan-500 text-black font-medium rounded-md shadow-md hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.6)] transition-transform duration-300'
//                >
//                   Collapse
//                </button>
//             </div>
//          )}
//       </div>
//    )
// }

// export default About

import React, { useState } from 'react'

const AboutSection = () => {
   const [expanded, setExpanded] = useState(false)

   const toggleExpand = () => {
      setExpanded(!expanded)
   }

   return (
      <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-b from-[#11072e] to-[#055354]'>
         {/* Main Container */}
         {/* */}
         <div
            className={`relative transition-all duration-500 ease-in-out ${
               expanded
                  ? 'max-w-xs xl:max-w-6xl xl:h-[400px] my-auto bg-gradient-to-b from-[#0A1630] to-[#122C50]  xl:hover:scale-110 rounded-md shadow-lg xl:p-8 p-6 border-2 border-cyan-400 xl:hover:shadow-[0_0_20px_10px_rgba(0,255,255,0.6)] xl:hover:border-hidden'
                  : ''
            }`}
            onClick={toggleExpand}
         >
            {expanded ? (
               <>
                  {/* Expanded State */}
                  <div className='flex flex-col xl:flex-row justify-between items-center h-full'>
                     {/* Text Content */}
                     <div className='flex-1 pr-10'>
                        <h2 className='text:5xl xl:text-7xl font-bold text-cyan-300 xl:mb-6 mb-2 font-serif'>
                           Hi, I'm Nakul
                        </h2>
                        <p className='text-white font-mono text-xs xl:text-lg xl:mb-0 mb-2'>
                           A passionate web developer who loves creating
                           innovative, user-friendly applications. With a knack
                           for solving real-world problems, I focus on bringing
                           creative ideas to life.
                        </p>
                     </div>

                     {/* Image Placeholder */}
                     <div className='relative w-36 h-36 xl:w-[250px] xl:h-[250px] bg-gradient-to-b from-[#122C50] to-[#0A1630] rounded-full overflow-hidden xl:overflow-hidden shadow-lg border-4 border-cyan-400'>
                        {/* Image */}
                        <img
                           src='/assets/mypic_cutout.png'
                           alt='profilepicture'
                           className='absolute w-[150%] h-auto -top-[20%] left-1/2 transform xl:-translate-x-32 -translate-x-[76px] transition-transform duration-500 ease-in-out'
                           // hover:scale-110
                           // hover:opacity-70
                        />
                     </div>
                  </div>

                  {/* Fold Effect */}
                  {/* Circular Fold Effect */}
                  <div className='absolute bottom-0 right-0 w-[50px] h-[50px] bg-inherit rounded-full border-[2px] border-t-0 border-l-0 border-white/10'></div>

                  {/* Collapse Button */}
                  {/* <button
                     className='absolute bottom-4 right-4 px-4 py-2 bg-cyan-600 text-black rounded-lg shadow-md hover:shadow-cyan-500/50 focus:outline-none hover:ring-2 hover:ring-cyan-300 transition-all duration-300 transform hover:scale-105'
                     onClick={toggleExpand}
                  >
                     Collapse
                  </button> */}
               </>
            ) : (
               <>
                  {/* Collapsed Circular Shape */}
                  <div className='flex justify-center items-center'>
                     <div className='w-40 h-40 xl:w-60 xl:h-60 flex items-center justify-center rounded-full bg-gradient-to-b from-[#0A1630] to-[#122C50] text-center text-2xl xl:text-3xl font-extrabold xl:font-bold cursor-pointer shadow-[0_0_30px_10px_rgba(0,255,255,0.6)] xl:shadow-none xl:hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.6)] transition-all duration-500 text-cyan-300 border-2 border-cyan-400'>
                        Click!
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
   )
}

export default AboutSection
