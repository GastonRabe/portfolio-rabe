import { useState } from "react";
import "./styles/portfolioApp.css";
import logo from "./assets/logo.png";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage.jsx";
import { PersonalInfoPage } from "./pages/PersonalInfoPage.jsx";
import { ExperiencePage } from "./pages/ExperiencePage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/personalInfo" element={<PersonalInfoPage/>}></Route>
      <Route path="/experience" element={<ExperiencePage/>}></Route>
      <Route path="/projects" element={<ProjectsPage/>}></Route>
      <Route path="/*" element={<Navigate to="/"/>}></Route>
    </Routes>
  );
}

export default App;