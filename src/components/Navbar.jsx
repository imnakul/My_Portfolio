function Navbar() {
   const scrollToSection = (id) => {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
   }
   return (
      <>
         {/* <nav
            className='fixed top-0 left-0 w-full bg-gradient-to-r from-purple-950 via-gray-900
         to-purple-950 animate-gradient-x text-white shadow-lg flex justify-center h-14 border-b border-emerald-400 z-50'
         > */}
         <nav className='fixed top-0 left-0 w-full bg-white/15 backdrop-blur-md text-white shadow-lg flex justify-center h-14 border-b border-emerald-400 z-50 px-2'>
            {/* <div className='flex items-center'></div> */}
            {/* <div className='flex gap-8 xl:gap-24 '>
               <div className='flex items-center'> */}
            <div className='absolute left-4 mt-3 ml-3'>
               <div className='bg-cyan-400 text-black shadow-[0_0_5px_2px_rgba(0,255,255,0.6)] border-2 border-cyan-300 font-audiowide font-bold px-2 py-1 text-sm rounded-sm tracking-wider xl:opacity-100 opacity-0'>
                  NAKUL SRIVASTAVA
               </div>
            </div>

            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-8 xl:gap-24 items-center'>
               <button
                  className='text-white font-normal xl:font-aclonica font-podkova text-lg xl:font-medium xl:text-sm m-2 px-3 py-1 xl:py-2 xl:px-3 mb-2 size-xl rounded-md transition btn btn-ghost hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] hover:ring-2 ring-teal-300 focus:outline-none focus:ring-1 focus:ring-blue-300 text-outline-black'
                  onClick={() => scrollToSection('about')}
               >
                  About
               </button>

               <button
                  className='text-white font-normal xl:font-aclonica font-podkova text-lg xl:font-medium xl:text-sm m-2 px-3 py-1 xl:py-2 xl:px-3 mb-2  rounded-md transition btn btn-ghost size-xl hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] hover:ring-2 ring-teal-300 focus:outline-none focus:ring-1 focus:ring-blue-300 text-outline-black'
                  onClick={() => scrollToSection('projects')}
               >
                  Projects
               </button>

               <button
                  className='text-white font-normal xl:font-aclonica font-podkova text-lg xl:font-medium xl:text-sm m-2 px-3 py-1 xl:py-2 xl:px-3 mb-2  rounded-md transition btn btn-ghost size-xl hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] hover:ring-2 ring-teal-300 focus:outline-none focus:ring-1 focus:ring-blue-300 text-outline-black'
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
