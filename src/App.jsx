import Header from "./pages/Header"
import Footer from "./pages/Footer"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from './pages/Login'
import RegistrationPage from './pages/Registration'
import CreateTasks from "./pages/CreateTasks"

function App() {

  return (

  <>
    <Header />
     <BrowserRouter>
       <Routes>
           <Route path="/login" element={<LoginPage />} />
           <Route path="/register" element={<RegistrationPage />} />
           <Route path="/create" exact element={<CreateTasks />} />
       </Routes>
     </BrowserRouter>
     <Footer />
    </>
  )
}

export default App
