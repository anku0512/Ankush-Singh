import React from "react";
import { Container, Title, useMantineTheme } from "@mantine/core";

function Resume() {
  const theme = useMantineTheme();
  return (
    <Container style={{ marginTop: "2em" }}>
      <Title className={"mainHeading"}>Resume</Title>
    </Container>
  );
}

export default Resume;
