import react, { useContext } from "react";
import { useState } from "react";
import { Link, Outlet, redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const auth = useContext(AuthContext);

  const isLoggedIn = auth.isAuthenticated;

  const [username, setUserName] = useState("User");

  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    auth.logout();
    redirect("/login");
  };

  return (
    <>
      <header>
        <div className="header_textbox">
          <a href="/tasks" className="header_logbox-reg">
            Code Wars
          </a>
        </div>

        <div className="header_logbox">
          <a href="/login" className="header_logbox-reg">
            Join
          </a>
          <a href="/register" className="header_logbox-reg">
            Create account
          </a>
          {isLoggedIn ? (
            <a href="/login" onClick={handleLogout}>
              Log out
            </a>
          ) : (
            <a className="header_logbox-reg">
              <span className="user-logo"> </span>
              {username}
            </a>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
