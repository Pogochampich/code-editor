import Header from "./pages/Header"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from './pages/Login'
import Form from "./pages/Form"
import RegistrationPage from './pages/Registration'
import { AuthContext } from "./context/AuthContext"

function App() {
  


  const isAuthenticated = !!token



  return (
<<<<<<< HEAD
    <AuthContext.Provider value={{
      token,
      uuid,
      login,
      logout
    }}>
=======

  <>
    <Header />
>>>>>>> 065d306a420ae56d1721cb4a2d9900f4ef81a328
     <BrowserRouter>
       <Routes>
           <Route path="/login" element={<Form />} />
           <Route path="/register" element={<RegistrationPage />} />
       </Routes>
     </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
