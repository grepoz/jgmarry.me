import React, { useState } from "react";
import "../styles/header.css";
const Header = () => {
    /* ========= BRAKEPOINTS ========= */
    const[Toggle, showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">Julia & Grześ</a>

                <div className={Toggle ? "nav__menu show-menu" : 
                "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> 
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-master-card nav__icon"></i> 
                                Nasza historia
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#info" className="nav__link">
                                <i className="uil uil-megaphone nav__icon"></i> 
                                Informacje
                            </a>
                        </li>

                        {/* <li className="nav__item">
                            <a href="#gallery" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> 
                                Galeria
                            </a>
                        </li> */}

                        {/* <li className="nav__item">
                            <a href="#login" className="nav__link">
                                <i className="uil uil-envelope nav__icon"></i> 
                                RSVP
                            </a>
                        </li> */}

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> 
                                Kontakt
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;