import React from "react";
import "../styles/about.css";
import AboutImg from "../img/zaloguj sie1.png";
import Info from "../components/Info";
import Invitation from "../img/Invitation.pdf";

const About = () => {
	return (
		<section className="about section" id="about">
			<h2 className="section-title">Our Story</h2>
			<span className="section-subtitle">From the beginnings</span>

			<div className="about__container container grid">
				<img src={AboutImg} alt="my" className="about__img"></img>
				<div className="about__data">
					<Info />
					<p className="about__description">Jesteśmy razem od 4 lat, poznaliśmy 
					się w liceum i chcemy wziąć ślub. Nien nam Bóg błogosławi 
					</p>

					<a download="" href={Invitation} className="button button--flex">Download Invitation</a>
				</div>
			</div>
		</section>
	)
}

export default About