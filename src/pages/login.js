import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StatusCodes } from 'http-status-codes';
import "../styles/login.css"
import LoginImg from "../img/my.png";

async function loginFamily(password) {

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },// necessary ????
        body: JSON.stringify({ "password": password })
    };

    let result = await fetch("/login", requestOptions)
        .then(response => { return response.json(); })
        .catch(_ => { return StatusCodes.SERVICE_UNAVAILABLE; });

    return result;
}

export default function Login() {

    let sanitizer = require("string-sanitizer");
    const PASSWORD_LENGTH = 6;
    const [isDisabled, setIsDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        setIsDisabled(true);
        var password = document.getElementById("loginPassword").value;

        if (password.length !== PASSWORD_LENGTH) {
            setErrorMessage("hasło ma dokładnie 6 znaków.");
            setIsDisabled(false);
            return;
        }

        let sanitized_password = sanitizer.sanitize.keepNumber(password);

        let family = await loginFamily(sanitized_password);

        if (family === StatusCodes.NOT_FOUND) {
            setErrorMessage("nie znaleziono rodziny dla podanego hasła.");
            setIsDisabled(false);
            return;
        }

        if (family === StatusCodes.BAD_REQUEST || family === StatusCodes.SERVICE_UNAVAILABLE) {
            // jeśli dwie rodziny mają to samo hasło - wywala
            setErrorMessage("przepraszamy, wystąpił błąd serwera.");
            setIsDisabled(false);
            return;
        }

        setErrorMessage("");
        setIsDisabled(false);

        let state = { family: family };
        navigate("/signup", { state });
    }

    return (
        <section className="login section" id="login">
            <h2 className="section-title">RSVP</h2>
			<span className="section-subtitle">Powiadom nas</span>

            <div className="login__container container grid">
                <form className="login__form" onSubmit={handleSubmit} method="POST">
                    <label htmlFor="password"><p className="login__description">Podaj hasło z zaproszenia</p></label>
                    <input className="login__form-input" type={"password"} id="loginPassword" name="password" maxLength={PASSWORD_LENGTH}></input>
                    {(!errorMessage !== "") ? <span style={{ color: "red" }} ><div className="login__form-error">{errorMessage}</div></span> : <></>}
                    <input className="button button--flex" type="submit" value="Zaloguj się" disabled={isDisabled}></input>
                </form>
            </div>
        </section>
    )
}
