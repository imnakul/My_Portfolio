import { useParams, useNavigate } from 'react-router-dom'
import NeonGradientDivider from '../design/designComponents/NeonGradientDivider'

const Project = ({ projects }) => {
   const { id } = useParams() // Extract project ID from URL
   const navigate = useNavigate()

   const project = projects.find((p) => p.id === parseInt(id)) // Find project by ID

   if (!project) return <div>Project not found!</div> // Handle invalid project ID

   const nextProject = () => {
      const currentIndex = projects.findIndex((p) => p.id === parseInt(id))
      const nextIndex = (currentIndex + 1) % projects.length // Loop to the first project if on the last
      navigate(`/project/${projects[nextIndex].id}`)
   }

   return (
      <div className='bg-gradient-to-b from-[#0A1630] via-[#0F1E40] to-[#122C50] min-h-full'>
         {/* Navbar for Project */}
         <nav className='fixed w-full backdrop-blur-md text-white shadow-lg h-24 border-b border-emerald-400 z-50 justify-center items-center'>
            <div className='flex ml-7 mt-5'>
               <button
                  className='text-green-500 font-normal text-md xl:font-medium xl:text-md my-2 py-1 px-3 mr-5 size-lg rounded-md transition btn border-t-cyan-500 hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] ring-2 ring-teal-300 focus:outline-none focus:ring-1 focus:ring-blue-300'
                  onClick={() => navigate('/#projects')}
               >
                  Home
               </button>
               <div className='w-full bg-transparent backdrop-blur-md flex flex-col items-center'>
                  <h1 className='text-5xl font-bold text-white text-outline-black'>
                     {project.name}
                  </h1>
               </div>
               <a href={project.link}>
                  <img
                     src='/assets/share2.png'
                     alt=''
                     className='w-10 h-10 mr-7 mt-2'
                  />
               </a>
            </div>
         </nav>

         {/* Project Content */}

         <div className='pt-20 mx-5 bg-transparent min-h-screen min-w-screen'>
            {/* Project Title  */}
            {/* <div className='w-full bg-transparent backdrop-blur-md flex flex-col items-center'>
               <h1 className='text-4xl font-bold mb-5 text-white'>
                  {project.name}
               </h1>
               <NeonGradientDivider />
            </div> */}

            {/* for main content , all 3 divs in row */}
            <div className='relative w-full bg-transparent flex justify-between mt-20 z-20'>
               {/* Left Button (Previous) */}

               <div className=' bg-trasnparent w-24 h-auto'>
                  {/* {projects.findIndex((p) => p.id === parseInt(id)) > 0 && (
                     <div className='fixed left-5 top-1/2 transform -translate-y-1/2 bg-pink-600'>
                        <button
                           onClick={() => {
                              const currentIndex = projects.findIndex(
                                 (p) => p.id === parseInt(id)
                              )
                              const prevIndex =
                                 (currentIndex - 1 + projects.length) %
                                 projects.length
                              navigate(`/project/${projects[prevIndex].id}`)
                           }}
                           className=' text-white bg-cyan-900 rounded-none p-3 size-lg hover:bg-gray-700 shadow-lg'
                        >
                           ←
                        </button>
                     </div>
                  )} */}
                  <div className='fixed left-5 top-1/2 transform -translate-y-50 bg-transparent'>
                     <button
                        onClick={() => {
                           const currentIndex = projects.findIndex(
                              (p) => p.id === parseInt(id)
                           )
                           const prevIndex =
                              (currentIndex - 1 + projects.length) %
                              projects.length // Calculate previous index cyclically
                           navigate(`/project/${projects[prevIndex].id}`) // Navigate to the previous project
                        }}
                        className='text-white bg-transparent rounded-none p-3 size-lg hover:bg-gray-700 shadow-lg'
                     >
                        {/* ← */}
                        <img
                           src='/assets/left-arrow.png'
                           alt=''
                           className='h-10 w-10'
                        />
                     </button>
                  </div>
               </div>

               {/* Description  */}
               <div className='fixed w-96 h-auto ml-24'>
                  <p className='mb-6 text-white'>{project.description}</p>
                  <ul className='list-disc list-inside text-cyan-400 space-y-2'>
                     <h1>Features:</h1>
                     {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                     ))}
                  </ul>
               </div>

               {/* Images */}
               <div className='xl:flex-1 flex-shrink-0 ml-[26rem] bg-transparent w-24 h-auto mb-10'>
                  <div className='flex flex-col gap-10 items-center p-2'>
                     {/* <div className='flex-1 ml-[26rem] mr-24 flex flex-col gap-10 items-center'> */}
                     {project.media.map((media, index) => (
                        <div
                           key={index}
                           className='snap-start flex-none w-full h-full bg-gray-700 rounded-lg overflow-hidden shadow-[0_0_10px_5px_rgba(0,255,255,0.5)]'
                        >
                           {media.type === 'image' ? (
                              <img
                                 src={media.url}
                                 alt={`Media ${index}`}
                                 className='object-cover w-full h-full'
                              />
                           ) : (
                              <video
                                 controls
                                 autoPlay
                                 muted
                                 loop
                                 src={media.url}
                                 className='object-cover w-full h-full'
                              />
                           )}
                        </div>
                     ))}
                  </div>
               </div>

               {/* Next Button  */}
               <div className='bg-trasnparent w-24 h-auto'>
                  <button
                     onClick={nextProject}
                     className='fixed top-1/2 -translate-y-50 right-5 text-white bg-transparent rounded-none p-3 size-lg hover:bg-gray-700 shadow-lg'
                  >
                     {/* → */}
                     <img
                        src='/assets/right-arrow.png'
                        alt=''
                        className='h-10 w-10'
                     />
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

// import { useParams, useNavigate } from 'react-router-dom'
// import NeonGradientDivider from '../design/designComponents/NeonGradientDivider'

// const Project = ({ projects }) => {
//    const { id } = useParams() // Extract project ID from URL
//    const navigate = useNavigate()

//    const project = projects.find((p) => p.id === parseInt(id)) // Find project by ID

//    if (!project) return <div>Project not found!</div> // Handle invalid project ID

//    const nextProject = () => {
//       const currentIndex = projects.findIndex((p) => p.id === parseInt(id))
//       const nextIndex = (currentIndex + 1) % projects.length // Loop to the first project if on the last
//       navigate(`/project/${projects[nextIndex].id}`)
//    }

//    return (

//    )

// }
export default Project
