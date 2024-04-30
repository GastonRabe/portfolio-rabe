import "../styles/social.css";
import { Linkedin, Github } from 'react-bootstrap-icons';

export const Social = () => {
  return (
    <div id="container">
      <a href="https://www.linkedin.com/in/gaston-rabe-05023b270/"><Linkedin className="icono" id="linkedin"/></a>
      <a href="https://github.com/GastonRabe"><Github className="icono" color="black" id="github"/></a>
      



    </div>
  )
}
