import React, { useState } from "react";
import { StatusCodes } from 'http-status-codes';
import "../styles/login.css"
import Signup from "../components/signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function loginFamily(password) {

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "password": password })
    };

    const BACKEND_URL = "https://us-central1-wedding-41b3e.cloudfunctions.net";

    let result = await fetch(`${BACKEND_URL}/login`, requestOptions)
        .then(response => { return response; })
        .catch(_ => {
            result.status = StatusCodes.SERVICE_UNAVAILABLE;
            return result; });

    if (result.status === StatusCodes.OK){
        return result.json();
    }
    else{
        console.log(`\n ======= While logging backend respond with status: ${result.status} ======= \n`);

        return result.status;
    }
}

function isClientOrServerError(statusCode) {
    const statusCodeString = statusCode.toString();
    const firstChar = statusCodeString.charAt(0);
    return firstChar === '4' || firstChar === '5';
  }

export default function Rsvp() {

    const PASSWORD_LENGTH = 6;
    let sanitizer = require("string-sanitizer");

    const [isDisabled, setIsDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [family, setFamily] = useState({});

    const notify = () => toast("Dziękujemy za wysłanie potwierdzenia!");
    
    function handleFamilyUpdate() {
        setIsLoggedIn(false);
        notify();
      }

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
        }
        if (family === StatusCodes.UNAUTHORIZED) {
            setErrorMessage("nieprawidłowe hasło.");
            setIsDisabled(false);
        }
        else if (isClientOrServerError(family)) {
            // jeśli dwie rodziny mają to samo hasło - wywala
            setErrorMessage("przepraszamy, wystąpił błąd serwera.");
            setIsDisabled(false);
        }
        else if (family !== undefined && "members" in family) {
            setErrorMessage("");
            setIsDisabled(false);

            setIsLoggedIn(true);
            setFamily(family);
        }
    }

    return (
        <section className="login section" id="login">
            <h2 className="section-title">RSVP</h2>
            <span className="section-subtitle">Powiadom nas</span>
            {isLoggedIn ? 
            <>
                <Signup
                    family={family}
                    onFamilyUpdate={handleFamilyUpdate}
                />
            </>
            : 
            <>
                <div className={`login__container container disabled`}>
                    <form className="login__form" onSubmit={handleSubmit} method="POST">
                        <label htmlFor="password"><p className="login__description">Podaj hasło z zaproszenia</p></label>
                        <input className="login__form-input" type={"password"} id="loginPassword" name="password" maxLength={PASSWORD_LENGTH}></input>
                        {(!errorMessage !== "") ? <span style={{ color: "red" }} ><div className="login__form-error">{errorMessage}</div></span> : <></>}
                        <input className="button button--flex" type="submit" value="Zaloguj się" disabled={isDisabled}></input>
                    </form>
                </div>
            </>}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            
        </section>
    )
}
