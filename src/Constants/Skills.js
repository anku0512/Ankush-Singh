import React from "react";
import {
  Container,
  Grid,
  List,
  Progress,
  rem,
  Title,
  Text,
  useMantineTheme,
} from "@mantine/core";
import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
  IconCubePlus,
  IconPalette,
} from "@tabler/icons-react";

function Skills() {
  const theme = useMantineTheme();
  return (
    <Container
      size="responsive"
      style={{
        marginTop: "2em",
        backgroundColor: "#f5f8fd",
        paddingTop: "2em",
        paddingBottom: "2em",
      }}
    >
      <Title className={"mainHeading"}>Skills</Title>
      <Grid style={{ marginTop: "1em" }}>
        {/* This is for technical language skills*/}
        <Grid.Col span="auto">
          <List spacing="lg" size="sm" center>
            <List.Item icon={<IconBrandJavascript className={"skillsIcon"} />}>
              <h2 className={"skillsText"}>JavaScript</h2>
              <Progress value={80} radius="xs" />
            </List.Item>
            <List.Item icon={<IconBrandTypescript className={"skillsIcon"} />}>
              <h2 className={"skillsText"}>TypeScript</h2>
            </List.Item>
            <List.Item icon={<IconBrandNodejs className={"skillsIcon"} />}>
              <h2 className={"skillsText"}>Node</h2>
            </List.Item>
            <List.Item icon={<IconBrandHtml5 className={"skillsIcon"} />}>
              <h2 className={"skillsText"}>HTML</h2>
            </List.Item>
            <List.Item icon={<IconBrandGithub className={"skillsIcon"} />}>
              <h2 className={"skillsText"}>Git</h2>
            </List.Item>
          </List>
        </Grid.Col>
        {/* This is for Framework and library*/}
        <Grid.Col span="auto">
          <List spacing="lg" size="sm" center>
            <List.Item icon={<IconBrandReact className={"skillsIcon"} />}>
              <h2 className={"skillsText"}>React</h2>
            </List.Item>
            <List.Item icon={<IconBrandCss3 className={"skillsIcon"} />}>
              <h2 className={"skillsText"}>CSS3</h2>
            </List.Item>
            <List.Item icon={<IconBrandMantine className={"skillsIcon"} />}>
              <h2 className={"skillsText"}>Mantine</h2>
            </List.Item>
            <List.Item icon={<IconBrandBootstrap className={"skillsIcon"} />}>
              <h2 className={"skillsText"}>Bootstrap</h2>
            </List.Item>
          </List>
        </Grid.Col>
        {/*This is for non-technical skills*/}
        <Grid.Col span="auto">
          <List spacing="lg" size="sm" center>
            <List.Item icon={<IconBrandFigma className={"skillsIcon"} />}>
              <h2 className={"skillsText"}>Figma</h2>
            </List.Item>
            <List.Item icon={<IconPalette className={"skillsIcon"} />}>
              <h2 className={"skillsText"}>Graphic Design</h2>
            </List.Item>
            <List.Item icon={<IconCubePlus className={"skillsIcon"} />}>
              <h2 className={"skillsText"}>3D Design & Rendering</h2>
            </List.Item>
          </List>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Skills;
