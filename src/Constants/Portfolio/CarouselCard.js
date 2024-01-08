import React from "react";
import { PortfolioData } from "./PortfolioData";
import { Carousel } from "@mantine/carousel";
import { Paper } from "@mantine/core";

function CarouselCard() {
  const slides = PortfolioData.map((data) => (
    <Carousel.Slide>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        className={"card"}
        style={{ backgroundImage: `${data.images}` }}
      ></Paper>
    </Carousel.Slide>
  ));
  return (
    <Carousel height={200} slideSize="50%" slideGap="md">
      {slides}
    </Carousel>
  );
}

export default CarouselCard;
