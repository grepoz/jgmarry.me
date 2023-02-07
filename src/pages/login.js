import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFamily } from "../old-backend/database-helper/databaseUtils";
import { StatusCodes } from 'http-status-codes';

async function loginFamily() {

    const password = "";
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },// necessary ????
        body: JSON.stringify(password)
    };

    let result = await fetch("/login", requestOptions)
        .then(_ => alert("We will email you when process is finished :)"))
        .catch(error => alert(`There was an error: ${error}. Try again later.`));

    return result;
}

export default function Login() {

    var sanitizer = require("string-sanitizer");
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

        var sanitized_password = sanitizer.sanitize.keepNumber(password);

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
        <div>
            <form onSubmit={handleSubmit} method="POST">
                <label htmlFor="password">Podaj hasło</label>
                <input type={"password"} id="loginPassword" name="password" maxLength={PASSWORD_LENGTH}></input>
                {(!errorMessage !== "") ? <span style={{ color: "red" }}><div>{errorMessage}</div></span> : <></>}
                <input type="submit" value="Login" disabled={isDisabled}></input>
            </form>
        </div>
    )
}
