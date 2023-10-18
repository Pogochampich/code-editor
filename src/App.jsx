import Header from "./pages/Header"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from './pages/Login'
import RegistrationPage from './pages/Registration'
import { AuthContext } from "./context/AuthContext"
import { useAuth } from "./hooks/useAuth"

function App() {
  const { login, logout, token, userId, ready } = useAuth();
  //const isAuthenticated = !!token

  if (!ready) {
    return <div>Loading...</div>
  }

  return (

    <AuthContext.Provider value={{
      token,
      userId,
      login,
      logout
    }}>

    

    <Header />
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
