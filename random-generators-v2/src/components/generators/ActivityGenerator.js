import cl from "./ActivityGenerator.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ActivityGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomActivity, setRandomActivity] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomActivity("");
  };

  const activityHandler = async () => {
    const fetcher = await fetch(`https://www.boredapi.com/api/activity`);
    const data = await fetcher.json();
    console.log(data);
    setRandomActivity(data.activity);
    setLogArray((item) => [...item, data.activity]);
  };

  return (
    <div className={cl["inner-div"]} id="nfl">
      <h1 className={cl.header}>Random Activity Generator</h1>
      <span className={cl.output}>{randomActivity || "?"}</span>
      <button className={cl.generate} onClick={activityHandler}>
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
      {randomActivity && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default ActivityGenerator;
