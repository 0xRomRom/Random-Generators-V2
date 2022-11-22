import cl from "./AppContainer.module.css";
import RandomModal from "./RandomModal.js";
import NumberGenerator from "../generators/NumberGenerator.js";
import LetterGenerator from "../generators/LetterGenerator.js";

const AppContainer = () => {
  return (
    <div className={cl["main-container"]}>
      <div className={cl["inner-container"]}>
        <RandomModal>
          <NumberGenerator />
        </RandomModal>
        <RandomModal>
          <LetterGenerator />
        </RandomModal>
        <RandomModal />
      </div>
    </div>
  );
};

export default AppContainer;
