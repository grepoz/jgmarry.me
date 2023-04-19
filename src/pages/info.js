import React, { useState } from "react";
import "../styles/info.css";

const Info = () => {
	const[toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	}

	return (
		<section className="info section" id="info">
			<h2 className="section-title">Informacje</h2>
			<span className="section-subtitle">Wszystko co chcesz wiedzieć</span>

			<div className="info__container container grid">
				<div className="info__content">
					<div>
						<i className="uil uil-archway info__icon"></i>
						<h3 className="info__title">Ślub</h3>
					</div>

					<span className="info__button" onClick={() => toggleTab(1)}>
						Zobacz więcej
						<i className="uil uil-arrow-right info_button-icon"></i>
					</span>

					<div className={toggleState === 1 ? "info__modal active-modal" : "info__modal"}>
						<div className="info__modal-content">
							<i className="uil uil-times info__modal-close" onClick={() => toggleTab(0)}></i>
							<h3 className="info__modal-title">Ślub</h3>
							<p className="info__modal-description">
								Wybór kościoła nie jest przypadkowy, to właśnie 
								tutaj ślub brali nasi rodzice i tutaj odnaleźliśmy 
								się jako studenci na Górce.
							</p>
							<ul className="info__modal-infos grid">

								<li className="info__modal-info">
									<i className="uil uil-map-marker info__modal-icon"></i>
									<p className="info__modal-text">Bazylika św. Mikołaja<br/>ul.Świętojańska 72, Gdańsk </p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-clock info__modal-icon"></i>
									<p className="info__modal-text">9 Września<br/>Sobota | 15:00</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="info__content">
					<div>
						<i className="uil uil-glass-martini-alt info__icon"></i>
						<h3 className="info__title">Wesele</h3>
					</div>

					<span className="info__button" onClick={() => toggleTab(2)}>
						Zobacz więcej
						<i className="uil uil-arrow-right info_button-icon"></i>
					</span>

					<div className={toggleState === 2 ? "info__modal active-modal" : "info__modal"}>
						<div className="info__modal-content">
							<i className="uil uil-times info__modal-close" onClick={() => toggleTab(0)}></i>
							<h3 className="info__modal-title">Wesele</h3>
							<p className="info__modal-description">
								Z Świętowanie odbędzie się w pięknej Villi Evia we Wrzeszczu.
							</p>
							<ul className="info__modal-infos grid">

								<li className="info__modal-info">
									<i className="uil uil-map-marker info__modal-icon"></i>
									<p className="info__modal-text">Villa Eva<br/>ul.Stefana Batorego 28, Gdańsk </p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-info-circle info__modal-icon"></i>
									<p className="info__modal-text">Przy restauracji jest darmowy parking dla naszych gości.</p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-info-circle info__modal-icon"></i>
									<p className="info__modal-text">Istnieje możliwość zarezerwowania noclegu w Villa Eva. W razie potrzeby skontaktuj się z nami :)</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="info__content special">
					<div>
						<i className="uil uil-star info__icon"></i>
						<h3 className="info__title">Konkurs</h3>
					</div>

					<span className="info__button" onClick={() => toggleTab(3)}>
						Zobacz więcej
						<i className="uil uil-arrow-right info_button-icon"></i>
					</span>

					<div className= {toggleState === 3 ? "info__modal active-modal" : "info__modal"}>
						<div className="info__modal-content">
							<i className="uil uil-times info__modal-close" onClick={() => toggleTab(0)}></i>
							<h3 className="info__modal-title">Konkurs</h3>
							<p className="info__modal-description">
								W trakcie trwania wesela jesteście zaproszeni do konkursu na najciekawsze zdjęcie lub filmik. Na zwycięzcę czeka wyjątkowa nagrada!
							</p>
							<ul className="info__modal-infos grid">

								<li className="info__modal-info">
									<i className="uil uil-arrow-right info__modal-icon"></i>
									<p className="info__modal-text">Zrób ciekawe zdjęcie lub nagraj filmik</p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-arrow-right info__modal-icon"></i>
									<p className="info__modal-text">wyślij nam</p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-external-link-alt info__modal-icon"></i>
									<p className="info__modal-text"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">instagram</a></p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-arrow-right info__modal-icon"></i>
									<p className="info__modal-text">przewidziane są nagrody</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* <div className="info__content">
					<div>
						<i className="uil uil-fire info__icon"></i>
						<h3 className="info__title">Ognisko</h3>
					</div>

					<span className="info__button" onClick={() => toggleTab(3)}>
						Zobacz więcej
						<i className="uil uil-arrow-right info_button-icon"></i>
					</span>

					<div className= {toggleState === 3 ? "info__modal active-modal" : "info__modal"}>
						<div className="info__modal-content">
							<i className="uil uil-times info__modal-close" onClick={() => toggleTab(0)}></i>
							<h3 className="info__modal-title">Ognisko</h3>
							<p className="info__modal-description">
								Tydzień po weselu organizujemy ognisko dla naszych przyjaciół. Sami wiecie gdzie :)
							</p>
							<ul className="info__modal-infos grid">

								<li className="info__modal-info">
									<i className="uil uil-map-marker info__modal-icon"></i>
									<p className="info__modal-text">U Grzesia<br/>ul. Leśna Polana, Sopot </p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-clock info__modal-icon"></i>
									<p className="info__modal-text">16 Września<br/>Sobota | 18:30</p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-external-link-alt info__modal-icon"></i>
									<p className="info__modal-text"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">wydarzenie na fb</a></p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-info-circle info__modal-icon"></i>
									<p className="info__modal-text">dresscode: jak do lasu</p>
								</li>

								<li className="info__modal-info">
									<i className="uil uil-info-circle info__modal-icon"></i>
									<p className="info__modal-text">przynoście jedzenie i alko</p>
								</li>
								
							</ul>
						</div>
					</div>
				</div> */}

			</div>
		</section>
	)
}

export default Info