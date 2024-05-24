import { Whatsapp, EnvelopeAt } from 'react-bootstrap-icons';
import logo from "../assets/logo.png"
import "../styles/mainPage.css";
import "../styles/pages.css";
import "../styles/contactPage.css";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { description } from "../assets/texts"

export const ContactPage = () => {

  const {language} = useContext(LanguageContext);

  return (
    <div id="contact-page" className="main-page-container">
      <div id="cp-container">
        <img src={logo} id="cp-img-logo" className="contact-icon"/>
        <p id="cp-descrip">{description[language]}</p>
        <div className="cp-icon-container"><Whatsapp className="contact-icon"></Whatsapp> 223-632-6689</div>
        <div className="cp-icon-container"><EnvelopeAt className="contact-icon"></EnvelopeAt>gastonrabe11@gmail.com</div>
      </div>
    </div>
  )
}
