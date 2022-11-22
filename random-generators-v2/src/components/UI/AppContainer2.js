import cl from "./AppContainer2.module.css";
import RandomModal from "./RandomModal.js";
import CountryGenerator from "../generators/CountryGenerator";
import ColorGenerator from "../generators/ColorGenerator";
import CoinTossGenerator from "../generators/CoinTossGenerator";

const AppContainer2 = () => {
  return (
    <div className={cl["main-container"]}>
      <div className={cl["inner-container"]}>
        <RandomModal>
          <CountryGenerator />
        </RandomModal>
        <RandomModal>
          <ColorGenerator />
        </RandomModal>
        <RandomModal>
          <CoinTossGenerator />
        </RandomModal>
      </div>
    </div>
  );
};

export default AppContainer2;
