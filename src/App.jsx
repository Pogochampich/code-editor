import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import CreateTasks from "./pages/CreateTasks";
import Battlefield from "./pages/Battlefield";
import Tasks from "./pages/Tasks";

function App() {
  const { login, logout, token, userId, ready } = useAuth();
  //const isAuthenticated = !!token

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        login,
        logout,
      }}
    >
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/create" element={<CreateTasks />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/battle" exact element={<Battlefield />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
