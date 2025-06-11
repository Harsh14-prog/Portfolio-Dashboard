// Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [active, setActive] = useState("Overview");

  return (
    <motion.div
      initial={{ width: isOpen ? 256 : 80 }}
      animate={{ width: isOpen ? 256 : 80 }}
      transition={{ duration: 0.3 }}
      className={`fixed h-screen top-0 left-0 z-40 flex flex-col bg-[var(--sidebar-bg)] text-[var(--text-color)] shadow-md`}
    >
      <div className="flex items-center justify-between p-4 border-b border-indigo-500">
        {isOpen && <span className="text-xl font-bold">My Dashboard</span>}
        <button
          className="p-2 rounded-full hover:bg-indigo-600 transition-colors"
          onClick={() => dispatch(toggleSidebar())}
        >
          {isOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
        </button>
      </div>

      <div className="p-4 space-y-2">
        {navItems.map((item) => (
          <Link key={item.label} to={item.path}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => setActive(item.label)}
              title={!isOpen ? item.label : ""}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                isOpen ? "justify-start gap-3" : "justify-center"
              } ${
                active === item.label
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
  );
};

export default Sidebar;
