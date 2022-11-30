import cl from "./SportsGenerator.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { sportsArray } from "../data/sports.js";

const SportsGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomSport, setRandomSport] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomSport("");
  };

  const sportsHandler = () => {
    const randomInt = Math.round(Math.random() * sportsArray.length - 1);
    setRandomSport(sportsArray[randomInt]);
    setLogArray((item) => [...item, sportsArray[randomInt]]);
  };

  return (
    <div className={cl["inner-div"]} id="sports">
      <h1 className={cl.header}>Sport Generator</h1>
      <span className={cl.output}>{randomSport || "?"}</span>
      <button className={cl.generate} onClick={sportsHandler}>
        Generate
      </button>
      <div className={cl["log-box"]}>
        <ul>
          {logArray.map((numbers, i) => {
            return (
              <li key={Math.random()}>
                {i + 1 + ": "}
                <a href={numbers}>{numbers}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {randomSport && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default SportsGenerator;
