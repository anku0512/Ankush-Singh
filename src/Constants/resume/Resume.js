import React from "react";
import {
  Container,
  Grid,
  Timeline,
  Title,
  useMantineTheme,
  Text,
  Badge,
  Spoiler,
} from "@mantine/core";
import { ResumeData } from "./ResumeData";
import "../global.css";

function Resume() {
  const theme = useMantineTheme();

  const infoPart = ResumeData.filter((data) => data.group === "info");
  const experiencePart = ResumeData.filter((data) => data.group === "work");

  // this is for the timeline of about section
  const aboutSection = infoPart.map((data) => (
    <Timeline.Item
      bullet={data.icon}
      title={
        <Title order={4} style={{ color: theme.colors.text[0] }}>
          {data.title}
        </Title>
      }
    >
      {data.duration !== null && (
        <Badge color="cyan" radius="sm">
          {data.duration}
        </Badge>
      )}
      <Text style={{ color: theme.colors.text[1], fontStyle: "italic" }}>
        {data.organization}
      </Text>
      <Text c="dimmed" size="sm">
        {data.location}
      </Text>
      <Spoiler
        maxHeight={200}
        showLabel="Show more"
        hideLabel="Hide"
        transitionDuration={0}
      >
        <Text style={{ color: theme.colors.text[1], opacity: 0.6 }}>
          {data.experience}
        </Text>
      </Spoiler>
    </Timeline.Item>
  ));

  // This is for the timeline of work section
  const workSection = experiencePart.map((data) => (
    <Timeline.Item
      bullet={data.icon}
      title={
        <Title order={4} style={{ color: theme.colors.text[0] }}>
          {data.title}
        </Title>
      }
    >
      {data.duration !== null && (
        <Badge color="cyan" radius="sm">
          {data.duration}
        </Badge>
      )}
      <Text style={{ color: theme.colors.text[1], fontStyle: "italic" }}>
        {data.organization}
      </Text>
      <Text c="dimmed" size="sm">
        {data.location}
      </Text>
      <Spoiler
        maxHeight={100}
        showLabel="Show more"
        hideLabel="Hide"
        transitionDuration={0}
      >
        <Text style={{ color: theme.colors.text[1], opacity: 0.6 }}>
          {data.experience}
        </Text>
      </Spoiler>
    </Timeline.Item>
  ));

  return (
    <div id="resume">
      <Container size="responsive" style={{ marginTop: "2em" }}>
        <Title className={"mainHeading"}>Resume</Title>
        <Grid style={{ marginTop: "2em", marginBottom: "2em" }}>
          <Grid.Col span="auto">
            <Timeline active={infoPart.length} bulletSize={24} lineWidth={2}>
              {aboutSection}
            </Timeline>
          </Grid.Col>
          <Grid.Col span="auto">
            <Timeline
              active={experiencePart.length}
              bulletSize={24}
              lineWidth={2}
            >
              {workSection}
            </Timeline>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Resume;
