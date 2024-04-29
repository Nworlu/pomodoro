import React, { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [pomodoro, setPomodoro] = useState(25 * 60);
  const [shortBreak, setShortBreak] = useState(5 * 60);
  const [longBreak, setLongBreak] = useState(30 * 60);

  const [globalColor, setGlobalColor] = useState("b85600");
  const [globalFont, setGlobalFont] = useState("jersey");

  const [initTime, setInitTime] = useState(0);

  const [time, setTime] = useState(25 * 60);
  const [activeTime, setActiveTime] = useState(false);
  const [activeTag, setActiveTag] = useState(0);
  const [progress, setProgress] = useState(55);

  useEffect(() => {
    switch (activeTag) {
      case 0:
        setTime(pomodoro);
        setInitTime(pomodoro);
        break;
      case 1:
        setTime(shortBreak);
        setInitTime(shortBreak);
        break;
      case 2:
        setTime(longBreak);
        setInitTime(longBreak);
        break;
      default:
        break;
    }
  }, [activeTag, longBreak, pomodoro, shortBreak]);

  return (
    <AppContext.Provider
      value={{
        time,
        setTime,
        activeTime,
        setActiveTime,
        activeTag,
        setActiveTag,
        progress,
        setProgress,
        initTime,
        pomodoro,
        shortBreak,
        longBreak,
        setPomodoro,
        setShortBreak,
        setLongBreak,
        globalColor,
        setGlobalColor,
        globalFont,
        setGlobalFont,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

// export default function useApContext(){
//     return useContext(AppContext)
// }
