import react from 'react'
import { useState } from 'react';

const Header = () => {
    const [username, setUserName] = useState('User');

    const handleUserName = (e) => {
		setUserName(e.target.value);
		setSubmitted(false);
	};

    return(
        <header>
            <div class="header_textbox">
                <a href='http://localhost:5173/tasks' class="header_logbox-reg">Code Wars</a>
            </div>

            <div class="header_logbox">
                <a href='http://localhost:5173/login' class="header_logbox-reg">Join</a>
                <a href='http://localhost:5173/register' class="header_logbox-reg">Create account</a>
                <a class="header_logbox-reg"><span className='user-logo'> </span>{username}</a>
            </div>
        </header>
    )
}

export default Header