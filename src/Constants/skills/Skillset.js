import React from "react";
import {
  Container,
  List,
  useMantineTheme,
  Grid,
  Tooltip,
  Title,
} from "@mantine/core";
import { skillInfo } from "./SkillInfo";
import "../global.css";
function Skillset() {
  const theme = useMantineTheme();
  const technical = skillInfo.filter((skill) => skill.group === "Technical");
  const framework = skillInfo.filter((skill) => skill.group === "Framework");
  const graphic = skillInfo.filter((skill) => skill.group === "Graphic");

  const technicalSkills = technical.map((skill) => (
    <List spacing="lg" size="sm" center>
      <List.Item icon={skill.icon}>
        <Tooltip label={skill.hoverInfo} className={"tool"} position="right">
          <h2 className={"skillsText"}>{skill.name}</h2>
        </Tooltip>
      </List.Item>
    </List>
  ));
  const frameworkSkills = framework.map((skill) => (
    <List spacing="lg" size="sm" center>
      <List.Item icon={skill.icon}>
        <Tooltip label={skill.hoverInfo} className={"tool"} position="right">
          <h2 className={"skillsText"}>{skill.name}</h2>
        </Tooltip>
      </List.Item>
    </List>
  ));
  const graphicSkills = graphic.map((skill) => (
    <List spacing="lg" size="sm" center>
      <List.Item icon={skill.icon}>
        <Tooltip label={skill.hoverInfo} className={"tool"} position="left">
          <h2 className={"skillsText"}>{skill.name}</h2>
        </Tooltip>
      </List.Item>
    </List>
  ));

  return (
    <div id="skill">
      <Container
        size="responsive"
        style={{
          marginTop: "2em",
          backgroundColor: theme.colors.lightColor[0],
          paddingTop: "2em",
          paddingBottom: "2em",
        }}
      >
        <Title className={"mainHeading"}>Skills</Title>
        <Grid style={{ marginTop: "1em" }}>
          <Grid.Col span="auto">{technicalSkills}</Grid.Col>
          <Grid.Col span="auto">{frameworkSkills}</Grid.Col>
          <Grid.Col span="auto">{graphicSkills}</Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Skillset;
