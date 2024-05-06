import { Whatsapp, EnvelopeAt } from 'react-bootstrap-icons';
import logo from "../assets/logo.png"
import "../styles/mainPage.css";
import "../styles/pages.css";
import "../styles/contactPage.css";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

export const ContactPage = () => {


  const text = {
    english: "I am a Software Engineer residing in Mar del Plata, Buenos Aires, Argentina. I am available for inquiries or project proposals. Please do not hesitate to contact me.",
    spanish: "Soy un Ingeniero Informático que vive en Mar del Plata, Buenos Aires, Argentina. Ante cualquier consulta o propuesta de proyectos, no duden en contactarme."
  }

  const {language} = useContext(LanguageContext);

  return (
    <div id="contact-page" className="main-page-container">
      <div id="cp-container">
        <img src={logo} id="cp-img-logo" className="contact-icon"/>
        <p id="cp-descrip">{text[language]}</p>
        <div className="cp-icon-container"><Whatsapp className="contact-icon"></Whatsapp> 223-632-6689</div>
        <div className="cp-icon-container"><EnvelopeAt className="contact-icon"></EnvelopeAt>gastonrabe11@gmail.com</div>
      </div>
    </div>
  )
}
