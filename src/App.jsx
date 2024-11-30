import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CustomCursor from './components/CustomCursor'

function App() {
   return (
      <>
         <h1>hello</h1>
         <Router>
            <CustomCursor />
            <Routes>
               {/* <Route path='/' element={<Home />} /> */}
               {/* <Route path='/login' element={<Login />} /> */}
               {/* <Route path='/register' element={<Register />} /> */}
            </Routes>
         </Router>
      </>
   )
}

export default App
