import React from "react";
import {
  Image,
  ActionIcon,
  rem,
  Group,
  Container,
  Center,
  NavLink,
} from "@mantine/core";
import Ankush from "../Constants/ankush.jpg";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconHome2,
  IconUser,
  IconFile,
  IconLayoutCollage,
  IconBrandPinterest,
} from "@tabler/icons-react";
function Navbar() {
  return (
    <div>
      <Center>
        <Image
          radius="100em"
          h={100}
          w="auto"
          fit="contain"
          src={Ankush}
          alt="photo"
        />
      </Center>
      <Center>
        <h1>Ankush Singh</h1>
      </Center>
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
          <IconBrandPinterest style={{ width: rem(24), height: rem(24) }} />
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
      <div style={{ marginTop: "1em" }}>
        <NavLink
          href="#Home"
          label="Home"
          leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="#About"
          label="About"
          leftSection={<IconUser size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/Resume"
          label="Resume"
          leftSection={<IconFile size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/Portfolio"
          label="Portfolio"
          leftSection={<IconLayoutCollage size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/Home"
          label="Contact"
          leftSection={<IconMail size="1rem" stroke={1.5} />}
        />
      </div>
    </div>
  );
}

export default Navbar;
