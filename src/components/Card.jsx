import React from "react";

const Card = ({ children }) => {
  return (
    <div
      className="rounded-2xl p-6 bg-[var(--card-bg)] border border-[var(--border-color)] shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.03]"
      style={{
        boxShadow: 'var(--card-shadow)',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
