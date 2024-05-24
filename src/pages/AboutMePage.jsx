import { Typewriter } from "react-simple-typewriter";
import logo from "../assets/logo.png"
import "../styles/aboutMePage.css";
import "../styles/pages.css";
import Arrow from '@mui/icons-material/KeyboardDoubleArrowDownSharp';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { carrer } from "../assets/texts";

export const AboutMePage = () => {

  const {language} = useContext(LanguageContext);
  
  return (
    <div id="about-me-container" className="page">
      <div id="am-logo-container">
        <img src={logo} id="img-logo"/>
        <span id="am-title">
          <Typewriter
              words={['Gastón Rabe']}
              loop
              cursor
              typeSpeed={200}
              deleteSpeed={200}
              delaySpeed={2000}
            />
          </span>
      </div>
      <div id="am-description-container">
        <h1>{carrer[language]}</h1>
      </div>
      <Arrow id="am-arrow"/>
    </div>
  )
}
