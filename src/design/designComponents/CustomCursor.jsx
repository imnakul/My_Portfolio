import React, { useEffect } from 'react'
import '../designComponentsCss/CustomCursor.css'

//code i was using before smoothining in slow movement

// const CustomCursor = () => {
//    useEffect(() => {
//       const customCursor = document.querySelector('.custom-cursor')

//       // Variables to store mouse and cursor positions
//       let mouseX = 0,
//          mouseY = 0 // Mouse position
//       let cursorX = 0,
//          cursorY = 0 // Cursor (outer circle) position
//       let lastX = 0,
//          lastY = 0 // Previous mouse position
//       let dotOffsetX = 0,
//          dotOffsetY = 0 // Inner dot offsets

//       const followCursor = () => {
//          // Interpolate the outer circle position
//          cursorX += mouseX - cursorX
//          cursorY += mouseY - cursorY

//          // Calculate velocity (speed and direction of movement)
//          const velocityX = mouseX - lastX
//          const velocityY = mouseY - lastY
//          const velocity = 0.5 * Math.sqrt(velocityX ** 2 + velocityY ** 2) // Combined velocity

//          // Adjust inner dot's position based on velocity
//          const maxOffset = Math.min(15, velocity) // Limit the dot movement
//          const angle = Math.atan2(velocityY, velocityX) // Direction of movement
//          dotOffsetX = -maxOffset * Math.cos(angle) // Opposite direction (X)
//          dotOffsetY = -maxOffset * Math.sin(angle) // Opposite direction (Y)

//          // Update custom cursor position
//          customCursor.style.transform = `translate(${cursorX - 11}px, ${
//             cursorY - 11
//          }px)`

//          // Update inner dot offsets
//          customCursor.style.setProperty('--dot-offset-x', `${dotOffsetX}px`)
//          customCursor.style.setProperty('--dot-offset-y', `${dotOffsetY}px`)

//          // Save the current mouse position
//          lastX = mouseX
//          lastY = mouseY

//          // Loop the animation
//          requestAnimationFrame(followCursor)
//       }

//       // Listen for mouse movement
//       const handleMouseMove = (e) => {
//          mouseX = e.clientX
//          mouseY = e.clientY
//       }

//       document.addEventListener('mousemove', handleMouseMove)

//       // Start animation loop
//       followCursor()

//       return () => {
//          // Cleanup event listener on component unmount
//          document.removeEventListener('mousemove', handleMouseMove)
//       }
//    }, [])

//    return <div className='custom-cursor'></div>
// }

// export default CustomCursor

const CustomCursor = () => {
   useEffect(() => {
      const customCursor = document.querySelector('.custom-cursor')

      // Variables to store mouse and cursor positions
      let mouseX = 0,
         mouseY = 0 // Mouse position
      let cursorX = 0,
         cursorY = 0 // Cursor (outer circle) position
      let lastX = 0,
         lastY = 0 // Previous mouse position
      let dotOffsetX = 0,
         dotOffsetY = 0 // Inner dot offsets

      const followCursor = () => {
         // Interpolate the outer circle position
         cursorX += (mouseX - cursorX) * 0.2 // Smooth transition
         cursorY += (mouseY - cursorY) * 0.2

         // Calculate velocity (speed and direction of movement)
         const velocityX = mouseX - lastX
         const velocityY = mouseY - lastY
         const velocity = Math.sqrt(velocityX ** 2 + velocityY ** 2) // Combined velocity

         // Adjust inner dot's position based on velocity
         const maxOffset = Math.min(20, velocity * 0.9) // Dynamic scaling factor changed to 0.9 from 0.4
         const angle = Math.atan2(velocityY, velocityX) // Direction of movement
         dotOffsetX = -maxOffset * Math.cos(angle) // Opposite direction (X)
         dotOffsetY = -maxOffset * Math.sin(angle) // Opposite direction (Y)

         // Smooth out the lag for consistent slow movements
         dotOffsetX *= Math.max(0.8, 1 - velocity * 0.02) // More consistent tracking at low speeds
         dotOffsetY *= Math.max(0.8, 1 - velocity * 0.02)

         // Update custom cursor position
         customCursor.style.transform = `translate(${cursorX - 11}px, ${
            cursorY - 11
         }px)`

         // Update inner dot offsets
         customCursor.style.setProperty('--dot-offset-x', `${dotOffsetX}px`)
         customCursor.style.setProperty('--dot-offset-y', `${dotOffsetY}px`)

         // Save the current mouse position
         lastX = mouseX
         lastY = mouseY

         // Loop the animation
         requestAnimationFrame(followCursor)
      }

      // Listen for mouse movement
      const handleMouseMove = (e) => {
         mouseX = e.clientX
         mouseY = e.clientY
      }

      document.addEventListener('mousemove', handleMouseMove)

      // Start animation loop
      followCursor()

      return () => {
         // Cleanup event listener on component unmount
         document.removeEventListener('mousemove', handleMouseMove)
      }
   }, [])

   return <div className='custom-cursor'></div>
}

export default CustomCursor
