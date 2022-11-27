import cl from "./AppContainer3.module.css";
import RandomModal from "./RandomModal.js";
import NFLGenerator from "../generators/NFLGenerator";

const AppContainer3 = () => {
  return (
    <div className={cl["main-container"]}>
      <div className={cl["inner-container"]}>
        <RandomModal>
          <NFLGenerator />
        </RandomModal>
        <RandomModal></RandomModal>
        <RandomModal></RandomModal>
      </div>
    </div>
  );
};

export default AppContainer3;
