import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Routing from "./Routing";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { motion } from "framer-motion";

const App = () => {
  const dark = useSelector((state) => state.theme.dark);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div
        className="flex-1 flex flex-col"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}
      >
        <Navbar />
        <motion.main
          className="flex-1 p-4 sm:p-6 md:p-8 pb-20 overflow-y-auto scroll-smooth"
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
