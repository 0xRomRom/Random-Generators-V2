import cl from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={cl.nav}>
      <a href="#top">
        <li className={cl["header-text"]}>Random Generators</li>
      </a>
      <a href="#number">
        <li>Number</li>
      </a>
      <a href="#letter">
        <li>Letter</li>
      </a>
      <a href="#word">
        <li>Word</li>
      </a>
      <a href="#country">
        <li>Country</li>
      </a>
      <a href="#color">
        <li>Color</li>
      </a>
      <a href="#toss">
        <li>Coin Toss</li>
      </a>
      <a href="#name">
        <li>Name</li>
      </a>
      <a href="#average">
        <li>Average</li>
      </a>
      <a href="#game">
        <li>Game</li>
      </a>
    </ul>
  );
};

export default Nav;
