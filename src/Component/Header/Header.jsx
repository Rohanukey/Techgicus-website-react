import React from "react";
import "./Header.css";

function Header() {



    return (

        <header>
            <div className="logo">
                <h1>Techgicus</h1>
            </div>

            <div className="nav">
            <a href=""><li>HOme</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Login</li></a>
            </div>
        </header>
    );
}


export default Header;