import cl from "./AppContainer.module.css";
import RandomModal from "./UI/RandomModal.js";

const AppContainer = () => {
  return (
    <div className={cl["main-container"]}>
      <div className={cl["inner-container"]}>
        <RandomModal>
          <p>Hi</p>
        </RandomModal>
        <RandomModal />
        <RandomModal />
      </div>
    </div>
  );
};

export default AppContainer;
