import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// import GradientBackground from './design/designComponents/GradientComponent'
import Project from './components/Project'
import Home from './components/Home'
import { projects } from './data/ProjectsData'

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route
                  path='/project/:id'
                  element={<Project projects={projects} />}
               />
               {/* Project component */}
            </Routes>
         </Router>
      </>
   )
}

export default App
