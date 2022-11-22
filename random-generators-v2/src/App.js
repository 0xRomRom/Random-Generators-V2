import React, { Fragment } from "react";
import Nav from "./components/Nav.js";
import AppContainer from "./components/UI/AppContainer.js";
import AppContainer2 from "./components/UI/AppContainer2.js";
import AppContainer3 from "./components/UI/AppContainer3.js";

function App() {
  return (
    <Fragment>
      <Nav />
      <AppContainer />
      <AppContainer2 />
      <AppContainer3 />
    </Fragment>
  );
}

export default App;
