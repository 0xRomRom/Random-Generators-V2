import cl from "./AppContainer3.module.css";
import RandomModal from "./RandomModal.js";
import NameGenerator from "../generators/NameGenerator";
import AverageGenerator from "../generators/AverageGenerator";

const AppContainer3 = () => {
  return (
    <div className={cl["main-container"]}>
      <div className={cl["inner-container"]}>
        <RandomModal>
          <NameGenerator />
        </RandomModal>
        <RandomModal>
          <AverageGenerator />
        </RandomModal>
        <RandomModal></RandomModal>
      </div>
    </div>
  );
};

export default AppContainer3;
