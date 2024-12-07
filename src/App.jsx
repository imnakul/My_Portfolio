import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// import GradientBackground from './design/designComponents/GradientComponent'
import Project from './components/Project'
import Home from './components/Home'

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/project' element={<Project />} />
               {/* Project component */}
            </Routes>
         </Router>
      </>
   )
}

export default App
