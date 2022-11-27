import cl from "./NFLGenerator.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Coins } from "../data/Coins";
import { footballTeams } from "../data/football";

const NFLGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomTeam, setRandomTeam] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomTeam("");
  };

  const teamHandler = () => {
    console.log(footballTeams.length);
    const randomInt = Math.round(Math.random() * 32);
    setRandomTeam(footballTeams[randomInt]);
    setLogArray((item) => [...item, footballTeams[randomInt]]);
  };

  return (
    <div className={cl["inner-div"]} id="nfl">
      <h1 className={cl.header}>NFL Team Generator</h1>
      <span className={cl.output}>{randomTeam || "?"}</span>
      <button className={cl.generate} onClick={teamHandler}>
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
      {randomTeam && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default NFLGenerator;
