import React from "react";

const StartPauseButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-[#fff] text-[3rem] uppercase"
      style={{
        letterSpacing: "1rem",
      }}
    >
      {children}
    </button>
  );
};

export default StartPauseButton;
