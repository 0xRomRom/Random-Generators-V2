import cl from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <ul className={cl.list}>
      <Link to="/about" className={cl.item}>
        About
      </Link>
      <Link to="/contact" className={cl.item}>
        Contact us
      </Link>
      <Link to="/terms" className={cl.item}>
        Terms
      </Link>
      <Link to="/privacy" className={cl.item}>
        Privacy Policy
      </Link>
    </ul>
  );
};

export default Footer;
