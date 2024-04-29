import React from "react";

const TagContainer = ({ children }) => {
  return (
    <div className="flex bg-[#08002b] h-[5rem] w-[40rem] mx-auto rounded-[5rem] gap-[1rem] items-center">
      {children}
    </div>
  );
};

export default TagContainer;
