import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.js";
import MainApp from "./components/UI/MainApp.js";
import Privacy from "./components/UI/Privacy.js";
import Terms from "./components/UI/Terms.js";
import Contact from "./components/UI/Contact.js";
import ReactGA from "react-ga";
const TRACKING_ID = "G-L8K1WHGWWZ"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Fragment>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<MainApp />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </ScrollToTop>
    </Fragment>
  );
}

export default App;
