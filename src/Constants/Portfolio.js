import React from "react";
import { Container, Title, useMantineTheme } from "@mantine/core";

function Portfolio() {
  const theme = useMantineTheme();
  return (
    <Container size="responsive" style={{ marginTop: "2em" }}>
      <Title className={"mainHeading"}> Portfolio </Title>
    </Container>
  );
}

export default Portfolio;
