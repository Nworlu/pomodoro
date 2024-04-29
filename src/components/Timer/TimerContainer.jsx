import React from "react";

const TimerContainer = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `conic-gradient(#08002b, #220045 150deg ,#08002b)`,
      }}
      className="w-[45rem] h-[45rem] mx-auto my-[2rem] rounded-[50%] grid place-content-center"
    >
      {children}
    </div>
  );
};

export default TimerContainer;
// bg-[#08002b]
