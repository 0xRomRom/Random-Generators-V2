import cl from "./About.module.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import ReactGA from "react-ga4";
const TRACKING_ID = "G-L8K1WHGWWZ"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const About = () => {
  useEffect(() => {
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className={cl["main-div"]}>
      <Link to="/">
        <h1 className={cl.logo}>Random Generators</h1>
      </Link>
      <div className={cl["terms-box"]}>
        <p className={cl.par}>
          Arbitrary decision making in all shapes and sizes. Random Generators
          aims to provide a free service that assists users in randomizing
          various units. Our data originates from varying sources, including:
          computer generated output, public API responses, databases.
        </p>
        <br />
        <br />
        <p className={cl.par}>
          Would you like to see a specific generator added? Don't hesitate to
          reach out to us through our contact form.
        </p>
        <p className={cl.par}>
          Any React developer that wants to contribute to the project, please
          also message us!
        </p>
      </div>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} className={cl.home} />
      </Link>
      <Footer />
    </div>
  );
};

export default About;
