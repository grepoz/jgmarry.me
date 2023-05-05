import React, { useState } from "react";
import Select from "react-select"
import { StatusCodes } from "http-status-codes";
import "../styles/signup.css"

async function updateFamily(family){
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(family)
    };

    const BACKEND_URL = "https://us-central1-wedding-41b3e.cloudfunctions.net";
    
    let result = await fetch(`${BACKEND_URL}/signup`, requestOptions)
        .then(response => { return response.status; })
        .catch(_ => { return StatusCodes.SERVICE_UNAVAILABLE; });

    console.log(`\n ======= While updating family, backend response was: ${result} ======= \n`);

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
      <div className="signup__container container">
        <form onSubmit={handleSubmit} method="POST">
          <div className="signup__grid">
            <div className="signup__grid-title">Gość</div>
            <div className="signup__grid-title">Obecność</div>
            <div className="signup__grid-title">Dieta</div>
            {members.map((member, i) => (
              <React.Fragment key={i}>
                <div>{member.name}</div>

                <div>
                  <label className="toggler-wrapper style-25">
                    <input
                      type="checkbox"
                      name={`hasConfirmed${i}`}
                      defaultChecked={member.has_confirmed}
                      id={i}
                    />
                    <div className="toggler-slider">
                      <div className="toggler-knob"></div>
                    </div>
                  </label>
                </div>

                <div>
                  <Select
                    value={chosenDiets[i]}
                    options={DIETS}
                    onChange={(e) => handleSelect(e, i)}
                    placeholder={"Wybierz dietę..."}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="centered-content">
            <div className="signup__table-title">
              Chcielibyśmy otrzymać zakwaterowanie
            </div>
            <div>
              <label className="toggler-wrapper style-25">
                <input
                  type="checkbox"
                  name={"needsAccomodation"}
                  defaultChecked={family.needs_accomodation}
                />
                <div className="toggler-slider">
                  <div className="toggler-knob"></div>
                </div>
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Wyślij"
            className="signup__button button"
          ></input>
        </form>
      </div>
  );
}
