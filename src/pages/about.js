import React from "react";
import "../styles/about.css";
import AboutImg from "../img/zaloguj sie1.png";
import Dates from "../components/Dates";
import Invitation from "../img/Invitation.pdf";

const About = () => {
	return (
		<section className="about section" id="about">
			<h2 className="section-title">Nasza historia</h2>
			<span className="section-subtitle">Wspólne początki</span>

			<div className="about__container container grid">
				<img src={AboutImg} alt="my" className="about__img"></img>
				<div className="about__data">
					<Dates />
					<p className="about__description">
						Poznali się w liceum, a konkretnie na V Lo w Oliwie. 
						Na pierwszej randce poszli do kina, a potem na 
						romantyczny spacer po molo w Sopocie. Lubią 
						wspólne podróże i mieli okazję przejechać rowerem 
						całą Polskę. Po paru latach Grześ postanowił 
						oświadczyć się Julii na jachcie. 
					</p>

					<a download="" href={Invitation} className="button button--flex">Pobierz zdjęcie</a>
				</div>
			</div>
		</section>
	)
}

export default About