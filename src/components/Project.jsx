import { useParams, useNavigate } from 'react-router-dom'

const Project = ({ projects }) => {
   const { id } = useParams()
   const navigate = useNavigate()

   const project = projects.find((p) => p.id === parseInt(id))
   if (!project) return <div>Project not found!</div>

   const nextProject = () => {
      const currentIndex = projects.findIndex((p) => p.id === parseInt(id))
      const nextIndex = (currentIndex + 1) % projects.length
      navigate(`/project/${projects[nextIndex].id}`)
   }

   return (
      <div className='bg-gradient-to-b from-[#0A1630] via-[#0F1E40] to-[#122C50] min-h-screen'>
         {/* Navbar */}
         <nav className='fixed w-full backdrop-blur-md text-white shadow-lg h-20 md:h-24 border-b border-emerald-400 z-50 flex items-center justify-between px-5'>
            <button onClick={() => navigate('/#projects')}>
               <img
                  src='/assets/home.png'
                  alt='Home'
                  className='w-8 h-8 md:w-9 md:h-9 hover:rounded-xl hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] md:ml-3'
               />
            </button>
            <h1 className='text-2xl md:text-5xl font-bold text-white font-audiowide text-center text-outline-black'>
               {project.name}
            </h1>
            <a href={project.link} target='_blank'>
               <img
                  src='/assets/maximize.png'
                  alt='Open'
                  className='w-8 h-8 md:w-9 md:h-9 hover:rounded-xl hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] md:mr-3'
               />
            </a>
         </nav>

         {/* Main Content */}
         <div className='pt-24 px-4 md:px-10 bg-transparent flex flex-col md:flex-row md:gap-5'>
            {/* Left Button */}
            <div className='fixed md:left-5 left-1 top-1/2 transform -translate-y-1/2 md:translate-y-50'>
               <button
                  onClick={() => {
                     const currentIndex = projects.findIndex(
                        (p) => p.id === parseInt(id)
                     )
                     const prevIndex =
                        (currentIndex - 1 + projects.length) % projects.length
                     navigate(`/project/${projects[prevIndex].id}`)
                  }}
                  className='text-white rounded-none p-2 shadow-lg'
               >
                  <img
                     src='/assets/left-arrow.png'
                     alt='Previous'
                     className='w-6 h-6 md:w-10 md:h-10 hover:rounded-full hover:shadow-[0_0_5px_5px_rgba(0,255,255,0.5)]'
                  />
               </button>
            </div>

            {/* Project Description */}
            <div className='flex flex-col items-center md:items-start md:mt-7 md:ml-16 md:w-1/3 '>
               <p className='text-white text-center md:text-left mb-4 font-albert-sans font-semibold'>
                  {' '}
                  <b className='font-aclonica text-blue-50 font-extralight'>
                     Description :{' '}
                  </b>
                  {project.description}
               </p>
               <ul className='list-disc list-inside text-cyan-400 space-y-2'>
                  <b className='font-extralight text-blue-50 font-aclonica'>
                     Features :
                  </b>
                  {project.features.map((feature, index) => (
                     <li key={index}>{feature}</li>
                  ))}
               </ul>
            </div>

            {/* Media */}
            <div className='flex-1 mt-7 md:mt-10 md:mr-16 mb-10'>
               <div className='flex flex-wrap justify-center gap-8'>
                  {project.media.map((media, index) => (
                     <div
                        key={index}
                        className='md:w-full w-80 bg-gray-700 rounded-lg overflow-hidden shadow-[0_0_10px_5px_rgba(0,255,255,0.5)] hover:scale-105 transition-transform'
                     >
                        {media.type === 'image' ? (
                           <img
                              src={media.url}
                              alt={`Media ${index}`}
                              className='object-cover md:w-full w-full h-64 md:h-full '
                           />
                        ) : (
                           <video
                              controls
                              autoPlay
                              muted
                              loop
                              src={media.url}
                              className='object-cover w-full h-64 md:h-full'
                           />
                        )}
                     </div>
                  ))}
               </div>
            </div>

            {/* Right Button */}
            <div className='fixed md:right-5 right-1 top-1/2 transform -translate-y-1/2 md:translate-y-50'>
               <button
                  onClick={nextProject}
                  className='text-white rounded-none p-2 shadow-lg'
               >
                  <img
                     src='/assets/right-arrow.png'
                     alt='Next'
                     className='w-6 h-6 md:w-10 md:h-10 hover:rounded-full hover:shadow-[0_0_5px_5px_rgba(0,255,255,0.5)]'
                  />
               </button>
            </div>
         </div>
      </div>
   )
}

export default Project
