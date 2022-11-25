import cl from "./Nav.module.css";
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <ul className={cl.nav}>
      <Link to="top" spy={true} smooth={true} offset={-70} duration={500}>
        <li className={cl["header-text"]}>Random Generators</li>
      </Link>
      <Link to="number" spy={true} smooth={true} offset={-70} duration={500}>
        <li>Number</li>
      </Link>
      <Link to="letter" spy={true} smooth={true} offset={-70} duration={500}>
        <li>Letter</li>
      </Link>
      <Link to="word" spy={true} smooth={true} offset={-70} duration={500}>
        <li>Word</li>
      </Link>
      <Link to="country" spy={true} smooth={true} offset={-70} duration={500}>
        <li>Country</li>
      </Link>
      <Link to="color" spy={true} smooth={true} offset={-70} duration={500}>
        <li>Color</li>
      </Link>
      <Link to="toss" spy={true} smooth={true} offset={-70} duration={500}>
        <li>Coin Toss</li>
      </Link>
      <Link to="name" spy={true} smooth={true} offset={-70} duration={500}>
        <li>Name</li>
      </Link>
      <Link to="average" spy={true} smooth={true} offset={-70} duration={500}>
        <li>Average</li>
      </Link>
      <Link to="game" spy={true} smooth={true} offset={-70} duration={500}>
        <li>Game</li>
      </Link>
    </ul>
  );
};

export default Nav;
