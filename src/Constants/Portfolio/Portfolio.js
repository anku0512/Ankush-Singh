import React from "react";
import {
  Container,
  SimpleGrid,
  Text,
  Timeline,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconGitBranch, IconGitCommit } from "@tabler/icons-react";

function Portfolio() {
  const theme = useMantineTheme();
  return (
    <Container
      size="responsive"
      style={{
        marginTop: "2em",
        backgroundColor: theme.colors.lightColor[0],
        paddingTop: "2em",
        paddingBottom: "2em",
      }}
    >
      <Title className={"mainHeading"}> Portfolio </Title>
      <Text>
        Worked on wide variety of projects from architecture to web development:
        designing houses to websites, apps and softwares
      </Text>
      <SimpleGrid cols={3}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </SimpleGrid>
    </Container>
  );
}

export default Portfolio;
