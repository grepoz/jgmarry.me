import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/App.css";
import Navbar from "./components/Navbar.js";
import configData from "./config.json";

import Home from "./pages";
import About from "./pages/about.js";
import Login from './pages/login';
import SignupFamily from './pages/signupFamily.js';
import ErrorPage from './pages/errorPage.js'

function App() {
    const appName = configData.APP_NAME;
    
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <div id="main-container">
                    <Routes>
                        <Route basename={`/${appName}`} index path="/" element={<Home />} />
                        <Route basename={`/${appName}`} path="about" element={<About />} />
                        <Route basename={`/${appName}`} path="login" element={<Login />} />
                        <Route basename={`/${appName}`} path="signupFamily" element={<SignupFamily />} />
                        <Route basename={`/${appName}`} path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
