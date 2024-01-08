import "./App.css";
import { AppShell, Burger, Center, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "./Components/Navbar";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Constants/Home";
import About from "./Constants/About";
import Skillset from "./Constants/skills/Skillset";
import Resume from "./Constants/resume/Resume";
import Portfolio from "./Constants/Portfolio/Portfolio";
import Main from "./Components/Main";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <BrowserRouter>
      <AppShell
        // header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
      >
        {/*<AppShell.Header p="md" style={{ backgroundColor: "black" }}>*/}
        {/*  <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />*/}
        {/*  <div>Logo</div>*/}
        {/*</AppShell.Header>*/}

        <AppShell.Navbar p="md" style={{ backgroundColor: "black" }}>
          <Navbar />
        </AppShell.Navbar>

        <AppShell.Main style={{ backgroundColor: "white" }}>
          <div>
            <Routes>
              <Route exact path="/" element={<Main />} />

              {/*<Route path="/about" element={<About />} />*/}

              {/*<Route path="/about" element={<Skillset />} />*/}

              {/*<Route path="/resume" element={<Resume />} />*/}

              {/*<Route path="/portfolio" element={<Portfolio />} />*/}
            </Routes>
          </div>
        </AppShell.Main>
        {/*<AppShell.Footer p="md">*/}
        {/*  <Center>*/}
        {/*    <Text c="white">Created using Mantine and React</Text>*/}
        {/*  </Center>*/}
        {/*</AppShell.Footer>*/}
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
