import { useNavigate } from 'react-router-dom'

function Project() {
   const navigate = useNavigate()
   return (
      <>
         <div className='bg-gradient-to-b from-[#0A1630] via-[#0F1E40] to-[#122C50] min-h-full'>
            {/* Navbar for Project */}
            <nav
               className='fixed top-0 left-0 w-full bg-gradient-to-r from-purple-950 via-gray-900
         to-purple-950 animate-gradient-x animate-gradient-x text-white shadow-lg h-14 border-b border-emerald-400'
            >
               <div className='flex justify-self-start ml-12'>
                  <button
                     className='text-white font-normal text-md xl:font-medium xl:text-md my-2 py-2 px-4 size-xl rounded-md transition btn btn-ghost hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] hover:ring-2 ring-teal-300 focus:outline-none focus:ring-1 focus:ring-blue-300'
                     onClick={() => navigate('/')}
                  >
                     Return to Home
                  </button>
               </div>
            </nav>

            {/* Project Content */}
            <section>
               <div className='pt-20 mx-5 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8'>
                     <div className='md:col-span-1'>
                        <div className='max-w-lg md:max-w-none'>
                           <h2 className='text-2xl font-semibold text-blue-400 sm:text-3xl'>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                           </h2>

                           <p className='mt-4 text-white'>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Tenetur doloremque saepe architecto maiores
                              repudiandae amet perferendis repellendus,
                              reprehenderit voluptas sequi.
                           </p>
                        </div>
                     </div>

                     <div className='md:col-span-3'>
                        <img
                           src='https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                           className='rounded border-2 border-green-500'
                           alt=''
                        />
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </>
   )
}
export default Project
