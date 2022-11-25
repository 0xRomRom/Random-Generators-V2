import cl from "./NameGenerator.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import femaleNames from "../data/femaleArray.js";
import maleNames from "../data/maleArray.js";

const NameGenerator = () => {
  const [logFemaleArray, setLogFemaleArray] = useState([]);
  const [logMaleArray, setLogMaleArray] = useState([]);
  const [randomFemaleName, setRandomFemaleName] = useState("");
  const [randomMaleName, setRandomMaleName] = useState("");
  const [sexChange, setSexChange] = useState(false);

  const deleteFemaleListHandler = () => {
    setLogFemaleArray([]);
    setRandomFemaleName("");
  };

  const deleteMaleListHandler = () => {
    setLogMaleArray([]);
    setRandomMaleName("");
  };

  const nameHandler = () => {
    if (!sexChange) {
      const randomInt = Math.round(Math.random() * 17652);
      setRandomFemaleName(femaleNames[randomInt]);
      setLogFemaleArray((name) => [...name, femaleNames[randomInt]]);
      return;
    }
    if (sexChange) {
      const randomInt = Math.round(Math.random() * 12111);
      setRandomMaleName(maleNames[randomInt]);
      setLogMaleArray((name) => [...name, maleNames[randomInt]]);
    }
  };

  const sexHandler = () => {
    if (sexChange) {
      setSexChange(false);
      return;
    }
    setSexChange(true);
  };

  return (
    <div className={cl["inner-div"]} id="name">
      <h1 className={cl.header}>Name Generator</h1>
      {!sexChange && (
        <span className={cl.output}>{randomFemaleName || "?"}</span>
      )}
      {sexChange && <span className={cl.output}>{randomMaleName || "?"}</span>}

      <button className={cl.generate} onClick={nameHandler}>
        Generate
      </button>
      <div className={cl["sex-toggle"]} onClick={sexHandler}>
        <div className={cl.overlay}></div>
        <div className={cl.femaleMale}>
          <span
            className={!sexChange ? cl.white : cl.span1}
            style={{ backgroundColor: !sexChange ? "white" : "transparent" }}
          >
            Female
          </span>
          <span
            className={sexChange ? cl.white : cl.span2}
            style={{ backgroundColor: sexChange ? "white" : "transparent" }}
          >
            Male
          </span>
        </div>
      </div>
      {!sexChange && (
        <div className={cl["log-box"]}>
          <ul>
            {logFemaleArray.map((numbers, i) => {
              return (
                <li key={Math.random()}>
                  {i + 1 + ": "}
                  {numbers}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {randomFemaleName.length > 0 && !sexChange ? (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteFemaleListHandler}
        />
      ) : null}
      {sexChange && (
        <div className={cl["log-box"]}>
          <ul>
            {logMaleArray.map((numbers, i) => {
              return (
                <li key={Math.random()}>
                  {i + 1 + ": "}
                  {numbers}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {randomMaleName.length > 0 && sexChange ? (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteMaleListHandler}
        />
      ) : null}
    </div>
  );
};

export default NameGenerator;
