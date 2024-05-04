import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/contact" element={<ContactPage/>}></Route>
      <Route path="/*" element={<Navigate to="/"/>}></Route>
    </Routes>
  );
}

export default App;