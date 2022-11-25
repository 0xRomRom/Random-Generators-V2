import cl from "./CountryGenerator.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { country_list } from "../data/countryList";

const CountryGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomCountry, setRandomCountry] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomCountry("");
  };

  const countryHandler = () => {
    const randomInt = Math.round(Math.random() * 205);
    setRandomCountry(country_list[randomInt]);
    setLogArray((country) => [...country, country_list[randomInt]]);
  };

  return (
    <div className={cl["inner-div"]} id="country">
      <h1 className={cl.header}>Country Generator</h1>
      <span className={cl.output}>{randomCountry || "?"}</span>
      <button className={cl.generate} onClick={countryHandler}>
        Generate
      </button>
      <div className={cl["log-box"]}>
        <ul>
          {logArray.map((numbers, i) => {
            return (
              <li key={Math.random()}>
                {i + 1 + ": "}
                {numbers}
              </li>
            );
          })}
        </ul>
      </div>
      {randomCountry && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default CountryGenerator;
