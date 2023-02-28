import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/App.css";
import Header from "./components/Header.js";
import configData from "./config.json";

import Home from "./pages/home.js";
import About from "./pages/about";
import Register from './pages/register.js';
import SignupFamily from './pages/signupFamily.js';
import ErrorPage from './pages/errorPage.js'

function App() {
    const appName = configData.APP_NAME;
    
    return (
        <BrowserRouter>
                <Header />
            <main className="main">
                <Routes>
                    <Route basename={`/${appName}`} index path="/" element={<Home />} />
                    <Route basename={`/${appName}`} path="about" element={<About />} />
                    <Route basename={`/${appName}`} path="register" element={<Register />} />
                    <Route basename={`/${appName}`} path="signupFamily" element={<SignupFamily />} />
                    <Route basename={`/${appName}`} path="*" element={<ErrorPage />} />
                </Routes>
            </main>
            <footer></footer>
        </BrowserRouter>
    );
}

export default App;
