import React from "react";
import "../styles/footer.css"

function Footer() {
	
	const instagramUrl = process.env.REACT_APP_INSTAGRAM_URL || "#instagram";

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

				<div className="contact__card">
					<a href="https://mail.google.com/mail/?view=cm&fs=1&to=jg.pozorscy@gmail.com" className="contact__button" target="_blank" rel="noreferrer">
						<div>
							<i className="bx bx-mail-send contact__card-icon"></i>

							<h3 className="contact__card-title">Email</h3>
							<span className="contact__card-data">jg.pozorscy@gmail.com</span>
						
							Napisz do nas bezpośrednio{" "}
							<i className="bx bx-right-arrow-alt
							contact__button-icon"></i>
						</div>
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