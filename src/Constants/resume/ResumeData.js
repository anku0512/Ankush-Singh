import { IconSchool, IconUser, IconUserCode } from "@tabler/icons-react";

export const ResumeData = [
  {
    id: 0,
    group: "info",
    title: "About",
    icon: <IconUser className={"resumeIcon"} />,
    duration: null,
    organization: "",
    location: "Bengaluru, India",
    experience: (
      <ul>
        I’m a self-taught frontend developer with past experience in running a
        healthcare startup. I’m an architecture graduate and have briefly worked
        in ‘building design’ before jumping into the world of software.
        Overtime, with my experience of designing and creating website for my
        startup - I’ve developed interest in building software applications .
      </ul>
    ),
  },
  {
    id: 7,
    group: "info",
    title: "JavaScript",
    icon: <IconUserCode className={"resumeIcon"} />,
    duration: "2023",
    organization: "ZTM",
    location: "",
    experience: "",
  },

  {
    id: 1,
    group: "info",
    title: "B.Arch",
    icon: <IconSchool className={"resumeIcon"} />,
    duration: "2016-2021",
    organization: "Piloo Mody College of Architecture",
    location: "Cuttack, Odisha",
    experience: "",
  },

  {
    id: 2,
    group: "info",
    title: "High School",
    icon: <IconSchool className={"resumeIcon"} />,
    duration: "2016",
    organization: "Little Flower House",
    location: "Varanasi, UP",
    experience: "",
  },
  {
    id: 3,
    group: "work",
    title: "Frontend Developer",
    duration: "June 2023 - present",
    organization: "komma",
    location: "Bengaluru, India",
    experience: (
      <ul>
        <li>Currently working as a Frontend Developer at komma.</li>
        <li>
          Utilizing skills in JavaScript, React, HTML & CSS, Git, and Typescript
          to develop and maintain frontend application.{" "}
        </li>
        <li>Worked with Vega Charts and implemented it.</li>
        <li>Produced application design on Figma</li>
        <li>
          Collaborating with a team of developers to create user-friendly and
          visually appealing web interfaces.
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    group: "work",
    title: "Founder",
    duration: "Jan 2022 - June 2023",
    organization: "apna health",
    location: "Bengaluru, India",
    experience: (
      <ul>
        <li>
          Founded and launched apna health, an ecommerce website for ayurvedic
          doctors in India.
        </li>
        <li>
          Designed the website and products, and implemented social media
          marketing strategies.{" "}
        </li>
        <li>
          cap Transitioned the business into a franchise service, offering
          clinic design, SEO services, and website design for clients.{" "}
        </li>
        <li>
          Onboarded multiple clients, managed their marketing campaigns and
          developed a comprehensive growth strategy.
        </li>
        <li>Achieved a Lighthouse score of 92% for SEO</li>
      </ul>
    ),
  },
  {
    id: 5,
    group: "work",
    title: "Founder",
    duration: "May 2022 - Oct 2022",
    organization: "petWow",
    location: "Bengaluru, India",
    experience: (
      <ul>
        <li>
          Developed and launched petWow, a dog training app available on the
          Google Play Store.
        </li>
        <li>Designed the app and implemented various training features.</li>
      </ul>
    ),
  },
  {
    id: 6,
    group: "work",
    title: "Architect",
    duration: "August 2021 - Jan 2022",
    organization: "ASA",
    location: "Ludhiana, Punjab",
    experience: (
      <ul>
        <li>
          Utilized 3d modeling software to create detailed visualizations that
          communicated design concepts to stakeholders
        </li>
        <li>
          Collaborated with a team of designers, engineers and contractors to
          ensure the successful completion of a major construction project
        </li>
      </ul>
    ),
  },
];
