import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

//To remove "Scroll Restore Nature" of React
const ScrollToTop = () => {
   const { pathname } = useLocation()

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [pathname]) // Runs every time the route changes

   return null // This component doesn't render anything
}

export default ScrollToTop
