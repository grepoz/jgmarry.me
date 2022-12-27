import setupConnectionToDb from './database-helper/setupConnection';
import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Home from "./pages";
import About from "./pages/about.js";

setupConnectionToDb();

function App() {
    return (
        <Router>
            <Navbar />
            <div id="main-container">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
