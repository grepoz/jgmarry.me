import React from "react";

const Social = () => {

    let instagramUrl = process.env.REACT_APP_INSTAGRAM_URL; 
    if (!process.env.REACT_APP_INSTAGRAM_URL){
        instagramUrl = "#instagram";
    }

    return (
        <div className="home__social">
            <a href="https://www.facebook.com/profile.php?id=100008116397277" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-facebook-f"></i>
            </a>
            <a href={instagramUrl} className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://accounts.google.com/b/0/AddMailService" className="home__social-icon" target="_blank" rel="noreferrer" >
                <i className="uil uil-envelope"></i>
            </a>
        </div>
    );
};

export default Social;