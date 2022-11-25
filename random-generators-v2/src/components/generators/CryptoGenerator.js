import cl from "./CryptoGenerator.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CryptoGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [fetchObject, setFetchObject] = useState({});
  const [fetched, setFetched] = useState(false);
  const [randomCoin, setRandomCoin] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomCoin("");
  };

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/list?include_platform=true`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFetchObject(data);
        setFetched(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetched]);

  const coinHandler = () => {
    const randomInt = Math.round(Math.random() * 12000);
    setRandomCoin(fetchObject[randomInt].id);
    setLogArray((item) => [...item, randomCoin]);
  };

  return (
    <div className={cl["inner-div"]} id="game">
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
