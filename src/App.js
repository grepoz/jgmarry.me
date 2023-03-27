import React from "react";
import "./styles/App.css";
import Header from "./components/Header.js";

import Home from "./pages/home.js";
import About from "./pages/about";
import Info from "./pages/info";
import Rsvp from "pages/rsvp";
import Kontakt from "pages/kontakt";
import Footer from "./components/Footer.js"

function App() {

    return (
        <>
            <Header />
            <main className="main">
                <Home />   
                <About /> 
                <Info />
                <Rsvp />
                <Kontakt />
                <Footer />
            </main>
            <footer></footer>
        </>
    );
}

export default App;
