import React from "react";
import {
  BackgroundImage,
  Center,
  Box,
  Title,
  AspectRatio,
} from "@mantine/core";
import Background from "./background.jpg";

function Home() {
  return (
    <Box style={{ backgroundColor: "black" }}>
      <AspectRatio ratio={16 / 9} mx="auto" style={{ height: "100vh" }}>
        <BackgroundImage
          src={Background}
          style={{
            width: "100%",
            height: "100vh",
            background: "top center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            opacity: "0.9",
          }}
        ></BackgroundImage>
        {/*<Overlay color="#000" backgroundOpacity={0.3} />*/}
        <Center p="md">
          <div data-aos="fade-in">
            <Title size="4rem" c="rgba(255, 255, 255, 1)">
              Ankush Singh
            </Title>
            <Title order={1} c="white">
              I'm <span data-typed-items="Developer, Architect"></span>
            </Title>
          </div>
        </Center>
      </AspectRatio>
    </Box>
  );
}

export default Home;
