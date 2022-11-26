import cl from "./CryptoGenerator.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Coins } from "../data/Coins";

const CryptoGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const fetchObject = Coins;
  const [randomCoin, setRandomCoin] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomCoin("");
  };

  const coinHandler = () => {
    const randomInt = Math.round(Math.random() * 12000);
    const newString =
      fetchObject[randomInt].id.charAt(0).toUpperCase() +
      fetchObject[randomInt].id.slice(1);
    const finalString = newString.replaceAll("-", " ");
    setRandomCoin(finalString);
    setLogArray((item) => [...item, finalString]);
  };

  return (
    <div className={cl["inner-div"]} id="crypto">
      <h1 className={cl.header}>Crypto Generator</h1>
      <span className={cl.output}>{randomCoin || "?"}</span>
      <button className={cl.generate} onClick={coinHandler}>
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
      {randomCoin && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default CryptoGenerator;
