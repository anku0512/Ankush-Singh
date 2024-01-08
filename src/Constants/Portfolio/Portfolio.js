import React from "react";
import {
  Badge,
  Button,
  Card,
  Container,
  em,
  Flex,
  Grid,
  Group,
  Image,
  rem,
  SimpleGrid,
  Spoiler,
  Text,
  Timeline,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { PortfolioData } from "./PortfolioData";

import { useMediaQuery } from "@mantine/hooks";

const portfolioDisplay = PortfolioData.map((data) => (
  <Grid.Col span="auto">
    <Card shadow="lg" padding="lg" radius="md">
      <Card.Section>
        <Image src={data.images} height="auto" width={300} alt={data.title} />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{data.title}</Text>
        <Badge color="pink">{data.category}</Badge>
      </Group>
      {/*<Carousel slideSize="70%" height={200} slideGap="md" withControls={false}>*/}
      {/*  <Group gap="lg" style={{ display: "flex", flexWrap: "wrap" }}>*/}
      {/*    {data.skillsUsed.map((skill) => (*/}
      {/*      <Badge>{skill}</Badge>*/}
      {/*    ))}*/}
      {/*  </Group>*/}
      {/*</Carousel>*/}
      <Spoiler
        maxHeight={50}
        showLabel="Show more"
        hideLabel="Hide"
        transitionDuration={0}
      >
        <Text size="sm" c="dimmed">
          {data.description}
        </Text>
      </Spoiler>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => window.open(data.link)}
      >
        View Project
      </Button>
    </Card>
  </Grid.Col>
));

function Portfolio() {
  const theme = useMantineTheme();
  return (
    <div id="portfolio">
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
        <Text size="lg" style={{ color: theme.colors.text[1] }}></Text>

        <Grid style={{ marginTop: "2em" }}>{portfolioDisplay}</Grid>
      </Container>
    </div>
  );
}

export default Portfolio;
