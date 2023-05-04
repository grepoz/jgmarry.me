import React, { Component } from "react";
import emailjs from '@emailjs/browser';
import MyPng from "../img/my.png";
import "../styles/header.css";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectionError: false,
            connectionErrorMessage: "There was an error. Please try again later."
        };
    }

    sendEmail = (errorMessage) => {
        var templateParams = {error: errorMessage};
        emailjs.send(
          'service_l4ygn7g', 
          'template_yg207g1', 
          templateParams,
          '1kPzQUU9Hkm0OMsas');
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        const errorMessage = error.message || "undefined error";
        this.sendEmail(errorMessage);
        console.log(`${this.state.connectionErrorMessage} Error: ${error}`);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{textAlign: "center"}}>
                    <h3>{`${this.state.connectionErrorMessage}`}</h3>
                    <a href="/" className="nav__link active-link">
                        <i className="uil uil-estate nav__icon"></i> 
                        <h1>Wróć do strony głównej</h1>
                    </a>
                    <img src={MyPng} alt="my" className="about__img"></img>
                </div>
            );
        }

        return this.props.children;
    }
}