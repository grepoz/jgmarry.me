import React, { useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header.js";

import Home from "./pages/home.js";
import About from "./pages/about";
import Info from "./pages/info";
import Rsvp from "pages/rsvp";
import Contact from "pages/contact";
import Footer from "./components/Footer.js"

function WakeUpBackend(){
    let dummyPassword = "wakeup-password";
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "password": dummyPassword })
    };

    fetch("/login", requestOptions)
        .then(response => { return response; })
        .catch(e => { console.log(`Error while waking up: ${e}`)})
        .finally(_ => { console.log("Called wake up function.\n") });
}

function App() {

    useEffect(()=>{
        function fetchData() {
            WakeUpBackend();
          };
          fetchData();
    }, []);

    return (
        <>
            <Header />
            <main className="main">
                <Home />   
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
