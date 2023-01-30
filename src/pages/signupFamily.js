import React, { useState } from "react";
import Select from "react-select"
import { useLocation } from "react-router-dom";
import { updateFamily } from "../backend/database-helper/databaseUtils";
import { StatusCodes } from "http-status-codes";

export default function SignupFamily() {

    let location = useLocation();
    let family = location.state.family;
    const members = family.members;
    const DIETS = [
        { value: "podstawowa", label: "podstawowa" },
        { value: "wegetariańska", label: "wegetariańska" },
        { value: "wegańska", label: "wegańska" },
        { value: "bez laktozy", label: "bez laktozy" },
        { value: "bez glutenu", label: "bez glutenu" }
    ];

    function setDefaultDiets() {
        let diets = {};

        for (let i = 0; i < members.length; i++) {
            diets[i] = DIETS[0];
        }
        return diets;
    }

    const [chosenDiets, setChosenDiets] = useState(() => setDefaultDiets());

    function handleSelect(guestChoice, i) {
        let diets = { ...chosenDiets };
        diets[i] = guestChoice;
        setChosenDiets(diets);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        for (let i = 0; i < members.length; i++) {
            family.members[i].has_confirmed = event.target[`hasConfirmed${i}`].checked;
            family.members[i].diet = chosenDiets[i].value;
        }

        family.needs_accomodation = event.target['needsAccomodation'].checked;

        let result = await updateFamily(family);
        if (result === StatusCodes.OK) {
            alert("zapisano!");
        }
        else if (result === StatusCodes.SERVICE_UNAVAILABLE) {
            alert("tymczasowe problemy z serwerem. spróbuj później.");
            // send mail here - set mail in .env
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} method="POST">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>gosc</th>
                            <th>obecny</th>
                            <th>dieta</th>
                        </tr>
                    </thead>
                    <tbody>

                        {members.map((member, i) =>
                            <tr key={i}>
                                <td>
                                    {member.name}
                                </td>

                                <td>
                                    <input
                                        type="checkbox"
                                        name={`hasConfirmed${i}`}
                                        value={member.has_confirmed}  // czy potrzebne???
                                        id={i}
                                    />
                                </td>
                                
                                <td>
                                    <Select
                                        value={chosenDiets[i]}
                                        options={DIETS}
                                        onChange={(e) => handleSelect(e, i)}
                                        placeholder={"Wybierz dietę..."}
                                    />
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>

                <label htmlFor={'needsAccomodation'}>Chcielibyśmy otrzymać zakwaterowanie</label>
                <input
                    type="checkbox"
                    name={'needsAccomodation'}
                />

                <input type="submit" value="Potwierdź"></input>
            </form>

        </div>
    );
}
