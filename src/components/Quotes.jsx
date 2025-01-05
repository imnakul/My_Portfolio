import React, { useState, useEffect, useRef } from 'react'

const QuoteSection = () => {
   const [quote, setQuote] = useState('Loading an inspiring quote...')
   const [copied, setCopied] = useState(false)
   const quoteRef = useRef()

   const fetchQuote = async () => {
      try {
         const response = await fetch(`https://api.api-ninjas.com/v1/quotes`, {
            method: 'GET',
            headers: {
               'X-Api-Key': import.meta.env.VITE_APININJAS_API,

               'Content-Type': 'application/json',
            },
         })
         const data = await response.json()

         // Assuming the API response is an array of quotes
         if (data && data.length > 0) {
            setQuote(data[0].quote) // Use the first quote from the response
         } else {
            // setQuote('No quotes available at the moment.')
            setQuote('Change in your Life lies in your Hands only.')
         }
      } catch (error) {
         setQuote(
            'Could not fetch a quote at this moment. Please try again later.'
         )
      }
   }

   const handleCopy = () => {
      // Copies the dynamically fetched quote
      navigator.clipboard.writeText(quote).then(() => {
         setCopied(true)
         setTimeout(() => setCopied(false), 1500) // Hide "Copied!" popup after 1.5 seconds
      })
   }

   useEffect(() => {
      // const observer = new IntersectionObserver((entries) => {
      //    if (entries[0].isIntersecting) {
      //       fetchQuote()
      //    }
      // })
      // if (quoteRef.current) {
      //    observer.observe(quoteRef.current)
      // }
      // return () => observer.disconnect()
      fetchQuote()
   }, [])

   return (
      <div
         ref={quoteRef}
         className='relative max-w-xs xl:max-w-2xl text-center text-black text-xl xl:text-2xl font-extra-light font-playwrite-hr mx-auto  rounded-lg shadow-lg px-4 py-2 border-2 border-cyan-300 animate-staticrainbow bg-[length:200%_200%] bg-clip-border drop-shadow-lg pr-10'
      >
         {/* text-shadow */}
         {/* bg-gradient-to-r from-blue-900 to-purple-900   */}
         {/* bg-gradient-to-r from-purple-950 via-gray-900 to-purple-950 animate-gradient-x */}
         " {quote}"{/* Copy Button */}
         <button
            onClick={handleCopy}
            className='absolute bottom-2 right-2 bg-transparent hover:opacity-70 text-white p-0 mb-1 rounded-full shadow-lg focus:outline-none border-1 border-black'
            title='Copy text'
         >
            <img src='assets/copy.png' alt='copyIcon' className='w-4 h-4' />
         </button>
         {/* Copied Popup */}
         {copied && (
            <div className='absolute top-16 right-2 bg-white text-black text-xs px-2 py-2 rounded-md shadow-md'>
               Quote Copied!
            </div>
         )}
      </div>
   )
}

export default QuoteSection
