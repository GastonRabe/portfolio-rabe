import "../styles/skillsPage.css";
import "../styles/pages.css";
import { Language } from "../components/Language.jsx";
import c from "../assets/c.png"
import css from "../assets/css.png"
import express from "../assets/express.png"
import github from "../assets/github.png"
import html from "../assets/html.png"
import java from "../assets/java.png"
import js from "../assets/js.png"
import mongodb from "../assets/mongodb.png"
import mysql from "../assets/mysql.png"
import node from "../assets/node.png"
import postgres from "../assets/postgres.png"
import powerbi from "../assets/powerbi.png"
import react from "../assets/react.png"
import sqlserver from "../assets/sqlserver.png"
import ts from "../assets/ts.png"
import usa from "../assets/usa.png"
import spa from "../assets/spa.png"
import germ from "../assets/germ.png"



export const SkillsPage = () => {
  
  return (
    <div id="skills-container" className="page">
      <h1 id="sc-title">Skills</h1>
      <div id="skills-container-frontend" className="sc-general">
        <img src={html} className="sc-front-skill skill-icon"/>
        <img src={css} className="sc-front-skill skill-icon"/>
        <img src={js} className="sc-front-skill skill-icon"/>
        <img src={ts} className="sc-front-skill skill-icon"/>
        <img src={react} className="sc-front-skill skill-icon"/>
      </div>
      <div id="skills-container-backend" className="sc-general">
        <img src={c} className="sc-back-skill skill-icon"/>
        <img src={java} className="sc-back-skill skill-icon"/>
        <img src={node} className="sc-back-skill skill-icon"/>
        <img src={express} className="sc-back-skill skill-icon"/>
      </div>
      <div id="skills-container-db" className="sc-general">
        <img src={mysql} className="sc-db-skill skill-icon"/>
        <img src={sqlserver} className="sc-db-skill skill-icon"/>
        <img src={postgres} className="sc-db-skill skill-icon"/>
        <img src={mongodb} className="sc-db-skill skill-icon"/>
      </div>
      <div id="skills-container-extras" className="sc-general">
        <img src={github} className="sc-extra-skill skill-icon"/>
        <img src={powerbi} className="sc-extra-skill skill-icon"/>
      </div>
      <div id="skills-container-languages" className="sc-general">
        <h2 id="sc-title-languages">Languages</h2>
        <Language img={spa} level="Native" className="sc-lang-skill skill-icon"/>
        <Language img={usa} level="Advanced" className="sc-lang-skill skill-icon"/>
        <Language img={germ} level="Basic" className="sc-lang-skill skill-icon"/>
      </div>
    </div>
  )
}
