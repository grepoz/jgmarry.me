import React from "react";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.facebook.com/profile.php?id=100008116397277" className="home__social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-facebook-f"></i>
            </a>
            <a href="#instagram" className="home__social-icon" target="_blank">
                <i class="uil uil-instagram"></i>
            </a>
            <a href="#gmail" className="home__social-icon" target="_blank">
                <i class="uil uil-envelope"></i>
            </a>
        </div>
    );
};

export default Social;