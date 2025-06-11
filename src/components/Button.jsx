import React from 'react';

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
    >
      {children}
    </button>
  );
};

export default Button;
