import React, { useState } from "react";
import Select from "react-select"
import { StatusCodes } from "http-status-codes";

async function updateFamily(family){
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(family)
    };

    let result = await fetch("/signup", requestOptions)
        .then(response => { return response.status; })
        .catch(_ => { return StatusCodes.SERVICE_UNAVAILABLE; });

    return result;
}

const DIETS = [
    { value: "podstawowa", label: "podstawowa" },
    { value: "wegetariańska", label: "wegetariańska" },
    { value: "wegańska", label: "wegańska" },
    { value: "bez laktozy", label: "bez laktozy" },
    { value: "bez glutenu", label: "bez glutenu" }
];

export default function Signup({family, onFamilyUpdate}) {

    const members = family.members;
    const [chosenDiets, setChosenDiets] = useState(() => setDiets());

    function setDiets() {
        let diets = {};

        for (let i = 0; i < members.length; i++) {
            diets[i] = { value: members[i].diet, label: members[i].diet };
        }
        return diets;
    }

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

        family.needs_accomodation = event.target["needsAccomodation"].checked;

        let result = await updateFamily(family);

        if (result === StatusCodes.NO_CONTENT) {
            onFamilyUpdate();
        }
        else if (result === StatusCodes.SERVICE_UNAVAILABLE || result === undefined) {
            alert("tymczasowe problemy z serwerem. spróbuj później.");
            // send mail here - set mail in .env (with controll to max 10 mails)
        }
        else {
            alert("spróbuj ponownie.");
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
                                        defaultChecked={member.has_confirmed}
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

                <label htmlFor={"needsAccomodation"}>Chcielibyśmy otrzymać zakwaterowanie</label>
                <input
                    type="checkbox"
                    name={"needsAccomodation"}
                    defaultChecked={family.needs_accomodation}
                />
                <br/>
                <input type="submit" value="Potwierdź"></input>
            </form>
        </div>
    );
}
