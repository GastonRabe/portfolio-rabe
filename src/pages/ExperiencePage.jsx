import "../styles/experiencePage.css";
import "../styles/pages.css";
import { Card } from "../components/Card.jsx";
import { Education } from "../components/Education.jsx";
import { Curriculum } from "../components/Curriculum.jsx";
import cvEnglish from "../assets/cvEnglish.pdf";
import cvSpanish from "../assets/cvSpanish.pdf";


export const ExperiencePage = () => {

  const ijg = {
      english: {
        institution:"Instituto Juan Gutenberg (IJG)",
        degree:"School",
        date:"December 2017",
        hasNext:"true"
      },
      spanish: {
        institution:"Instituto Juan Gutenberg (IJG)",
        degree:"Bachiller en Ciencias Sociales",
        date:"Diciembre 2017",
        hasNext:"true"
      }
    }

    const fi = {
      english: {
        institution:"National University of Mar del Plata (UNMdP)",
        degree:"Software Engineering",
        date:"May 2024",
        hasNext:"false"
      },
      spanish: {
        institution:"Universidad Nacional de Mar del Plata (UNMdP)",
        degree:"Ingenieria en informática",
        date:"Mayo 2024",
        hasNext:"false"
      }
    }

    const infoLab = {
      english: {
        work:"Researcher and Developer",
        dateAndEnterprise:"InfoLab, Jul 2021 - Oct 2021",
        description:"Investigation about cybersecurity incidents in industrial critical infrastructures. Development of paper for presentation."
      },
      spanish: {
        work:"Investigador y desarrollador",
        dateAndEnterprise:"InfoLab, Jul 2021 - Oct 2021",
        description:"Investigación acerca de incidentes de ciberseguridad en infraestructuras criticas industriales. Desarrollo de paper para presentación."
      }
    }

    const larks = {
      english: {
        work:"Busser",
        dateAndEnterprise:"Larkspur Events and Dining, Dic 2022 - Apr 2023",
        description:"Customer service. Cash responsibility. Event organization."
      },
      spanish: {
        work:"Camarero",
        dateAndEnterprise:"Larkspur Events and Dining, Dic 2022 - Apr 2023",
        description:"Atención al publico. Responsabilidad de caja. Organización de eventos."
      }
    }

    const auth = {
      english: {
        work:"Data Analyst",
        dateAndEnterprise:"Authogar, Nov 2023 - Apr 2024",
        description:"Analysis of the company's data model. Creation of denormalized database design. Development of Power BI dashboards with daily data extraction." 
      },
      spanish: {
        work:"Analista de datos",
        dateAndEnterprise:"Authogar, Nov 2023 - Apr 2024",
        description:"Análisis del modelo de datos de la empresa. Creación de diseño desnormalizado de la bd. Creación de tableros en Power BI con extracción diaria de datos." 
      }
    }

    const e2t = {
      english: {
        work:"Full Stack Developer",
        dateAndEnterprise:"E2T, May 2024 - Present",
        description:"Frontend with JQuery."
      },
      spanish: {
        work:"Full Stack Developer",
        dateAndEnterprise:"E2T, May 2024 - Presente",
        description:"Frontend con JQuery." 
      }
    }

    const education = {
      english: "education",
      spanish: "educación"
    }

    const language = "english";


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
        <Card className="experience-card" props={e2t[language]}/>
      </div>
      <div id="ec-curriculum-container">
        <Curriculum cv={cvEnglish} description="English CV" className="ec-curriculum-icon"></Curriculum>
        <Curriculum cv={cvSpanish} description="Spanish CV" className="ec-curriculum-icon"></Curriculum>
      </div>

    </div>
  )
}
