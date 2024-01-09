import newphoto from "./apna.png";
import pet from "./pet.png";
import architect from "./architecture.png";
export const PortfolioData = [
  {
    id: 0,
    title: "Apna Health",
    category: "Web Development",
    link: "https://www.apnahealth.in/",
    images: `${newphoto}`,
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
    images: `${pet}`,
    skillsUsed: [],
    description: (
      <ul>
        <li>
          Developed and launched petWow, a dog training app available on the
          Google Play Store.
        </li>
        <li>Designed interface of the app on Figma</li>
        <li>Made the app using flutterflow</li>
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
    images: `${architect}`,
    skillsUsed: [],
    description: (
      <ul>
        <li>This portfolio contains selected work from 2016 to 2022</li>
        <li>
          Software's used to make this portfolio : Autocad, Sketchup, Lumion,
          Enscape, Photoshop, Illustrator
        </li>
      </ul>
    ),
  },
];
