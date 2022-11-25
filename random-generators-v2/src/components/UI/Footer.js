import cl from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <ul className={cl.list}>
      <Link>Contact us</Link>
      <Link to="/terms">Terms</Link>
      <Link to="/privacy">Privacy Policy</Link>
    </ul>
  );
};

export default Footer;
