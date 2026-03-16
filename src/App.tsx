import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import AboutPage from "./screens/AboutPage";
import ServicesPage from "./screens/ServicesPage";
import DigitalPage from "./screens/DigitalPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative selection:bg-[#cba246] selection:text-[#0f172a]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/digital" element={<DigitalPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

