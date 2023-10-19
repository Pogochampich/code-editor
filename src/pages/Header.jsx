import react from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [username, setUserName] = useState("User");

  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  return (
    <>
      <header>
        <div className="header_textbox">
          <Link to="/tasks" className="header_logbox-reg">
            Code Wars
          </Link>
        </div>

        <div className="header_logbox">
          <a href="/login" className="header_logbox-reg">
            Join
          </a>
          <a href="/register" className="header_logbox-reg">
            Create account
          </a>
          <a className="header_logbox-reg">
            <span className="user-logo"> </span>
            {username}
          </a>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
