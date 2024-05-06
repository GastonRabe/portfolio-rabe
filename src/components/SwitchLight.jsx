import "../styles/switches.css";
import Switch from '@mui/material/Switch';
import { useState, useEffect } from "react";
import { BrightnessHighFill, MoonFill } from 'react-bootstrap-icons';


export const SwitchLight = () => {

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (!checked)
    {
      document.documentElement.style.setProperty('--color-principal', '#00001a');
      document.documentElement.style.setProperty('--color-secundario', '#888');
      document.documentElement.style.setProperty('--color-terciario', '#2b2b44');
      document.documentElement.style.setProperty('--color-opuesto', '#fff');
    }
    else
    {
      document.documentElement.style.setProperty('--color-principal', '#04c4fc');
      document.documentElement.style.setProperty('--color-secundario', '#fff');
      document.documentElement.style.setProperty('--color-terciario', 'yellow');
      document.documentElement.style.setProperty('--color-opuesto', '#1a1a33');
    }
  }, [checked]);


  return (
    <div className="sw-component" id="light">
      <MoonFill className="light-icon" id="moon"/>
      <Switch className="sc-switch" onChange={handleChange}/>
      <BrightnessHighFill className="light-icon"  id="sun"/>
    </div>
  )
}

