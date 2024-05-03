import { useState } from "react";
import "../styles/switches.css";
import Switch from '@mui/material/Switch';
import spain from "../assets/spa.png"
import usa from "../assets/usa.png"


export const SwitchLang = () => {

  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="sw-component" id="language">
      <img src={spain} className="country-logo" id="spain"/>
      <Switch className="switch"  color="primary"/>
      <img src={usa} className="country-logo" id="usa"/>
      
    </div>
  );
}