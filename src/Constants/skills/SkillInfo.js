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

export const skillInfo = [
  {
    id: 0,
    group: "Technical",
    name: "JavaScript",
    icon: <IconBrandJavascript className={"skillsIcon"} />,
    hoverInfo: (
      <ul>
        <li>Built this website using JavaScript</li>
        <li>Proficient knowledge in javascript</li>
      </ul>
    ),
  },
  {
    id: 1,
    group: "Technical",
    name: "TypeScript",
    icon: <IconBrandTypescript className={"skillsIcon"} />,
    hoverInfo: (
      <ul>
        <li>Worked with TypeScript at Komma</li>
      </ul>
    ),
  },
  {
    id: 2,
    group: "Technical",
    name: "Node.js",
    icon: <IconBrandNodejs className={"skillsIcon"} />,
    hoverInfo: (
      <ul>
        <li>Used Node.js to execute JavaScript codes outside of browser</li>
      </ul>
    ),
  },
  {
    id: 3,
    group: "Technical",
    name: "HTML",
    icon: <IconBrandHtml5 className={"skillsIcon"} />,
    hoverInfo: (
      <ul>
        <li>Used HTML to create a custom web application for a client</li>
      </ul>
    ),
  },
  {
    id: 4,
    group: "Technical",
    name: "Git",
    icon: <IconBrandGithub className={"skillsIcon"} />,
    hoverInfo: (
      <ul>
        <li>used github to work with team on the same project</li>
      </ul>
    ),
  },
  {
    id: 5,
    group: "Framework",
    name: "React",
    icon: <IconBrandReact className={"skillsIcon"} />,
    hoverInfo: (
      <ul>
        <li>Used react in multiple projects</li>
      </ul>
    ),
  },
  {
    id: 6,
    group: "Framework",
    name: "CSS5",
    icon: <IconBrandCss3 className={"skillsIcon"} />,
    hoverInfo: (
      <ul>
        <li>Great understanding of css</li>
      </ul>
    ),
  },
  {
    id: 7,
    group: "Framework",
    name: "Mantine",
    icon: <IconBrandMantine className={"skillsIcon"} />,
    hoverInfo: (
      <ul>
        <li>used mantine to build this website</li>
        <li>have been working with mantine at komma</li>
      </ul>
    ),
  },
  // {
  //   id: 8,
  //   group: "Framework",
  //   name: "Bootstrap",
  //   icon: <IconBrandBootstrap className={"skillsIcon"} />,
  //   hoverInfo: (
  //     <ul>
  //       <li>used this library to build a website for a client</li>
  //     </ul>
  //   ),
  // },
  {
    id: 9,
    group: "Graphic",
    name: "Figma",
    icon: <IconBrandFigma className={"skillsIcon"} />,
    hoverInfo: (
      <ul>
        <li>Great understanding of design on figma</li>
        <li>Start any project with ideation on figma</li>
      </ul>
    ),
  },
  {
    id: 10,
    group: "Graphic",
    name: "Graphic Design",
    icon: <IconPalette className={"skillsIcon"} />,
    hoverInfo: (
      <ul>
        <li>Great at working with photoshop and illustrator</li>
        <li>Have worked on open source graphic software GIMP</li>
        <li>Have experience working with canva</li>
      </ul>
    ),
  },
  {
    id: 11,
    group: "Graphic",
    name: "3D Design & Rendering",
    icon: <IconCubePlus className={"skillsIcon"} />,
    hoverInfo: (
      <ul>
        <li>Have experience working on 2d drafting software- Autocad</li>
        <li>Have worked on sketchup to produce 3d designs</li>
        <li>skilled at rendering software's like Lumion, V-ray and Enscape</li>
      </ul>
    ),
  },
];
