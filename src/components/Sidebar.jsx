import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../Features/sidebarSlice';
import { FiChevronLeft, FiChevronRight, FiHome, FiBriefcase, FiMail } from 'react-icons/fi';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const navItems = [
    { icon: <FiHome size={20} />, label: 'Overview' },
    { icon: <FiBriefcase size={20} />, label: 'Projects' },
    { icon: <FiMail size={20} />, label: 'Contact' }
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--sidebar-bg)',
        color: 'var(--text-color)',
      }}
      className={`fixed h-screen top-0 left-0 transition-all duration-300 z-40 ${
        isOpen ? 'w-64' : 'w-20'
      } flex flex-col shadow-lg`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-indigo-500">
        {isOpen && <span className="text-xl font-bold">Dashboard</span>}
        <button
          className="p-2 rounded-full hover:bg-indigo-600 transition-colors"
          onClick={() => dispatch(toggleSidebar())}
        >
          {isOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
        </button>
      </div>

      {/* Navigation Links with Tooltip */}
      <div className="p-4 space-y-2">
        {navItems.map((item) => (
          <div
            key={item.label}
            title={isOpen ? '' : item.label} // Tooltip for collapsed state
            className={`flex items-center p-3 rounded-lg transition-colors ${
              isOpen ? 'justify-start gap-3' : 'justify-center'
            } hover:bg-indigo-600 cursor-pointer`}
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
