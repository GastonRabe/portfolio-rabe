import "../styles/mainPage.css";
import { Contact } from "../components/Contact.jsx";
import { Projects } from "../components/Projects.jsx";
import { Experience } from "../components/Experience.jsx";
import { PersonalInfo } from "../components/PersonalInfo.jsx";
import { Title } from "../components/Title.jsx";
import { Social } from "../components/Social.jsx";
import { Education } from "../components/Education.jsx";
import { SwitchLang } from "../components/SwitchLang.jsx";
import { SwitchLight } from "../components/SwitchLight.jsx";
import { Language } from "../components/Language.jsx";

export const MainPage = () => {
  return (
    <div id="main-container">
      <PersonalInfo />
      <div>
        <SwitchLang />
        <SwitchLight />
      </div>
      <Social />
      <Education />
      <Title />
      <Language />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};
