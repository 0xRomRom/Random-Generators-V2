import cl from "./AppContainer2.module.css";
import RandomModal from "./RandomModal.js";
import CountryGenerator from "../generators/CountryGenerator";

const AppContainer2 = () => {
  return (
    <div className={cl["main-container"]}>
      <div className={cl["inner-container"]}>
        <RandomModal>
          <CountryGenerator />
        </RandomModal>
        <RandomModal></RandomModal>
        <RandomModal></RandomModal>
      </div>
    </div>
  );
};

export default AppContainer2;
