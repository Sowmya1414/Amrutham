import React from 'react';
import AmruLogo from '../assets/Logo.png'
const Nav=()=> {
    return (
        <nav>
            <div className="nav__container1">
                <a href="/">
                    <img src={AmruLogo} alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__link_fd">
                            Find Doctors
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            About Us
                        </a>
                    </li>
                </ul>
            </div>
            <div className="nav__container2">
                <ul className="nav__links">
                <li className="nav__list">
                        <a href="/" className=" nav__link nav__link__login">
                            Login
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__link nav__link__sign">
                            SignUp
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;