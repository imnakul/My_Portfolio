import React, { useState, useEffect, useRef } from 'react'

const QuoteSection = () => {
   const [quote, setQuote] = useState('Loading an inspiring quote...')
   const quoteRef = useRef()

   const fetchQuote = async () => {
      try {
         const category = 'inspirational' // Change category as needed
         const response = await fetch(
            `https://api.api-ninjas.com/v1/quotes?category=${category}`,
            {
               method: 'GET',
               headers: {
                  'X-Api-Key': '+aSb1w8rKyV1bHIzo9rwiw==O5XsatrRBPBWK7wD',
                  'Content-Type': 'application/json',
               },
            }
         )
         const data = await response.json()

         // Assuming the API response is an array of quotes
         if (data && data.length > 0) {
            setQuote(data[0].quote) // Use the first quote from the response
         } else {
            setQuote('No quotes available at the moment.')
         }
      } catch (error) {
         setQuote(
            'Could not fetch a quote at this moment. Please try again later.'
         )
      }
   }

   useEffect(() => {
      //   const observer = new IntersectionObserver((entries) => {
      //      if (entries[0].isIntersecting) {
      //         fetchQuote()
      //      }
      //   })
      //   if (quoteRef.current) {
      //      observer.observe(quoteRef.current)
      //   }
      //   return () => observer.disconnect()
      fetchQuote()
   }, [])

   return (
      <div
         ref={quoteRef}
         className='max-w-xs xl:max-w-2xl text-center text-white text-xl xl:text-2xl font-bold font-podcova mx-auto bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg shadow-lg px-4 py-2 border-2 border-cyan-300'
      >
         {quote}
      </div>
   )
}

export default QuoteSection
