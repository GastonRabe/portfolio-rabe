import "../styles/switches.css";
import Switch from '@mui/material/Switch';
import { BrightnessHighFill, MoonFill } from 'react-bootstrap-icons';


export const SwitchLight = () => {
  return (
    <div className="container" id="light">
      <BrightnessHighFill />
      <Switch className="switch" color="default"/>
      <MoonFill />
    </div>
  )
}

