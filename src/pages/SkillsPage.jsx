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
import { useRef, useEffect} from 'react';



export const SkillsPage = () => {


  const contenedorRef = useRef(null);

  useEffect(() => {
    const contenedor = contenedorRef.current;
    const componentes = contenedor.querySelectorAll('.skill-icon');

    let angulo = 0;

    const girarComponentes = () => {
      angulo += 1;
      componentes.forEach((componente, index) => {
        const offset = 360 / componentes.length * index;
        const radianes = (angulo + offset) * Math.PI / 180;
        const x = Math.cos(radianes) * 100;
        const y = Math.sin(radianes) * 100;
        componente.style.transform = `translate(${x}px, ${y}px)`;
      });
      requestAnimationFrame(girarComponentes);
    };

    girarComponentes();

    return () => {
      cancelAnimationFrame(girarComponentes);
    };
  }, []);




  
  return (
    <div id="skills-container" className="page">
      <h1 id="sc-title">Skills</h1>
      <div id="skills-container-frontend" className="sc-general" ref={contenedorRef}>
        <img src={html} className="sc-front-skill skill-icon"/>
        <img src={css} className="sc-front-skill skill-icon"/>
        <img src={js} className="sc-front-skill skill-icon"/>
        <img src={ts} className="sc-front-skill skill-icon"/>
        <img src={react} className="sc-front-skill skill-icon"/>
      </div>
      <div id="skills-container-backend" className="sc-general" ref={contenedorRef}>
        <img src={c} className="sc-back-skill skill-icon"/>
        <img src={java} className="sc-back-skill skill-icon"/>
        <img src={node} className="sc-back-skill skill-icon"/>
        <img src={express} className="sc-back-skill skill-icon"/>
        <img src={python} className="sc-back-skill skill-icon"/>
      </div>
      <div id="skills-container-db" className="sc-general" ref={contenedorRef}>
        <img src={mysql} className="sc-db-skill skill-icon"/>
        <img src={sqlserver} className="sc-db-skill skill-icon"/>
        <img src={postgres} className="sc-db-skill skill-icon"/>
        {/* <img src={mongodb} className="sc-db-skill skill-icon"/> */}
      </div>
      <div id="skills-container-extras" className="sc-general" ref={contenedorRef}>
        <img src={git} className="sc-extra-skill skill-icon"/>
        <img src={github} className="sc-extra-skill skill-icon"/>
        <img src={powerbi} className="sc-extra-skill skill-icon"/>
      </div>
      <div id="skills-container-languages" className="sc-languages"> 
        <h2 id="sc-title-languages">Languages</h2>
        <Language img={spa} level="Native" className="sc-lang-skill skill-icon"/>
        <Language img={usa} level="Advanced" className="sc-lang-skill skill-icon"/>
        <Language img={germ} level="Basic" className="sc-lang-skill skill-icon"/>
      </div>
    </div>
  )
}
