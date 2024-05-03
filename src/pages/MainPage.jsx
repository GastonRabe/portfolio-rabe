import "../styles/mainPage.css";
import { ParticlesComp } from "../components/ParticlesComp.jsx";
import { NavBar } from "../components/NavBar.jsx";
import { AboutMePage } from "./AboutMePage.jsx";
import { SkillsPage } from "./SkillsPage.jsx";
import { ExperiencePage } from "./ExperiencePage.jsx";

export const MainPage = () => {
  return (
    <div id="main-page">
      <ParticlesComp id="particles"/>
      <NavBar id="main-page-navBar"/>
      <AboutMePage id="main-page-aboutMe" className="scroll-page"/>
      <SkillsPage id="main-page-skills" className="scroll-page"/>
      <ExperiencePage id="main-page-experience" className="scroll-page"></ExperiencePage>
    </div>
  );
};
