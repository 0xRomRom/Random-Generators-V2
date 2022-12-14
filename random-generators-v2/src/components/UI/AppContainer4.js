import cl from "./AppContainer4.module.css";
import RandomModal from "./RandomModal.js";
import NFLGenerator from "../generators/NFLGenerator";
import FreeGameGenerator from "../generators/FreeGameGenerator";
import ActivityGenerator from "../generators/ActivityGenerator";

const AppContainer4 = () => {
  return (
    <div className={cl["main-container"]}>
      <div className={cl["inner-container"]}>
        <RandomModal>
          <NFLGenerator />
        </RandomModal>
        <RandomModal>
          <FreeGameGenerator />
        </RandomModal>
        <RandomModal>
          <ActivityGenerator />
        </RandomModal>
      </div>
    </div>
  );
};

export default AppContainer4;
