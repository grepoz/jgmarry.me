import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFamily } from "../backend/database-helper/databaseUtils";
import { StatusCodes } from 'http-status-codes';
import "../styles/register.css"
import RegisterImg from "../img/my.png";

export default function Register() {

    let sanitizer = require("string-sanitizer");
    const PASSWORD_LENGTH = 6;
    const [isDisabled, setIsDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        setIsDisabled(true);
        let password = document.getElementById("registerPassword").value;

        if (password.length !== PASSWORD_LENGTH) {
            setErrorMessage("hasło ma dokładnie 6 znaków.");
            setIsDisabled(false);
            return;
        }

        let sanitized_password = sanitizer.sanitize.keepNumber(password);

        let family = await getFamily(sanitized_password);

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
        navigate("/signupFamily", { state });
    }



    return (
        <section className="register section" id="register">
            <h2 className="section-title">RSVP</h2>
			<span className="section-subtitle">Powiadom nas</span>

            <div className="register__container container grid">
                <img src={RegisterImg} alt="my" className="register__img"></img>
                <form className="register__form" onSubmit={handleSubmit} method="POST">
                    <label htmlFor="password"><p className="register__description">Podaj hasło z zaproszenia</p></label>
                    <input className="register__form-input" type={"password"} id="registerPassword" name="password" maxLength={PASSWORD_LENGTH}></input>
                    {(!errorMessage !== "") ? <span style={{ color: "red" }} ><div className="register__form-error">{errorMessage}</div></span> : <></>}
                    <input className="button button--flex" type="submit" value="Zaloguj się" disabled={isDisabled}></input>
                </form>
            </div>
        </section>
    )
}
