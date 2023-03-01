import React from "react";

const Dates = () => {
    return (
        <div className="about__dates grid">
            
            <div className="about__box">
            <i class='bx bx-camera-movie about__icon'></i>

                <h3 className="about__title">Pierwsza randka</h3>
                <span className="about__subtitle">10.10.2019 | 18:00 | Molo w Sopocie</span>
            </div>

            <div className="about__box">
            <i class='bx bxs-ship about__icon' ></i>

                <h3 className="about__title">Zaręczyny</h3>
                <span className="about__subtitle">10.10.2021 | 16:37 | Zatoka Gdańska</span>
            </div>

            <div className="about__box">
            <i class='bx bx-heart-circle about__icon' ></i>

                <h3 className="about__title">Powiemy sobie tak</h3>
                <span className="about__subtitle">9.09.2023 | 16:30 | Bazylika św. Mikołaja</span>
            </div>
        </div>

    )
}

export default Dates