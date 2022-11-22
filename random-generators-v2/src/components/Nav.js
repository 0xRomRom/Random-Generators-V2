import cl from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={cl.nav}>
      <li className={cl["header-text"]}>Random Generators</li>
      <li>Number</li>
      <li>Letter</li>
      <li>Word</li>
      <li>Country</li>
      <li>Color</li>
      <li>Coin Toss</li>
    </ul>
  );
};

export default Nav;
