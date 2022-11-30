import cl from "./WebsiteGenerator.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { websitesArray } from "../data/websites.js";

const WebsiteGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomWebsite, setRandomWebsite] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomWebsite("");
  };

  const websiteHandler = () => {
    const randomInt = Math.round(Math.random() * websitesArray.length - 1);
    setRandomWebsite(websitesArray[randomInt]);
    setLogArray((item) => [...item, websitesArray[randomInt]]);
  };

  return (
    <div className={cl["inner-div"]} id="fruit">
      <h1 className={cl.header}>Website Generator</h1>
      <span className={cl.output}>{randomWebsite || "?"}</span>
      <button className={cl.generate} onClick={websiteHandler}>
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
      {randomWebsite && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default WebsiteGenerator;
