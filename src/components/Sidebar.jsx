import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../Features/sidebarSlice";
import {
  FiChevronLeft,
  FiChevronRight,
  FiHome,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";
import { motion } from "framer-motion";

const navItems = [
  { icon: <FiHome size={20} />, label: "Overview", path: "/" },
  { icon: <FiBriefcase size={20} />, label: "Projects", path: "/projects" },
  { icon: <FiMail size={20} />, label: "Contact", path: "/contact" },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const location = useLocation();
  const [active, setActive] = useState("Overview");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [firstLoad, setFirstLoad] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        dispatch(toggleSidebar(true));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstLoad(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
      <div
        className={`fixed inset-0 z-30 backdrop-blur-sm bg-black/30 md:hidden transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => dispatch(toggleSidebar(false))}
      />

      {/* Sidebar */}
      <motion.div
        initial={firstLoad ? { width: 0, opacity: 0 } : false}
        animate={{
          width: isOpen ? 256 : 80,
          x: isMobile ? (isOpen ? 0 : -256) : 0,
          opacity: 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`flex flex-col min-h-full bg-[var(--sidebar-bg)] text-[var(--text-color)] shadow-md overflow-hidden ${
          isMobile ? "fixed top-0 left-0 z-40" : "relative"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-indigo-500">
          {isOpen && <span className="text-xl font-bold">My Dashboard</span>}
          <button
            className="p-2 rounded-full hover:bg-indigo-600 transition-colors"
            onClick={() => dispatch(toggleSidebar())}
          >
            {isOpen ? (
              <FiChevronLeft size={20} />
            ) : (
              <FiChevronRight size={20} />
            )}
          </button>
        </div>

       
        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.label} to={item.path}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setActive(item.label);
                  if (isMobile) dispatch(toggleSidebar(false));
                }}
                title={!isOpen && !isMobile ? item.label : ""}
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  isOpen ? "justify-start gap-3" : "justify-center"
                } ${
                  location.pathname === item.path
                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                    : "hover:bg-[var(--hover-bg)] hover:text-indigo-600"
                }`}
              >
                {item.icon}
                {isOpen && <span>{item.label}</span>}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
