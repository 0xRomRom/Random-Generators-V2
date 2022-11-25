import cl from "./GameGenerator.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const GameGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [fetchObject, setFetchObject] = useState({});
  const [randomGame, setRandomGame] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomGame("");
  };

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=cf42e3bb5fbd48a691d516591b2fa9a5&page_size=40`
    )
      .then((response) => response.json())
      .then((data) => {
        setFetchObject(data);
      });
  });

  const gameHandler = () => {
    const randomInt = Math.round(Math.random() * 39);
    const reworkedString = fetchObject.results[randomInt].slug.replace(
      "-",
      " "
    );
    const finalString =
      reworkedString.charAt(0).toUpperCase() + reworkedString.slice(1);
    setRandomGame(finalString);
    setLogArray((item) => [...item, finalString]);
  };

  return (
    <div className={cl["inner-div"]} id="game">
      <h1 className={cl.header}>Game Generator</h1>
      <span className={cl.output}>{randomGame || "?"}</span>
      <button className={cl.generate} onClick={gameHandler}>
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
      {randomGame && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default GameGenerator;
