import Header from "./pages/Header"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LoginPage from './pages/Login'
import RegistrationPage from './pages/Registration'
import CreateTasks from "./pages/CreateTasks"
import Tasks from "./pages/Tasks"
import MainPage from "./pages/MainPage"

function App() {

  return (

  <>
    {/* <Header /> */}
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<MainPage />} >
           <Route path="/login" element={<LoginPage />} />
           <Route path="*" element={<RegistrationPage />} />
           <Route path="/create" element={<CreateTasks />} />
           <Route path="/tasks" element={<Tasks />} />
          </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
