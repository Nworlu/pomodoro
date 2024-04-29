import React, { useEffect, useState } from "react";
import useApContext from "../../useApp";

const OuterCircle = ({ children }) => {
  const { progress, setProgress, initTime, time, globalColor } = useApContext();
  useEffect(() => {
    setProgress(time / (initTime / 100));
  }, [initTime, setProgress, time]);

  console.log({ progress });
  return (
    <div
      style={{
        backgroundImage: `conic-gradient(#${globalColor} ${progress}%, transparent ${progress}%)`,
      }}
      className="w-[35rem] h-[35rem] rounded-[50%] grid place-content-center"
    >
      {children}
    </div>
  );
};

export default OuterCircle;
