import React from "react";

const Card = ({ children }) => {
  return (
    <div
      className="rounded-xl p-6 transition-transform hover:scale-[1.02] shadow-sm hover:shadow-lg"
      style={{
        backgroundColor: 'var(--card-bg)',
        boxShadow: 'var(--card-shadow)',
        border: '1px solid var(--border-color)',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
