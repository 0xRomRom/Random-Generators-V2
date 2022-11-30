import cl from "./AppContainer5.module.css";
import RandomModal from "./RandomModal.js";
import FruitGenerator from "../generators/FruitGenerator";

const AppContainer5 = () => {
  return (
    <div className={cl["main-container"]}>
      <div className={cl["inner-container"]}>
        <RandomModal>
            <FruitGenerator />
        </RandomModal>
        <RandomModal>
        </RandomModal>
        <RandomModal>
        </RandomModal>
      </div>
    </div>
  );
};

export default AppContainer5;
