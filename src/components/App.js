import React from "react";
import "../styles/App.css";

import Header from "./Header.js";
import Footer from "./Footer.js"

import Home from "../pages/home.js";
import About from "../pages/about.js";
import Info from "../pages/info.js";
import Contact from "pages/contact.js";

function App() {

    return (
        <>
            <Header />
            <main className="main">
                <Home />   
                {/* <Countdown /> */}
                <About /> 
                <Info />
                <Contact />
                <Footer />
            </main>
            <footer></footer>
        </>
    );
}

export default App;
