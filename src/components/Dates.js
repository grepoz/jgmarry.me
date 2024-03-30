import React from "react";

const Dates = () => {
    return (
        <div className="about__dates grid">
            
            <div className="about__box">
            <i className='bx bx-camera-movie about__icon'></i>

                <h3 className="about__title">Pierwsza randka</h3>
                <span className="about__subtitle">10.10.2018<br/>Molo w Sopocie</span>
            </div>

            <div className="about__box">
            <i className='bx bxs-ship about__icon' ></i>

                <h3 className="about__title">Zaręczyny<br/> na jachcie</h3>
                <span className="about__subtitle">10.10.2021 <br/> Zatoka Gdańska</span>
            </div>

            <div className="about__box">
            <i className='bx bx-heart-circle about__icon' ></i>

                <h3 className="about__title">Powiemy sobie tak</h3>
                <span className="about__subtitle">27.07.2024 <br/> Św. Mikołaj</span>
            </div>
        </div>

    )
}

export default Dates