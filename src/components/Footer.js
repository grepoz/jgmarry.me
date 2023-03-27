import React from "react";
import "../styles/Footer.css"

function Footer() {
	
	let instagramUrl = process.env.REACT_APP_INSTAGRAM_URL; 
    if (!process.env.REACT_APP_INSTAGRAM_URL){
        instagramUrl = "#instagram";
    }

	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">Julia & Grześ</h1>

				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">Nasza historia</a>
					</li>

					<li>
						<a href="#info" className="footer__link">Informacje</a>
					</li>

					<li>
						<a href="#login" className="footer__link">RSVP</a>
					</li>
				</ul>

				<div className="footer__social">
            		<a href="https://www.facebook.com/profile.php?id=100008116397277" className="footer__social-link" target="_blank" rel="noreferrer">
                		<i className="uil uil-facebook-f"></i>
           		 	</a>
            		<a href={instagramUrl} className="footer__social-link" target="_blank" rel="noreferrer">
                		<i className="uil uil-instagram"></i>
            		</a>
            		<a href="https://accounts.google.com/b/0/AddMailService" className="footer__social-link" target="_blank" rel="noreferrer">
                		<i className="uil uil-envelope"></i>
            		</a>
        		</div>

				<span className="footer__copy">
					&#169; Julia&Grześ. All rights reserved
				</span>
			</div>
		</footer>  
	)
}

export default Footer;