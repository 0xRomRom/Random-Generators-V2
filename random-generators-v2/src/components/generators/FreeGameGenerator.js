import cl from "./FreeGameGenerator.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { gamesArray } from "../data/freegames";

const FreeGameGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomGame, setRandomGame] = useState("");
  const [currentURL, setCurrentURL] = useState([]);
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomGame("");
    setCurrentURL([]);
  };

  const gameHandler = () => {
    const randomInt = Math.round(Math.random() * 370);
    setRandomGame(gamesArray[randomInt].title);
    setCurrentURL((item) => [...item, gamesArray[randomInt].game_url]);
    setLogArray((item) => [...item, gamesArray[randomInt].title]);
  };

  return (
    <div className={cl["inner-div"]} id="nfl">
      <h1 className={cl.header}>Free To Play Game Generator</h1>
      <span className={cl.output}>{randomGame || "?"}</span>
      <button className={cl.generate} onClick={gameHandler}>
        Generate
      </button>
      <div className={cl["log-box"]}>
        <ul className={cl["flex-list"]}>
          <li className={cl.left}>
            {logArray.map((numbers, i) => {
              return (
                <li key={Math.random()}>
                  {i + 1 + ": "}
                  {numbers.slice(0, 25)}
                  <br />
                </li>
              );
            })}
          </li>
          <li className={cl.right}>
            {currentURL.map((item) => {
              return (
                <li key={Math.random()}>
                  <a href={item} target="_blank" rel="noreferrer">
                    {item}
                  </a>
                </li>
              );
            })}
          </li>
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

export default FreeGameGenerator;
