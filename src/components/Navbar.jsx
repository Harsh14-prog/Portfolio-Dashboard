import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';
import { toggleSidebar } from '../Features/sidebarSlice';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.theme.dark);

  return (
    <nav
      className="w-full px-4 sm:px-6 py-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700"
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
      }}
    >
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => dispatch(toggleSidebar())}
          title="Menu"
        >
          <FiMenu size={20} />
        </button>

        {/* Logo / Title */}
        <h2 className="text-lg sm:text-xl font-semibold">My Dashboard</h2>
      </div>

      {/* Right Side */}
      <button
        onClick={() => dispatch(toggleTheme())}
        title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="group relative w-10 h-10 rounded-md flex items-center justify-center border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={dark ? 'sun' : 'moon'}
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            {dark ? (
              <FiSun size={20} className="text-yellow-400" />
            ) : (
              <FiMoon size={20} className="text-indigo-600" />
            )}
          </motion.div>
        </AnimatePresence>
      </button>
    </nav>
  );
};

export default Navbar;
