import { Social } from "../components/Social.jsx";
import { SwitchLang } from "../components/SwitchLang.jsx";
import { SwitchLight } from "../components/SwitchLight.jsx";
import { NavLink } from "react-router-dom";
import "../styles/navBar.css";
import "../styles/navBtns.css";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { contact, aboutMe } from "../assets/texts.js";


export const NavBar = () => {

  const {language} = useContext(LanguageContext);


  return (
    <div id="navBar-container">
      <Social />
      <div id="nv-link-container">
        <div className="btn-76">
          <NavLink to="/" className="navbar-brand nv-link">{aboutMe[language]}</NavLink>
          |
          <NavLink to="/contact" className="navbar-brand nv-link">{contact[language]}</NavLink>
        </div>
      </div>
      <div id="nv-sw-container">
        <SwitchLang />
        <SwitchLight />
      </div>
    </div>
  )
}
