import "../styles/social.css";
import { Linkedin, Github } from 'react-bootstrap-icons';
import face from "../assets/face.jpg"


export const Social = () => {
  return (
    <div id="social-component">
      <img alt="Gaston Rabe" src={face} className="icono social-element" id="avatar"/>
      <a href="https://www.linkedin.com/in/gaston-rabe-05023b270/" target="_blank" className="social-element"><Linkedin className="icono" id="linkedin"/></a>
      <a href="https://github.com/GastonRabe" target="_blank" className="social-element"><Github className="icono" id="github"/></a>
    </div>
  )
}
