import React from "react";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar.js";

import Home from "./pages";
import About from "./pages/about.js";
import Register from './pages/register';
import SignupFamily from './pages/signupFamily.js';

function App() {
    return (
        <Router>
            <Navbar />
            <div id="main-container">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/signupFamily" element={<SignupFamily />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
