function Navbar() {
   const scrollToSection = (id) => {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
   }
   return (
      <>
         <nav className='fixed top-0 left-0 w-full bg-transparent text-white shadow-lg flex justify-center h-20 '>
            <div className='flex gap-24'>
               <button
                  className='text-white font-medium text-xl m-2 px-5 py-2 rounded-md transition btn btn-ghost size-xl hover:ring-2 ring-teal-300 focus:outline-none focus:ring-2 focus:ring-blue-300'
                  onClick={() => scrollToSection('about')}
               >
                  About
               </button>

               <button
                  className='text-white font-medium text-xl m-2 px-4 py-2 rounded-md transition btn btn-outline hover:ring-2 ring-teal-300 focus:outline-none focus:ring-2 focus:ring-blue-300'
                  onClick={() => scrollToSection('projects')}
               >
                  Projects
               </button>

               <button
                  className='text-white font-medium text-xl m-2 px-4 py-2 rounded-md transition btn btn-ghost size-xl hover:ring-2 ring-teal-300 focus:outline-none focus:ring-2 focus:ring-blue-300'
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
