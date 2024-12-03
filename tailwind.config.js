/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         animation: {
            bounce: 'bounce 1.2s infinite', // Custom duration
         },
         keyframes: {
            bounce: {
               '0%, 100%': {
                  transform: 'translateY(-10%)',
               },
               '50%': {
                  transform: 'translateY(10%)',
               },
            },
         },
      },
   },
   darkMode: 'class',
   plugins: [],
}
