import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/App.css";
import Header from "./components/Header.js";
import configData from "./config.json";

import Home from "./pages/home.js";
import About from "./pages/about";
import Info from "./pages/info";
import SignupFamily from './pages/signupFamily.js';
import Login from "pages/login";

function App() {
    const appName = configData.APP_NAME;
    
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <Home />   
                <About /> 
                <Info />
                <Login />
                <Routes>
                    <Route basename={`/${appName}`} path="signupFamily" element={<SignupFamily />} />
                </Routes>
            </main>
            <footer></footer>
        </BrowserRouter>
    );
}

export default App;
