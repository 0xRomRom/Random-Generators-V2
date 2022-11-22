import cl from "./WordGenerator.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const words = require("an-array-of-english-words");

const WordGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomWord, setRandomWord] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
  };

  const wordHandler = () => {
    const randomWord = Math.round(Math.random() * 274937);
    const resultWord =
      words[randomWord].charAt(0).toUpperCase() + words[randomWord].slice(1);
    setRandomWord(resultWord);
    setLogArray((word) => [...word, resultWord]);
  };

  return (
    <div className={cl["inner-div"]}>
      <h1 className={cl.header}>Word Generator</h1>
      <span className={cl.output}>{randomWord || "?"}</span>
      <button className={cl.generate} onClick={wordHandler}>
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

export default WordGenerator;
