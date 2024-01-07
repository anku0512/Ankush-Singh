import React from "react";
import Home from "../Constants/Home";
import About from "../Constants/About";
import Resume from "../Constants/resume/Resume";

import Portfolio from "../Constants/Portfolio/Portfolio";
import Skillset from "../Constants/skills/Skillset";
import { BrowserRouter } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <div>
        <Home />
        <About id="#About" />
        <Skillset />
        <Resume />
        <Portfolio />
      </div>
    </BrowserRouter>
  );
}

export default Main;
