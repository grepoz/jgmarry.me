import React from "react";

const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">Julia & Grześ</h1>
            <h3 className="home__subtitle">27.07.2024</h3>
            <p className="home__description">Zapraszają na uroczyste zawarcie związku małżeńskiego</p>

            <a href="#contact" className="button button--flex">
                Skontaktuj się
                <i className="uil uil-location-arrow button__icon"></i>
            </a>
        </div>

    );
};

export default Data;