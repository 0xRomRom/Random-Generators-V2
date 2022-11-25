import cl from "./AverageGenerator.module.css";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const AverageGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [average, setAverage] = useState("");
  const inputRef = useRef("");

  const deleteListHandler = () => {
    setLogArray([]);
    inputRef.current.value = "";
    setAverage("");
  };

  const generateAverage = () => {
    if (inputRef.current.value === "") return;
    const avgTxt = inputRef.current.value;
    const avgArray = avgTxt.split(",");
    let totalCount = 0;
    avgArray.map((item) => {
      return (totalCount += +item);
    });
    setAverage(totalCount / avgArray.length);
    setLogArray((item) => [...item, totalCount / avgArray.length]);
  };

  return (
    <div className={cl["inner-div"]} id="average">
      <h1 className={cl.header}>Average Number Generator</h1>
      <span className={cl.output}>{average || "?"}</span>
      <button className={cl.generate} onClick={generateAverage}>
        Generate
      </button>
      <input
        type="text"
        className={cl.input}
        placeholder={"35, 17, 3"}
        ref={inputRef}
      />
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
      {average && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default AverageGenerator;
