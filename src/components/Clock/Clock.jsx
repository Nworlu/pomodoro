import { useEffect } from "react";
import ClockContainer from "./ClockContainer";
import TimerText from "../Timer/TimerText";
import StartPauseButton from "../StartPauseButton";
import useApContext from "../../useApp";

const Clock = () => {
  const { setActiveTime, activeTime, time, setTime, initTime } = useApContext();

  useEffect(() => {
    if (activeTime && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    if (time === 0) {
      setTimeout(() => {
        setTime(initTime);
        setActiveTime(false);
      }, 1000);
    }
  }, [time, activeTime, setTime, initTime, setActiveTime]);

  const handleStartPause = () => {
    if (activeTime) {
      setActiveTime(false);
    } else {
      setActiveTime(true);
    }
  };

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick={handleStartPause}>
        {activeTime ? "Pause" : "Start"}
      </StartPauseButton>
    </ClockContainer>
  );
};

export default Clock;
