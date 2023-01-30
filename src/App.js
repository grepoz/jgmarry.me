import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/App.css";
import Navbar from "./components/Navbar.js";

import Home from "./pages";
import About from "./pages/about.js";
import Register from './pages/register';
import SignupFamily from './pages/signupFamily.js';
import ErrorPage from './pages/errorPage.js'

function App() {
    const appName = "jgmarry.me";
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <div id="main-container">
                    <Routes>
                        <Route basename={`/${appName}`} index path="/" element={<Home />} />
                        <Route basename={`/${appName}`} path="about" element={<About />} />
                        <Route basename={`/${appName}`} path="register" element={<Register />} />
                        <Route basename={`/${appName}`} path="signupFamily" element={<SignupFamily />} />
                        <Route basename={`/${appName}`} path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
