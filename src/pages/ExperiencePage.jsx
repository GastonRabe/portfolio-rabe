import "../styles/experiencePage.css";
import "../styles/pages.css";
import { Card } from "../components/Card.jsx";
import { Education } from "../components/Education.jsx";
import { Curriculum } from "../components/Curriculum.jsx";
import cvEnglish from "../assets/cvEnglish.pdf";
import cvSpanish from "../assets/cvSpanish.pdf";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ijg, fi, infoLab, larks, auth, education } from "../assets/texts"


export const ExperiencePage = () => {

    const {language} = useContext(LanguageContext);

    return (
    <div id="experience-container" className="page">
      <div id="ec-education-container" className="ec-element">
        "{education[language]}": [
          <Education props={ijg[language]}></Education>
          <Education props={fi[language]}></Education>
        ]
      </div>
      <div id="ec-work-container" className="ec-element">
        <Card  className="experience-card" props={infoLab[language]}/>
        <Card  className="experience-card" props={larks[language]}/>
        <Card className="experience-card" props={auth[language]}/>
      </div>
      <div id="ec-curriculum-container">
        <Curriculum cv={cvEnglish} description="English CV" className="ec-curriculum-icon"></Curriculum>
        <Curriculum cv={cvSpanish} description="Spanish CV" className="ec-curriculum-icon"></Curriculum>
      </div>

    </div>
  )
}
