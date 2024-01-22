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
import About from "../Constants/About";
import { theme } from "../Theme";
import "../Constants/global.css";
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
          onClick={() => window.open("https://github.com/anku0512")}
        >
          <IconBrandGithub style={{ width: rem(24), height: rem(24) }} />
        </ActionIcon>
        <ActionIcon
          size={42}
          radius={100}
          variant="default"
          aria-label="ActionIcon with size as a number"
          onClick={() =>
            window.open("https://www.linkedin.com/in/ankush-singh-0512/")
          }
        >
          <IconBrandLinkedin style={{ width: rem(24), height: rem(24) }} />
        </ActionIcon>
        <ActionIcon
          size={42}
          radius={100}
          variant="default"
          aria-label="ActionIcon with size as a number"
          onClick={() => window.open("https://in.pinterest.com/anku0512/")}
        >
          <IconBrandPinterest style={{ width: rem(24), height: rem(24) }} />
        </ActionIcon>
        <ActionIcon
          size={42}
          radius={100}
          variant="default"
          aria-label="ActionIcon with size as a number"
          onClick={() => window.open("mailto:anku0512@gmail.com")}
        >
          <IconMail style={{ width: rem(24), height: rem(24) }} />
        </ActionIcon>
      </Group>
      <div style={{ marginTop: "1em" }}>
        <a href="#home" style={{ textDecoration: "none" }}>
          <NavLink
            to="/"
            label="Home"
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
            // color={theme.colors.lightColor[0]}
            // style={{ color: theme.colors.lightColor[0] }}
            variant="light"
            className={"navigationBar"}
          />
        </a>
        <a href="#about" style={{ textDecoration: "none" }}>
          <NavLink
            to="/about"
            label="About"
            leftSection={<IconUser size="1rem" stroke={1.5} />}
            // style={{ color: theme.colors.lightColor[0] }}
            variant="subtle"
            className={"navigationBar"}
          />
        </a>
        <a href="#resume" style={{ textDecoration: "none" }}>
          <NavLink
            to="/resume"
            label="Resume"
            leftSection={<IconFile size="1rem" stroke={1.5} />}
            // style={{ color: theme.colors.lightColor[0] }}
            variant="subtle"
            className={"navigationBar"}
          />
        </a>
        <a href="#portfolio" style={{ textDecoration: "none" }}>
          <NavLink
            to="/portfolio"
            label="Portfolio"
            leftSection={<IconLayoutCollage size="1rem" stroke={1.5} />}
            // style={{ color: theme.colors.lightColor[0] }}
            variant="subtle"
            className={"navigationBar"}
          />
        </a>
        {/*<NavLink*/}
        {/*  href="/Home"*/}
        {/*  label="Contact"*/}
        {/*  leftSection={<IconMail size="1rem" stroke={1.5} />}*/}
        {/*  variant="subtle"*/}
        {/*  active*/}
        {/*/>*/}
      </div>
    </div>
  );
}

export default Navbar;
