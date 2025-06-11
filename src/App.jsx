import React, { useEffect } from "react";
import Routing from './Routing';
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { motion } from "framer-motion";

const App = () => {
  const dark = useSelector((state) => state.theme.dark);
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      if (!localStorage.getItem("theme")) {
        document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [dark]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div
        className={`transition-all duration-300 flex-1 ${
          isOpen ? "md:ml-64" : "md:ml-20"
        } ml-0`}
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}
      >
        <Navbar />
        <motion.main
          className="p-4 sm:p-6 md:p-8 pb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routing />
        </motion.main>
      </div>
    </div>
  );
};

export default App;
