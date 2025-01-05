import { useState } from 'react'

function Contact() {
   // <div className='min-h-screen flex flex-col items-center justify-center bg-transparent text-white border border-orange-500'>
   //    <h1 className='text-4xl font-bold'>Contact Me</h1>
   //    <img src='../../assets/border.png' alt='' />
   // </div>

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      title: '',
      message: '',
   })

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      //Submission logic
      // Construct the mailto link
      const mailtoLink = `mailto:imnakul44@gmail.com?subject=${encodeURIComponent(
         formData.title
      )}&body=${encodeURIComponent(
         `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:${formData.message}`
      )}`

      // Open the mail client
      window.location.href = mailtoLink

      setFormData({ name: '', email: '', title: '', message: '' })
   }

   return (
      <>
         <div className='max-w-xs xl:max-w-3xl h-auto mx-auto mt-auto mb-16 py-6 px-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-lg hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] transition-transform duration-300 hover:scale-105 border border-cyan-500'>
            <h1 className='text-4xl xl:text-5xl font-audiowide mb-4 text-center text-cyan-300'>
               Contact Me
            </h1>
            <p className='text-gray-300 mb-2 text-center font-albert-sans'>
               Got a question, project, feedback, or just want to say hi? I'd
               love to hear from you!
            </p>
            <form onSubmit={handleSubmit} className='space-y-2'>
               {/* Name */}
               <div>
                  <label
                     htmlFor='name'
                     className='block text-gray-400 font-small pb-1 pl-1 font-albert-sans'
                  >
                     Name
                  </label>
                  <input
                     type='text'
                     name='name'
                     value={formData.name}
                     onChange={handleInputChange}
                     id='name'
                     placeholder='Your Name'
                     required
                     className='w-full bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-sm font-podkova font-extra-light'
                  />
               </div>
               {/* Email */}
               <div>
                  <label
                     htmlFor='email'
                     className='block text-gray-400 font-small pb-1 pl-1 font-albert-sans'
                  >
                     Email
                  </label>
                  <input
                     type='email'
                     name='email'
                     value={formData.email}
                     onChange={handleInputChange}
                     id='email'
                     placeholder='Your Email'
                     required
                     className='w-full bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-sm font-podkova'
                  />
               </div>
               {/* Title */}
               <div>
                  <label
                     htmlFor='title'
                     className='block text-gray-400 font-small pb-1 pl-1 font-albert-sans'
                  >
                     Title
                  </label>
                  <input
                     type='text'
                     name='title'
                     value={formData.title}
                     onChange={handleInputChange}
                     id='title'
                     placeholder='Title'
                     required
                     className='w-full bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 text-sm font-podkova'
                  />
               </div>
               {/* Message */}
               <div>
                  <label
                     htmlFor='message'
                     className='block text-gray-400 font-small pb-1 pl-1 font-albert-sans'
                  >
                     Message
                  </label>
                  <textarea
                     name='message'
                     value={formData.message}
                     onChange={handleInputChange}
                     id='message'
                     placeholder='Your Message'
                     rows='4'
                     required
                     className='w-full bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 mb-2 text-sm font-podkova'
                  ></textarea>
               </div>
               {/* Submit Button */}
               <div className='flex justify-center'>
                  <button
                     type='submit'
                     className='px-3 py-2 bg-cyan-400 text-black xl:text-md text-xs font-light font-audiowide rounded-lg shadow-md  ring-2 ring-green-300  transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.6)]'
                  >
                     Send Message
                  </button>
               </div>
            </form>
         </div>
      </>
   )
}
export default Contact
