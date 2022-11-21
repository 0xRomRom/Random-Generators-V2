import cl from "./RandomModal.module.css";

const RandomModal = (props) => {
  return <div className={cl["main-modal"]}>{props.children}</div>;
};

export default RandomModal;
