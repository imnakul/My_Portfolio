function Navbar() {
   const scrollToSection = (id) => {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
   }
   return (
      <>
         <nav
            className='fixed top-0 left-0 w-full bg-gradient-to-r from-purple-950 via-gray-900
         to-purple-950 animate-gradient-x text-white shadow-lg flex justify-center h-[52px] border-b border-emerald-400 z-50'
         >
            <div className='flex gap-24'>
               <button
                  className='text-white font-medium text-xl m-2 px-5 py-2 rounded-md transition btn btn-ghost size-xl hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] hover:ring-2 ring-teal-300 focus:outline-none focus:ring-2 focus:ring-blue-300'
                  onClick={() => scrollToSection('about')}
               >
                  About
               </button>

               <button
                  className='text-white font-medium text-xl m-2 px-4 py-2 rounded-md transition btn btn-ghost size-xl hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] hover:ring-2 ring-teal-300 focus:outline-none focus:ring-2 focus:ring-blue-300'
                  onClick={() => scrollToSection('projects')}
               >
                  Projects
               </button>

               <button
                  className='text-white font-medium text-xl m-2 px-4 py-2 rounded-md transition btn btn-ghost size-xl hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] hover:ring-2 ring-teal-300 focus:outline-none focus:ring-2 focus:ring-blue-300'
                  onClick={() => scrollToSection('contact')}
               >
                  Contact
               </button>
            </div>
         </nav>
      </>
   )
}
export default Navbar
