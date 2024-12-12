/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         textShadow: {
            default: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Subtle shadow
         },
         fontFamily: {
            'albert-sans': ['"Albert Sans"', 'sans-serif'],
            'playwrite-hr': ['"Playwrite HR"', 'serif'],
            podkova: ['"Podkova"', 'serif'],
            audiowide: ['"Audiowide"', 'system-ui'],
            galada: ['Galada', 'system-ui'],
         },
         fontWeight: {
            'extra-light': 100, // Add specific font weight if needed
         },

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
            staticrainbow: {
               '100%': {
                  background:
                     'linear-gradient(to right, red, orange, yellow, green)',
               },
               '0%': {
                  background: 'linear-gradient(to right, cyan,yellow, green)',
               },
            },
            rainbow: {
               '0%': {
                  background:
                     'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
               },
               '25%': {
                  background:
                     'linear-gradient(to right, orange, yellow, green, blue, indigo, violet, red)',
               },
               '50%': {
                  background:
                     'linear-gradient(to right, yellow, green, blue, indigo, violet, red, orange)',
               },
               '75%': {
                  background:
                     'linear-gradient(to right, green, blue, indigo, violet, red, orange, yellow)',
               },
               '100%': {
                  background:
                     'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
               },
            },
         },
         animation: {
            rainbow: 'rainbow 8s linear infinite',
            staticrainbow: 'staticrainbow 4s linear infinite',
            spin: '0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
         },
      },
   },
   darkMode: 'class',
   plugins: [],
}
