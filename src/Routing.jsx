import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routing;
