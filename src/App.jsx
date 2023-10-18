import Header from "./pages/Header"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from './pages/Login'
import RegistrationPage from './pages/Registration'
import CreateTasks from "./pages/CreateTasks"
import Tasks from "./pages/Tasks"

function App() {

  return (

  <>
    <Header />
     <BrowserRouter>
       <Routes>
           <Route path="/login" element={<LoginPage />} />
           <Route path="/register" element={<RegistrationPage />} />
           <Route path="/create" element={<CreateTasks />} />
           <Route path="/tasks" element={<Tasks />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
