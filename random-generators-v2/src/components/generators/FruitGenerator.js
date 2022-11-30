import cl from "./FruitGenerator.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { fruitArray } from "../data/fruits.js";

const FruitGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomFruit, setRandomFruit] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomFruit("");
  };

  const fruitHandler = () => {
    const randomInt = Math.round(Math.random() * 28);
    setRandomFruit(fruitArray[randomInt]);
    setLogArray((item) => [...item, fruitArray[randomInt]]);
  };

  return (
    <div className={cl["inner-div"]} id="fruit">
      <h1 className={cl.header}>Fruit Generator</h1>
      <span className={cl.output}>{randomFruit || "?"}</span>
      <button className={cl.generate} onClick={fruitHandler}>
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
      {randomFruit && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default FruitGenerator;
