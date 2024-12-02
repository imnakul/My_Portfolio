import { useState } from 'react'

// Single color hover - working fine

const Projects = ({ imageSrc, title, description, link }) => {
   return (
      <>
         {/* Card for showing projects*/}
         <div className='max-w-xl h-[420px] mx-auto mb-20 bg-trasparent rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.6)] border border-green-400'>
            {/* hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] */}
            {/* hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.6)] */}
            <img
               src={imageSrc}
               alt={title}
               className='w-full h-[275px] object-cover border-b border-green-400'
            />
            <div className='p-4 flex flex-col justify-between'>
               <h2 className='text-xl font-semibold text-white'>{title}</h2>
               <p className='text-pink-400 mt-2'>{description}</p>
               <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block my-3 text-orange-300 bg-transparent font-medium px-2 py-3 rounded-md transform transition-all duration-300 hover:bg-[linear-gradient(to_right,_#8bc6ec,_#b4e1d1,_#a0d2a1,_#c1d9e6)] hover:text-xl border border-green-400 hover:text-black'
               >
                  <div className='flex justify-center gap-x-2 items-center'>
                     Visit Live
                     {/* <div className='w-18 h-18 overflow-hidden'>
                        <img
                           src='../../assets/click.gif' // Replace with your GIF URL
                           alt='Click Here GIF'
                           className='w-24 h-24 object-cover' // Adjust size to fit the button
                        />
                     </div> */}
                  </div>
               </a>
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
