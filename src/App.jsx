import Header from "./pages/Header"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from './pages/Login'
import Form from "./pages/Form"
import RegistrationPage from './pages/Registration'

function App() {



  return (

  <>
    <Header />
     <BrowserRouter>
       <Routes>
           <Route path="/login" element={<Form />} />
           <Route path="/register" element={<RegistrationPage />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
