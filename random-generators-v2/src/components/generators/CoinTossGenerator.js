import cl from "./CoinTossGenerator.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import heads from "../UI/img/heads.png";
import tails from "../UI/img/tails.png";

const CoinTossGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomToss, setRandomToss] = useState("");
  const [tossedCount, setTossedCount] = useState(0);
  const [headsPercent, setHeadPercent] = useState("");
  const [tailsPercent, setTailsPercent] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomToss("");
    setTossedCount(0);
  };

  useEffect(() => {
    let heads = 0;
    let tails = 0;
    logArray.map((item) => {
      if (item === "Heads") {
        heads += 1;
      }
      if (item === "Tails") {
        tails += 1;
      }
    });
    const headsPercentage = (heads / tossedCount) * 100;
    const tailsPercentage = (tails / tossedCount) * 100;
    console.log(Math.round(headsPercentage) + "%");
    console.log(Math.round(tailsPercentage) + "%");
    setHeadPercent("Heads: " + Math.round(headsPercentage) + "%");
    setTailsPercent("Tails: " + Math.round(tailsPercentage) + "%");
  }, [logArray]);

  const flipHandler = () => {
    const odds = Math.random();
    setTossedCount((prevCount) => prevCount + 1);
    if (odds >= 0.5) {
      setRandomToss("Heads");
      setLogArray((toss) => [...toss, "Heads"]);
      return;
    }
    if (odds < 0.5) {
      setRandomToss("Tails");
      setLogArray((toss) => [...toss, "Tails"]);
    }
  };

  return (
    <div className={cl["inner-div"]}>
      <h1 className={cl.header}>Coin Toss Generator</h1>
      <span className={cl.output}>{randomToss || "?"}</span>
      <button className={cl.generate} onClick={flipHandler}>
        Toss
      </button>
      {tossedCount > 0 ? (
        <div className={cl["perc-box"]}>
          <span>{headsPercent}</span>
          <span>{tailsPercent}</span>{" "}
        </div>
      ) : null}

      {randomToss && (
        <div className={cl["coin-output"]}>
          <img
            src={randomToss === "Heads" ? heads : tails}
            className={cl.img}
            alt="Heads or tails game"
          />
          <span className={cl.tossed}>x{tossedCount}</span>
        </div>
      )}
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
      {randomToss && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default CoinTossGenerator;
