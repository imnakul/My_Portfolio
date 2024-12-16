export const projects = [
   {
      id: 1,
      name: 'House Marketplace',
      link: 'https://house-marketplace-app-kohl.vercel.app',
      description:
         'A web application where users can list properties for sale or rent, featuring Google authentication, Firebase integration, and a map view.',
      highlights: [
         'Google authentication',
         'Firebase database',
         'Edit properties after uploading',
         'Upload up to 6 pictures of properties',
         'Map view of property',
         'Carousel gallery view',
         'Separate pages for rent and sale properties',
         'Offer system for properties',
      ],
      features: [
         'Responsive Web Application to list your property for rent / sale',
         'User can create account, look, and upload properties details',
         'Authentication & Database using firebase',
         'Used Fire-Store to save images and property details',
      ],
      media: [
         { type: 'video', url: '/assets/hmp/4.mp4' },
         { type: 'image', url: '/assets/hmp/1.jpg' },
         { type: 'image', url: '/assets/hmp/2.jpg' },
         { type: 'image', url: '/assets/hmp/3.jpg' },
      ],
   },
   {
      id: 2,
      name: 'Github-Finder',
      link: 'https://github-finder-app-mocha-seven.vercel.app/',
      description:
         'Its a React based project, in which we can search any Github profiles and see all its details...',
      features: [
         'Web Application which fetches users & their details using GitHub API',
         'Made user Interface to view repositories and other details',
      ],
      media: [
         { type: 'image', url: '/assets/ghf/1.jpg' },
         { type: 'image', url: '/assets/ghf/2.png' },
         { type: 'video', url: '/assets/ghf/3.mp4' },
      ],
   },
   {
      id: 3,
      name: 'To-do App',
      link: 'https://to-do-app-localstorage.vercel.app/',
      description:
         ' Its a react based Responsive Web application ( for Mobile + Desktop ) which uses local storage to save your tasks ( for persistence )...',
      features: [
         'Sort tasks - Latest first / Oldest first',
         'Different themes to switch from',
         'Can check-mark completed task',
         'Edit tasks',
         'Delete task',
         'Clear all tasks at once',
      ],
      media: [
         { type: 'image', url: '/assets/tda/1.jpg' },
         { type: 'image', url: '/assets/tda/2.jpg' },
      ],
   },
]
