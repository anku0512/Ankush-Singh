import React from "react";
import { Image, ActionIcon, rem, Group, Container } from "@mantine/core";
import Ankush from "../Constants/ankush.jpg";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
function Navbar() {
  return (
    <div className="App">
      <Container>
        <Image
          radius="100em"
          h={100}
          w="auto"
          fit="contain"
          src={Ankush}
          alt="photo"
        />
      </Container>
      <h1>Ankush Singh</h1>
      <Group justify="center">
        <ActionIcon
          size={42}
          radius={100}
          variant="default"
          aria-label="ActionIcon with size as a number"
        >
          <IconBrandGithub style={{ width: rem(24), height: rem(24) }} />
        </ActionIcon>
        <ActionIcon
          size={42}
          radius={100}
          variant="default"
          aria-label="ActionIcon with size as a number"
        >
          <IconBrandLinkedin style={{ width: rem(24), height: rem(24) }} />
        </ActionIcon>
        <ActionIcon
          size={42}
          radius={100}
          variant="default"
          aria-label="ActionIcon with size as a number"
        >
          <IconBrandWhatsapp style={{ width: rem(24), height: rem(24) }} />
        </ActionIcon>
        <ActionIcon
          size={42}
          radius={100}
          variant="default"
          aria-label="ActionIcon with size as a number"
        >
          <IconMail style={{ width: rem(24), height: rem(24) }} />
        </ActionIcon>
      </Group>
    </div>
  );
}

export default Navbar;
