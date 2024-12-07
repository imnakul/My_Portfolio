import React, { useState, useEffect, useRef } from 'react'

function Copy() {
   const [quote, setQuote] = useState('Loading an inspiring quote...')
   const [copied, setCopied] = useState(false)
   const quoteRef = useRef()

   const handleCopy = () => {
      navigator.clipboard.writeText(textToCopy).then(() => {
         setCopied(true)
         setTimeout(() => setCopied(false), 1500) // Hide "Copied!" popup after 1.5 seconds
      })
   }

   return (
      <div className='relative bg-blue-900 p-4 rounded-md shadow-md flex items-center justify-center'>
         {/* <div className='bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-black font-cursive italic px-4 py-2 rounded-md text-center'>
            {textToCopy}
         </div> */}
         {/* Copy Button */}
         <button
            onClick={handleCopy}
            className='absolute top-2 right-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg focus:outline-none'
            title='Copy text'
         >
            📋
         </button>
         {/* Copied Popup */}
         {copied && (
            <div className='absolute top-10 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md'>
               Copied!
            </div>
         )}
      </div>
   )
}

export default Copy
