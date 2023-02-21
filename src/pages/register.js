import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFamily } from "../backend/database-helper/databaseUtils";
import { StatusCodes } from 'http-status-codes';

export default function Register() {

    var sanitizer = require("string-sanitizer");
    const PASSWORD_LENGTH = 6;
    const [isDisabled, setIsDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        setIsDisabled(true);
        var password = document.getElementById("registerPassword").value;

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
            
            <div className="tlo">
                <img 
                src="./img/tlo.png"
                alt="dwie dziewiatki rzymskie" />
            </div>

            <div className="login-p">
                <div className="three-col"> 
                    <div className="exp">
                        <div className="napisy_boczne_j">julia</div>
                    </div>
                    <div>
                        <div>
                            <img 
                            src="./img/zaloguj sie2.png" 
                            alt="zalogujsie2" 
                            className="login2" />
                        </div>
                        <div className="home-info">
                            <div><p>potwierdź nam swoją obecnosć</p></div>
                            <div className="grey-bg">
                                <div className="ankieta"> 
                                    <div><h3>zaloguj się</h3></div>
                                    <div className="login-action">
                                        <form onSubmit={handleSubmit} method="POST">
                                            <label htmlFor="password">Podaj hasło</label>
                                            <input type={"password"} id="registerPassword" name="password" maxLength={PASSWORD_LENGTH}></input>
                                            {(!errorMessage !== "") ? <span style={{ color: "red" }}><div>{errorMessage}</div></span> : <></>}
                                            <input type="submit" value="Register" disabled={isDisabled}></input>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <h5>Użyj hasła podanego na zaproszeniu</h5>
                        </div>
                    </div>
                    <div className="exp">
                        <div className="napisy_boczne_g"><div className="none">0</div> grześ</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
