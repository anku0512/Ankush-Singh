import React from "react";
import { Container, Title, useMantineTheme } from "@mantine/core";

function Skills() {
  const theme = useMantineTheme();
  return (
    <Container size="responsive" style={{ marginTop: "2em" }}>
      <Title className={"mainHeading"}>Skills</Title>
    </Container>
  );
}

export default Skills;
