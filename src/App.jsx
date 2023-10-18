import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from './pages/Login'
import RegistrationPage from './pages/Registration'

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
           <Route path="/login" element={<LoginPage />} />
           <Route path="/register" element={<RegistrationPage />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
