import cl from "./ColorGenerator.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ColorGenerator = () => {
  const [logArray, setLogArray] = useState([]);
  const [randomColor, setRandomColor] = useState("");
  const deleteListHandler = () => {
    setLogArray([]);
    setRandomColor("");
  };

  const colorHandler = () => {
    const randomColor = `rgb(${Math.round(
      Math.random() * 255 + 1
    )}, ${Math.round(Math.random() * 255 + 1)}, ${Math.round(
      Math.random() * 255 + 1
    )})`;
    console.log(randomColor);
    setRandomColor(randomColor);
    setLogArray((color) => [...color, randomColor]);
  };

  return (
    <div className={cl["inner-div"]} id="color">
      <h1 className={cl.header}>Color Generator</h1>
      <span className={cl.output}>{randomColor || "?"}</span>
      <button className={cl.generate} onClick={colorHandler}>
        Generate
      </button>
      <div
        ref={(el) =>
          el &&
          el.style.setProperty("background-color", randomColor, "important")
        }
        className={cl["color-output"]}
      ></div>
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
      {randomColor && (
        <FontAwesomeIcon
          icon={faTrashCan}
          className={cl["delete-list"]}
          onClick={deleteListHandler}
        />
      )}
    </div>
  );
};

export default ColorGenerator;
