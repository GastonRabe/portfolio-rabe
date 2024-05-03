import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage.jsx";
import { AboutMePage } from "./pages/AboutMePage.jsx";
import { SkillsPage } from "./pages/SkillsPage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/contact" element={<AboutMePage/>}></Route>
      <Route path="/*" element={<Navigate to="/"/>}></Route>
    </Routes>
  );
}

export default App;