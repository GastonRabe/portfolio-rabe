import logo from "../assets/logo.png"
import "../styles/aboutMe.css";
import "../styles/pages.css";
import Arrow from '@mui/icons-material/KeyboardDoubleArrowDownSharp';

export const AboutMePage = () => {
  return (
    <div id="about-me-container" className="page">
      <div id="am-logo-container">
        <img src={logo} id="img-logo"/>
        <p>Gastón Rabe</p>
      </div>
      <div id="am-description-container">
        <h1>Ingeniero Informático</h1>
      </div>
      <Arrow id="am-arrow"/>
    </div>
  )
}
