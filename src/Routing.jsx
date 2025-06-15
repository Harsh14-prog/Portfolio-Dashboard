import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "./Pages/Overview";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

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
