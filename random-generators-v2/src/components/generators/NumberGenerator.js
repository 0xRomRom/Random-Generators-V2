import cl from "./NumberGenerator.module.css";
import React, { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const NumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState("");
  const [logArray, setLogArray] = useState([]);
  const lowInput = useRef(0);
  const highInput = useRef(0);

  const calculateAdditional = () => {
    if (+lowInput.current.value === 0 && highInput.current.value === "") {
      const randomInteger = Math.round(Math.random() * 10000);
      setRandomNumber(randomInteger);
      setLogArray((number) => [...number, randomInteger]);
      return;
    }

    if (+lowInput.current.value < +highInput.current.value) {
      const minInt = +lowInput.current.value;
      const maxInt = +highInput.current.value;
      const calculate = Math.round(Math.random() * (maxInt - minInt) + minInt);
      setRandomNumber(calculate);
      setLogArray((number) => [...number, calculate]);
      return;
    }
  };

  const calculateHandler = () => {
    if (+highInput.current.value !== "") {
      calculateAdditional();
      return;
    }
    const randomInteger = Math.round(Math.random() * 1000);
    setRandomNumber(randomInteger);
    setLogArray((number) => [...number, randomInteger]);
  };

  const deleteListHandler = () => {
    setLogArray([]);
    setRandomNumber("");
  };

  return (
    <div className={cl["inner-div"]}>
      <h1 className={cl.header}>Number Generator</h1>
      <span className={cl.output}>{randomNumber || "?"}</span>
      <button className={cl.generate} onClick={calculateHandler}>
        Generate
      </button>
      <div className={cl["input-box"]}>
        <span className={cl["input-span"]}>From</span>
        <input
          type="text"
          className={cl.input}
          ref={lowInput}
          defaultValue={0}
        ></input>
        <span className={cl["input-span"]}>To</span>
        <input
          type="text"
          className={cl.input2}
          ref={highInput}
          defaultValue={1000}
        ></input>
      </div>

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

export default NumberGenerator;
