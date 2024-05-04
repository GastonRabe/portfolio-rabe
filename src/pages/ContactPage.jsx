import { ParticlesComp } from "../components/ParticlesComp.jsx";
import { NavBar } from "../components/NavBar.jsx";
import "../styles/mainPage.css";

export const ContactPage = () => {
  return (
    <div>
      <ParticlesComp id="particles"/>
      <NavBar id="main-page-navBar"/>
    </div>
  )
}
