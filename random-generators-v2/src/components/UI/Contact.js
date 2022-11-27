import cl from "./Contact.module.css";
import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga";
const TRACKING_ID = "G-L8K1WHGWWZ"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const Contact = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const messageRef = useRef("");
  const emailRef = useRef("");
  const [submitted, setSubmitted] = useState(false);

  const submissionHandler = (e) => {
    e.preventDefault();
    if (messageRef.current.value === "") return;
    const userMessage = {
      message: messageRef.current.value,
      email: emailRef.current.value,
    };
    fetch(
      `https://random-generators-e2692-default-rtdb.firebaseio.com/messages.json`,
      {
        method: "POST",
        body: JSON.stringify(userMessage),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      return response.status === 200 ? setSubmitted(true) : null;
    });
  };

  return (
    <div className={cl["main-div"]}>
      <Link to="/">
        <h1 className={cl.logo}>Random Generators</h1>
      </Link>
      {!submitted && (
        <>
          <div className={cl["contact-box"]}>
            <h3 className={cl.hero}>
              We'll get back at you as soon as possible
            </h3>
            <form>
              <textarea className={cl.message} ref={messageRef}></textarea>
              <input
                type="email"
                className={cl.email}
                placeholder="Your email address"
                ref={emailRef}
              ></input>
              <button className={cl.submit} onClick={submissionHandler}>
                Submit
              </button>
            </form>
          </div>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} className={cl.home} />
          </Link>
        </>
      )}
      {submitted && (
        <>
          <h1 className={cl.thanks}>Submitted!</h1>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} className={cl.home} />
          </Link>
        </>
      )}
    </div>
  );
};

export default Contact;
