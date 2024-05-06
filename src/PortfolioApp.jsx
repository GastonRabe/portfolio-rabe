import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { LanguageProvider } from "./context/LanguageProvider.jsx";
import { ParticlesComp } from "./components/ParticlesComp.jsx";
import { NavBar } from "./components/NavBar.jsx";
import "./styles/navBar.css"
import "./styles/navBtns.css"
import "./styles/particles.css"

function App() {

  return (
    <LanguageProvider>
      <ParticlesComp id="particles"/>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/*" element={<Navigate to="/"/>}></Route>
      </Routes>
    </LanguageProvider>
  );
}

export default App;