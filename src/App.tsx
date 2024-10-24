
import { Route, Routes } from 'react-router-dom'
// import './App.css'
import LandingPage from './Pages/LandingPage'
import Register from './Pages/Register'
import Navbar from './Pages/LandingPage/Navbar'




function App() {

  return (
    <div>


      <Routes>

        <Route path='' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </div>
  )
}

export default App
