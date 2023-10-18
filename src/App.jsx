import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from './pages/Login'
import RegistrationPage from './pages/Registration'
import { AuthContext } from "./context/AuthContext"

function App() {
  


  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{
      token,
      uuid,
      login,
      logout
    }}>
     <BrowserRouter>
       <Routes>
           <Route path="/login" element={<LoginPage />} />
           <Route path="/register" element={<RegistrationPage />} />
       </Routes>
     </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
