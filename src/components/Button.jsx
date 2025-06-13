import React from 'react';

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-indigo-600 text-white py-1.5 px-3 text-sm rounded-md hover:bg-indigo-700 transition"
    >
      {children}
    </button>
  );
};

export default Button;
