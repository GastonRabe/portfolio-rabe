import "../styles/switches.css";
import Switch from '@mui/material/Switch';
import { BrightnessHighFill, MoonFill } from 'react-bootstrap-icons';


export const SwitchLight = () => {
  return (
    <div className="sw-component" id="light">
      <BrightnessHighFill className="light-icon"/>
      <Switch className="switch" color="primary"/>
      <MoonFill className="light-icon"/>
    </div>
  )
}

