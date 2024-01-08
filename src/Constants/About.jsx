import React, { useEffect } from "react";
import {
  Container,
  Title,
  Text,
  Grid,
  Image,
  useMantineTheme,
  rem,
  List,
} from "@mantine/core";
import Ankush from "./ankush.jpg";
import { classes } from "./global.css";
import { IconChevronRight } from "@tabler/icons-react";

function About() {
  const theme = useMantineTheme();

  return (
    <div id="about">
      <Container size="responsive" style={{ marginTop: "2em" }}>
        <Title className={"mainHeading"} order={1}>
          About
        </Title>
        <Text size="lg" style={{ color: theme.colors.text[1] }}></Text>
        <Grid style={{ marginTop: "1em" }}>
          <Grid.Col span="content">
            <Image h={300} w="auto" fit="contain" src={Ankush} alt="photo" />
          </Grid.Col>
          <Grid.Col span="auto">
            <Container>
              <Title order={1} style={{ color: theme.colors.text[0] }}>
                Frontend Developer
              </Title>
              <Text style={{ color: theme.colors.text[1], marginTop: "1em" }}>
                Hi! I am an Architect-turned-Frontend Developer with a passion
                for developing interfaces. I have an experience working as a
                frontend developer for an Analytics Platform. My background in
                architecture gives me a keen eye for detail and user flow,
                ensuring every element on screen has a purpose and contributes
                to a seamless experience.
              </Text>
              <Grid style={{ marginTop: "2em" }}>
                <Grid.Col span="content">
                  <List
                    spacing="lg"
                    size="sm"
                    center
                    icon={
                      <IconChevronRight
                        style={{
                          width: rem(16),
                          height: rem(16),
                          color: theme.colors.text[1],
                        }}
                      />
                    }
                  >
                    <List.Item>
                      <Title order={4} style={{ color: theme.colors.text[3] }}>
                        Email:{" "}
                        <Text span style={{ color: theme.colors.text[1] }}>
                          anku0512@gmail.com
                        </Text>
                      </Title>
                    </List.Item>
                    <List.Item>
                      <Title order={4} style={{ color: theme.colors.text[3] }}>
                        Website:{" "}
                        <Text span style={{ color: theme.colors.text[1] }}>
                          www.ankush.work
                        </Text>
                      </Title>
                    </List.Item>
                  </List>
                </Grid.Col>
                <Grid.Col span="content">
                  <List
                    spacing="lg"
                    size="sm"
                    center
                    icon={
                      <IconChevronRight
                        style={{
                          width: rem(16),
                          height: rem(16),
                          color: theme.colors.text[1],
                        }}
                      />
                    }
                  >
                    <List.Item>
                      <Title order={4} style={{ color: theme.colors.text[3] }}>
                        Phone:{" "}
                        <Text span style={{ color: theme.colors.text[1] }}>
                          +91-97763 86164
                        </Text>
                      </Title>
                    </List.Item>
                    <List.Item>
                      <Title order={4} style={{ color: theme.colors.text[3] }}>
                        Location:{" "}
                        <Text span style={{ color: theme.colors.text[1] }}>
                          Bengaluru, India
                        </Text>
                      </Title>
                    </List.Item>
                  </List>
                </Grid.Col>
              </Grid>
            </Container>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
