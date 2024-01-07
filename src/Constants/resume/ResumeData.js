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
        <li>
          I have experience working as a Founder of two startups, apna health
          and petWow. At apna health, I transformed the business from an
          ecommerce website to a franchise service for ayurvedic doctors in
          India. I handled social media marketing, clinic design, SEO, and
          website design for clients. Additionally, I developed an app called
          petWow for dog training. In my current role as a Frontend Developer at
          komma, I utilize my skills in JavaScript, React, HTML & CSS, Git, and
          Typescript to create visually appealing and user-friendly design. I
          have a strong background in design, including experience with
          Photoshop, Figma, Illustrator, Autodesk and 3d renderng. I hold a
          B.Arch degree from Piloo Mody College of Architecture. My future goal
          is to continue building my career as a Frontend Developer, combining
          my design expertise and web development skills to create innovative
          and impactful user experiences.
        </li>
      </ul>
    ),
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
          to develop and maintain frontend applications.{" "}
        </li>
        <li>
          Collaborating with a team of developers to create user-friendly and
          visually appealing web interfaces.cap
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
];
