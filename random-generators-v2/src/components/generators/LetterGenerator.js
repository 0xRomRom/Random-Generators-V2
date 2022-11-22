import cl from "./LetterGenerator.module.css";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const LetterGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomLetter, setRandomLetter] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomLetter("");
  };

  const letterHandler = () => {
    const randomInt = Math.round(Math.random() * 25);
    setRandomLetter(alphabet[randomInt]);
    setLogArray((item) => [...item, alphabet[randomInt]]);
  };

  return (
    <div className={cl["inner-div"]}>
      <h1 className={cl.header}>Letter Generator</h1>
      <span className={cl.output}>{randomLetter || "?"}</span>
      <button className={cl.generate} onClick={letterHandler}>
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
      <FontAwesomeIcon
        icon={faTrashCan}
        className={cl["delete-list"]}
        onClick={deleteListHandler}
      />
    </div>
  );
};

export default LetterGenerator;
