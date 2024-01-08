import "./App.css";
import { AppShell, Burger, Center, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "./Components/Navbar";

import React from "react";

import Main from "./Components/Main";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
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
          <Main />
        </div>
      </AppShell.Main>
      {/*<AppShell.Footer p="md">*/}
      {/*  <Center>*/}
      {/*    <Text c="white">Created using Mantine and React</Text>*/}
      {/*  </Center>*/}
      {/*</AppShell.Footer>*/}
    </AppShell>
  );
}

export default App;
