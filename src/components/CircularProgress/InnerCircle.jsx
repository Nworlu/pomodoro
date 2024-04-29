import React from "react";
import OuterCircle from "./OuterCircle";
import Clock from "../Clock/Clock";

const InnerCircle = () => {
  return (
    <OuterCircle>
      <div className="w-[33rem] h-[33rem] rounded-[50%] bg-[#08002b] grid place-content-center">
        <Clock />
      </div>
    </OuterCircle>
  );
};

export default InnerCircle;
