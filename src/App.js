import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/App.css";
import Header from "./components/Header.js";

import Home from "./pages/home.js";
import About from "./pages/about";
import Info from "./pages/info";
import Signup from './pages/signup.js';
import Login from "pages/login";

function App() {

    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <Home />   
                <About /> 
                <Info />
                <Login />
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </main>
            <footer></footer>
        </BrowserRouter>
    );
}

export default App;
