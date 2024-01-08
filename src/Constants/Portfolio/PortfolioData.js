import Apna from "./apna-health.png";
import petWow from "./petwow.png";
import architecture from "./4.jpg";
export const PortfolioData = [
  {
    id: 0,
    title: "Apna Health",
    category: "Web Development",
    link: "https://www.apnahealth.in/",
    images: `${Apna}`,
    skillsUsed: ["Figma", "JavaScript", "Git"],
    description: (
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
        <li>
          Worked on social media marketing and managed content, advertisement
          and designed products and launched them on ecommerce platform.{" "}
          <a href="https://www.instagram.com/joinapnahealth/" target="_blank">
            link
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 1,
    title: "petWow",
    category: "App Design",
    link: "https://play.google.com/store/apps/details?id=com.flutterflow.petwow",
    images: `${petWow}`,
    skillsUsed: [],
    description: (
      <ul>
        <li>
          Developed and launched petWow, a dog training app available on the
          Google Play Store.
        </li>
        <li>Designed the app on Figma and then made it using Flutterflow.</li>
        <li>
          Designed the graphics for the app.
          <a href="https://in.pinterest.com/anku0512/" target="_blank">
            link
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Architectural Work",
    category: "Architecture",
    link: "https://drive.google.com/file/d/1pR1qz_-vhkov95Epc2EyknNA-sqHertL/view?usp=sharing",
    images: `${architecture}`,
    skillsUsed: [],
    description: "",
  },
];
