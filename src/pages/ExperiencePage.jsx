import "../styles/experiencePage.css";
import "../styles/pages.css";
import { Card } from "../components/Card.jsx";
import { Education } from "../components/Education.jsx";

export const ExperiencePage = () => {
    return (
    <div id="experience-container" className="page">
      <div id="ec-education-container" className="ec-element">
        "education": [
          
          <Education institution="Instituto Juan Gutenberg (IJG)" degree="School" date="December 2017"></Education>
          <Education institution="National University of Mar del Plata (UNMdP)" degree="Informatics Engineering" date="May 2024"></Education>
          ]
      </div>
      <div id="ec-work-container" className="ec-element">
        <Card work="Researcher and Developer" dateAndEnterprise="InfoLab, Jul 2021 - Oct 2021"
          description="Investigation about cybersecurity incidents in industrial critical infrastructures. Development of paper for presentation." className="experience-card"/>
        <Card work="Busser" dateAndEnterprise="Larkspur Events and Dining, Dic 2022 - Apr 2023"
          description="Customer service. Cash responsibility. Event organization." className="experience-card"/>
        <Card work="Data Analyst" dateAndEnterprise="Authogar, Nov 2023 - Apr 2024"
          description="Analysis of the company's data model. Creation of denormalized database design. Development of Power BI dashboards with daily data extraction." className="experience-card"/>
        <Card work="Full Stack Developer" dateAndEnterprise="E2T, May 2024 - Present"
          description="Frontend with JQuery. Backend with Node.js" className="experience-card"/>
      </div>

    </div>
  )
}
