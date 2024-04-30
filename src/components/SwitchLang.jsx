import { useState } from "react";
import "../styles/switches.css";
import Switch from '@mui/material/Switch';


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
    <div className="container" id="language">
      <div>SPA</div>
      <Switch className="switch" color="default"/>
      <div>ENG</div>
      
    </div>
  );
}