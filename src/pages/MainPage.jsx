import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import { useState } from 'react';

const MainPage = () => {
    const [username, setUserName] = useState('User');

    const handleUserName = (e) => {
		setUserName(e.target.value);
		setSubmitted(false);
	};

  return (
    <>
        <header>
            <div className="header_textbox">
                <Link to='/tasks' className="header_logbox-reg">Code Wars</Link>
            </div>

            <div className="header_logbox">
                <Link to='/login' className="header_logbox-reg">Join</Link>
                <Link to='/register' className="header_logbox-reg">Create account</Link>
                <a className="header_logbox-reg"><span className='user-logo'> </span>{username}</a>
            </div>
        </header>
        <Outlet />
    </>
  )
};

export default MainPage