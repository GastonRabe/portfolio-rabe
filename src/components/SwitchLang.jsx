import "../styles/switches.css";
import Switch from '@mui/material/Switch';
import spain from "../assets/spa.png";
import usa from "../assets/usa.png";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";


export const SwitchLang = () => {

  const {language, setLanguage} = useContext(LanguageContext);

  const handleChange = () => {
    if (language === "english")
      setLanguage("spanish");
    else
      setLanguage("english");
  };

  return (
    <div className="sw-component" id="language">
      <img src={usa} className="country-logo" id="usa"/>
      <Switch className="sc-switch" onChange={handleChange}/>
      <img src={spain} className="country-logo" id="spain"/>
      
    </div>
  );
}