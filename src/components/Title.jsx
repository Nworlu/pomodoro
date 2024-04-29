import React from "react";

export const Title = ({ children }) => {
  return (
    <h1
      className={`text-[6rem] font-semibold text-white py-[2rem] text-center `}
    >
      {children}
    </h1>
  );
};
