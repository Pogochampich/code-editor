import react from 'react'

const Header = () => {
    return(
        <header>
            <div class="header_textbox">
                <a href='http://localhost:5173/' class="logo">Code Wars</a>
            </div>

            <div class="header_logbox">
                <a href='http://localhost:5173/login'>Join</a>
                <a href='http://localhost:5173/register' class="header_logbox-reg">Create account</a>
            </div>
        </header>
    )
}

export default Header