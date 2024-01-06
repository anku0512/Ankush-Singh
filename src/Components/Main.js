import React from "react";
import Home from "../Constants/Home";
import About from "../Constants/About";
import Resume from "../Constants/Resume";
import Skills from "../Constants/Skills";
import Portfolio from "../Constants/Portfolio";

function Main() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
    </div>
  );
}

export default Main;
