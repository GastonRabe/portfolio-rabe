import "../styles/skillsPage.css";
import "../styles/pages.css";
import { Language } from "../components/Language.jsx";
import c from "../assets/c.png";
import css from "../assets/css.png";
import express from "../assets/express.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import js from "../assets/js.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import postgres from "../assets/postgres.png";
import powerbi from "../assets/powerbi.png";
import react from "../assets/react.png";
import sqlserver from "../assets/sqlserver.png";
import ts from "../assets/ts.png";
import python from "../assets/python.png";
import usa from "../assets/usa.png";
import spa from "../assets/spa.png";
import germ from "../assets/germ.png";
import { useRef, useEffect, useContext} from 'react';
import { LanguageContext } from "../context/LanguageContext";



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

  const english = {
    english: "Advanced",
    spanish: "Avanzado"
  }

  const spanish = {
    english: "Native",
    spanish: "Nativo"
  }

  const german = {
    english: "Basic",
    spanish: "Basico"
  }

  const skills = {
    english: "Skills",
    spanish: "Habilidades"
  }


  const {language} = useContext(LanguageContext);


  
  return (
    <div id="skills-container" className="page">
      <h1 id="sc-title">{skills[language]}</h1>
      <div id="skills-container-frontend" className="sc-general" >
        <img src={html} className="sc-front-skill skill-icon"/>
        <img src={css} className="sc-front-skill skill-icon"/>
        <img src={js} className="sc-front-skill skill-icon"/>
        <img src={ts} className="sc-front-skill skill-icon"/>
        <img src={react} className="sc-front-skill skill-icon"/>
      </div>
      <div id="skills-container-backend" className="sc-general" >
        <img src={c} className="sc-back-skill skill-icon"/>
        <img src={java} className="sc-back-skill skill-icon"/>
        <img src={node} className="sc-back-skill skill-icon"/>
        <img src={express} className="sc-back-skill skill-icon"/>
        <img src={python} className="sc-back-skill skill-icon"/>
      </div>
      <div id="skills-container-db" className="sc-general" >
        <img src={mysql} className="sc-db-skill skill-icon"/>
        <img src={sqlserver} className="sc-db-skill skill-icon"/>
        <img src={postgres} className="sc-db-skill skill-icon"/>
        {/* <img src={mongodb} className="sc-db-skill skill-icon"/> */}
      </div>
      <div id="skills-container-extras" className="sc-general" >
        <img src={git} className="sc-extra-skill skill-icon"/>
        <img src={github} className="sc-extra-skill skill-icon"/>
        <img src={powerbi} className="sc-extra-skill skill-icon"/>
      </div>
      <div id="skills-container-languages" className="sc-languages"> 
        {/* <h4 id="sc-title-languages">Languages</h4> */}
        <Language img={spa} level={spanish[language]} className="sc-lang-skill"/>
        <Language img={usa} level={english[language]} className="sc-lang-skill"/>
        <Language img={germ} level={german[language]} className="sc-lang-skill"/>
      </div>
    </div>
  )
}
