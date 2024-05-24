import "../styles/skillsPage.css";
import "../styles/pages.css";
import { Language } from "../components/Language.jsx";
import usa from "../assets/usa.png";
import spa from "../assets/spa.png";
import germ from "../assets/germ.png";
import { useRef, useEffect, useContext} from 'react';
import { LanguageContext } from "../context/LanguageContext";
import frontendImages from '../assets/frontend';
import backendImages from '../assets/backend';
import dbImages from '../assets/database';
import othersImages from '../assets/others';
import { english, spanish, german, skills } from "../assets/texts.js";



export const SkillsPage = () => {

  const contenedorRefs = useRef([]);

  useEffect(() => {
    const contenedores = document.querySelectorAll('.sc-general');

    const animarContenedores = () => {

      contenedores.forEach(contenedor => {
        const imagenes = contenedor.querySelectorAll('.skill-icon');
        let angulo = 0;

        const girarImagenes = () => {
          angulo += 1;

          imagenes.forEach((imagen, index) => {
            const offset = 360 / imagenes.length * index;
            const radianes = (angulo + offset) * Math.PI / 180;
            const x = Math.cos(radianes) * 80;
            const y = Math.sin(radianes) * 80;
            imagen.style.transform = `translate(${x}px, ${y}px)`;
          });

          requestAnimationFrame(girarImagenes);

        };

        girarImagenes();

      });
    };

    animarContenedores();

    return () => {
      cancelAnimationFrame(animarContenedores);
    };
  }, []);




  const {language} = useContext(LanguageContext);


  
  return (
    <div id="skills-container" className="page">
      <h1 id="sc-title">{skills[language]}</h1>
      <div id="skills-container-frontend" className="sc-general">
        {Object.keys(frontendImages).map((key, index) => (
          <img
            key={index}
            src={frontendImages[key]}
            alt={`skill-${key}`}
            className="sc-front-skill skill-icon"
          />
        ))}
      </div>
      <div id="skills-container-frontend" className="sc-general">
        {Object.keys(backendImages).map((key, index) => (
          <img
            key={index}
            src={backendImages[key]}
            alt={`skill-${key}`}
            className="sc-front-skill skill-icon"
          />
        ))}
      </div>
      <div id="skills-container-frontend" className="sc-general">
        {Object.keys(dbImages).map((key, index) => (
          <img
            key={index}
            src={dbImages[key]}
            alt={`skill-${key}`}
            className="sc-front-skill skill-icon"
          />
        ))}
      </div>
      <div id="skills-container-frontend" className="sc-general">
        {Object.keys(othersImages).map((key, index) => (
          <img
            key={index}
            src={othersImages[key]}
            alt={`skill-${key}`}
            className="sc-front-skill skill-icon"
          />
        ))}
      </div>
      <div id="skills-container-languages" className="sc-languages"> 
        <Language img={spa} level={spanish[language]} className="sc-lang-skill"/>
        <Language img={usa} level={english[language]} className="sc-lang-skill"/>
        <Language img={germ} level={german[language]} className="sc-lang-skill"/>
      </div>
    </div>
  )
}
