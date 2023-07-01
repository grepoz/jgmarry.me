import React, { useState } from "react";
import "../styles/App.css";

import Popup from '../components/Popup';

import Header from "./Header.js";
import Countdown from "./Countdown.js"
import Footer from "./Footer.js"

import Home from "../pages/home.js";
import About from "../pages/about.js";
import Info from "../pages/info.js";
import Rsvp from "../pages/rsvp.js";
import Contact from "pages/contact.js";

function App() {

    const [isOpen, setIsOpen] = useState(true);

    const closePopup = () => {
      setIsOpen(false);
    };

    return (
        <>
            <Popup isOpen={isOpen} closePopup={closePopup} />
            <Header />
            <main className="main">
                <Home />   
                {/* <Countdown /> */}
                <About /> 
                <Info />
                <Rsvp />
                <Contact />
                <Footer />
            </main>
            <footer></footer>
        </>
    );
}

export default App;
