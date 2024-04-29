import React, { useEffect, useState } from "react";
import useApContext from "../useApp";

const ModalContainer = ({ isOpen, setIsClose }) => {
  const {
    longBreak,
    shortBreak,
    pomodoro,
    setShortBreak,
    setPomodoro,
    setLongBreak,
    globalColor,
    setGlobalColor,
    globalFont,
    setGlobalFont,
  } = useApContext();

  const [enteredPomodoro, setEnteredPomodoro] = useState(pomodoro);
  const [enteredShortBreak, setEnteredShortBreak] = useState(shortBreak);
  const [enteredLongBreak, setEnteredLongBreak] = useState(longBreak);
  const [userColor, setUserColor] = useState(globalColor);
  const [userFont, setUserFont] = useState(globalFont);

  const colors = ["7b0323", "b85600", "0890FE"];
  const fonts = ["jersey", "jacquard", "ubuntu"];
  // const colors = ["red"];

  console.log(userFont);
  useEffect(() => {
    setEnteredPomodoro(pomodoro / 60);
    setEnteredShortBreak(shortBreak / 60);
    setEnteredLongBreak(longBreak / 60);
    setUserColor(globalColor);
    setUserFont(globalFont);
  }, [longBreak, pomodoro, shortBreak, globalColor, globalFont]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPomodoro(enteredPomodoro * 60);
    setShortBreak(enteredShortBreak * 60);
    setLongBreak(enteredLongBreak * 60);
    setGlobalColor(userColor);
    setGlobalFont(userFont);
    setIsClose(false);
  };

  return (
    <section
      style={{
        background: `${isOpen ? "rgba(0,0,0,0.3)" : ""}`,
        width: `${isOpen ? "100%" : ""}`,
        height: `${isOpen ? "100vh" : ""}`,
        position: `${isOpen ? "fixed" : ""}`,
        top: `${isOpen ? 0 : ""}`,
        display: `${isOpen ? "grid" : "none"}`,
        placeContent: `${isOpen ? "center" : ""}`,
      }}
      className="transition-all duration-300"
    >
      <div
        className={` transition-all duration-300 ${
          isOpen ? "translate-y-[0%]" : "translate-y-[-190%]"
        } max-w-[550px] w-[550px] h-[400px] rounded-[12px] bg-[#fff]`}
      >
        <div className="flex items-center justify-between px-[10px] border-b border-b-gray-600 py-[20px]">
          <h1 className="text-[3rem] font-bold">Settings</h1>
          <button onClick={() => setIsClose(false)}>Close</button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[3rem] items-end my-[20px]"
        >
          <div className="flex items-center gap-[1rem] w-full px-[10px]">
            <div className="flex flex-col gap-[8px] flex-1 ">
              <label htmlFor="">Pomodoro Time</label>
              <input
                value={enteredPomodoro}
                type="number"
                className="rounded-[.5rem]  border h-[4rem] text-[2rem]"
                min={0}
                max={60}
                onChange={(e) => setEnteredPomodoro(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-[8px] flex-1 ">
              <label htmlFor="">Short Break Time</label>
              <input
                value={enteredShortBreak}
                type="number"
                className="rounded-[.5rem]  border h-[4rem] text-[2rem]"
                min={0}
                max={60}
                onChange={(e) => setEnteredShortBreak(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-[8px] flex-1 ">
              <label htmlFor="">Long Break Time</label>
              <input
                value={enteredLongBreak}
                type="number"
                className="rounded-[.5rem]  border h-[4rem] text-[2rem]"
                min={0}
                max={60}
                onChange={(e) => setEnteredLongBreak(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full px-[10px]">
            <h2 className="text-[2.5rem]">Font</h2>
            <div className="flex gap-[10px] items-center">
              {fonts.map((font, index) => (
                <button
                  type="button"
                  key={index}
                  style={{
                    fontFamily: `${font}`,
                  }}
                  onClick={() => setUserFont(font)}
                  className={`w-[4rem] h-[4rem] rounded-full flex justify-center items-center ${
                    font === userFont
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  Aa
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between w-full px-[10px]">
            <h2 className="text-[2.5rem]">Color</h2>
            <div className="flex gap-[10px] items-center">
              {colors.map((color, index) => (
                <button
                  type="button"
                  key={index}
                  style={{
                    backgroundColor: `#${color}`,
                  }}
                  onClick={() => setUserColor(color)}
                  className={`w-[4rem] h-[4rem] rounded-full flex justify-center items-center`}
                >
                  <div
                    className={
                      color === userColor
                        ? "bg-black w-[1rem] h-[1rem] rounded-full"
                        : ""
                    }
                  ></div>
                </button>
              ))}
            </div>
          </div>
          <button className="mr-[10px] bg-[#b85600] h-[4rem] text-[1.5rem] w-[8rem] rounded-[1rem] border-2">
            Apply
          </button>
        </form>
      </div>
    </section>
  );
};

export default ModalContainer;
