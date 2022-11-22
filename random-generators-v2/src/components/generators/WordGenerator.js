import cl from "./WordGenerator.module.css";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const words = require("an-array-of-english-words");

const WordGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomWord, setRandomWord] = useState("");
  const includeRef = useRef("");

  const deleteListHandler = () => {
    setLogArray([]);
    setRandomWord("");
  };

  const wordHandler = () => {
    const randomWord = Math.round(Math.random() * 274937);
    if (includeRef.current.value !== "") {
      const userWord = new RegExp(includeRef.current.value, "i");
      const filteredWords = words.filter((d) => userWord.test(d));
      const randomWords = Math.round(Math.random() * filteredWords.length);
      const resultWord =
        filteredWords[randomWords].charAt(0).toUpperCase() +
        filteredWords[randomWords].slice(1);
      setRandomWord(resultWord);
      setLogArray((word) => [...word, resultWord]);
      return;
    }

    const resultWord =
      words[randomWord].charAt(0).toUpperCase() + words[randomWord].slice(1);
    console.log(resultWord);
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
      <div className={cl["includes-box"]}>
        <span className={cl.include}>Includes</span>
        <input
          type="text"
          className={cl.input}
          defaultValue={""}
          ref={includeRef}
        ></input>
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
      {randomWord && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default WordGenerator;
