import { useState } from 'react'

function Contact() {
   // <div className='min-h-screen flex flex-col items-center justify-center bg-transparent text-white border border-orange-500'>
   //    <h1 className='text-4xl font-bold'>Contact Me</h1>
   //    <img src='../../assets/border.png' alt='' />
   // </div>

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   })

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      alert('Form submitted!') // Replace with actual submission logic
      setFormData({ name: '', email: '', message: '' })
   }

   return (
      <>
         <div className='max-w-3xl mx-auto mt-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-lg hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.5)] transition-transform duration-300 hover:scale-105'>
            <h2 className='text-3xl font-bold mb-4 text-center text-green-400'>
               Contact Me
            </h2>
            <p className='text-gray-300 mb-6 text-center'>
               Got a question, project, or just want to say hi? I'd love to hear
               from you!
            </p>
            <form onSubmit={handleSubmit} className='space-y-4'>
               {/* Name */}
               <div>
                  <label
                     htmlFor='name'
                     className='block text-gray-400 font-medium'
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
                     className='w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'
                  />
               </div>
               {/* Email */}
               <div>
                  <label
                     htmlFor='email'
                     className='block text-gray-400 font-medium'
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
                     className='w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'
                  />
               </div>
               {/* Message */}
               <div>
                  <label
                     htmlFor='message'
                     className='block text-gray-400 font-medium'
                  >
                     Message
                  </label>
                  <textarea
                     name='message'
                     value={formData.message}
                     onChange={handleInputChange}
                     id='message'
                     placeholder='Your Message'
                     rows='5'
                     required
                     className='w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'
                  ></textarea>
               </div>
               {/* Submit Button */}
               <div className='flex justify-center'>
                  <button
                     type='submit'
                     className='px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105'
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
