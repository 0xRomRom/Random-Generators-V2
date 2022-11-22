import cl from "./CoinTossGenerator.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import heads from "../UI/img/heads.png";
import tails from "../UI/img/tails.png";

const CoinTossGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomToss, setRandomToss] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomToss("");
  };

  const flipHandler = () => {
    const odds = Math.random();
    if (odds >= 0.5) {
      setRandomToss("Heads");
      setLogArray((toss) => [...toss, "Heads"]);
      return;
    }
    if (odds < 0.5) {
      setRandomToss("Tails");
      setLogArray((toss) => [...toss, "Tails"]);
    }
  };

  return (
    <div className={cl["inner-div"]}>
      <h1 className={cl.header}>Coin Toss Generator</h1>
      <span className={cl.output}>{randomToss || "?"}</span>
      <button className={cl.generate} onClick={flipHandler}>
        Toss
      </button>
      {randomToss && (
        <div className={cl["coin-output"]}>
          <img
            src={randomToss === "Heads" ? heads : tails}
            className={cl.img}
          />
        </div>
      )}

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

export default CoinTossGenerator;
