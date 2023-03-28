import React from "react";
import "../styles/about.css";
import AboutImg from "../img/zaloguj sie1.png";
import Dates from "../components/Dates";

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
						Poznaliśmy się w oliwskim V LO. Na pierwszą randkę wybraliśmy sprawdzone kino i spacer po sopockim molo. Po randce nasze życie przyspieszyło. Zderzenie dwóch różnych światów jest burzliwe, a jego wynik zero-jedynkowy. U nas było dwa. Poza tym skupialiśmy się na nauce, wierze i pasjach. Lubimy podróże. Ba, nawet przejechaliśmy rowerem całą wschodnią Polskę. Lubimy rozwój. Słuchamy razem podcastów i uczymy się kodować (właśnie widzicie efekty). Lubimy sport. To taki wentyl bezpieczeństwa dla złych humorków.
						<br/>
						To dyskusyjne, ale uważamy, że można i warto spędzić z drugą osobą całe życie. Dlatego zaręczyliśmy się na morzu i dziś przygotowujemy do małżeństwa i wspólnego świętowania z Wami. 
					</p>
				</div>
			</div>
		</section>
	)
}

export default About