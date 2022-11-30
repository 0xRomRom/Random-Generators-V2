import cl from "./AppContainer5.module.css";
import RandomModal from "./RandomModal.js";
import FruitGenerator from "../generators/FruitGenerator";
import WebsiteGenerator from "../generators/WebsiteGenerator";
import SportsGenerator from "../generators/SportsGenerator";

const AppContainer5 = () => {
  return (
    <div className={cl["main-container"]}>
      <div className={cl["inner-container"]}>
        <RandomModal>
          <FruitGenerator />
        </RandomModal>
        <RandomModal>
          <WebsiteGenerator />
        </RandomModal>
        <RandomModal>
          <SportsGenerator />
        </RandomModal>
      </div>
    </div>
  );
};

export default AppContainer5;
