import cl from "./NameGenerator.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import femaleNames from "../data/femaleArray.js";
import maleNames from "../data/maleArray.js";

const NameGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomName, setRandomName] = useState("");
  const [sexChange, setSexChange] = useState(false);

  const deleteListHandler = () => {
    setLogArray([]);
    setRandomName("");
  };

  const nameHandler = () => {
    if (!sexChange) {
      const randomInt = Math.round(Math.random() * 17652);
      setRandomName(femaleNames[randomInt]);
      setLogArray((name) => [...name, femaleNames[randomInt]]);
      return;
    }
    if (sexChange) {
      const randomInt = Math.round(Math.random() * 12111);
      setRandomName(maleNames[randomInt]);
      setLogArray((name) => [...name, maleNames[randomInt]]);
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
    <div className={cl["inner-div"]}>
      <h1 className={cl.header}>Name Generator</h1>
      <span className={cl.output}>{randomName || "?"}</span>
      <button className={cl.generate} onClick={nameHandler}>
        Generate
      </button>
      <div className={cl["sex-toggle"]} onClick={sexHandler}>
        <div className={cl.overlay}></div>
        <div className={cl.femaleMale}>
          <span
            className={cl.span}
            style={{ backgroundColor: !sexChange ? "black" : "transparent" }}
          >
            Female
          </span>
          <span
            className={cl.span}
            style={{ backgroundColor: sexChange ? "black" : "transparent" }}
          >
            Male
          </span>
        </div>
      </div>
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
      {randomName && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default NameGenerator;
