import React from "react";

const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">Julia & Grześ</h1>
            <h3 className="home__subtitle">9.09.2023</h3>
            <p className="home__description">Zapraszają na uroczyste zawarcie związku małżeńskiego</p>

            <a href="#rsvp" className="button button--flex">
                Wezmę udział
                <i className="uil uil-location-arrow button__icon"></i>
            </a>

        </div>

    );
};

export default Data;