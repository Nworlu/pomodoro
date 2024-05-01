import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Title } from "./components/Title";
import Tags from "./components/Tags/Tags";
import Timer from "./components/Timer/Timer";
import ModalContainer from "./components/ModalContainer";
import useApContext from "./useApp";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { globalFont } = useApContext();

  return (
    <div className={`${globalFont} h-full`}>
      <ModalContainer setIsClose={setIsOpen} isOpen={isOpen} />
      <Title>Pomodoro</Title>
      <Tags />
      <Timer />
      <div className="mx-auto text-white mt-2 w-[60px] text-center">
        <button onClick={() => setIsOpen(true)}>Settings</button>
      </div>
    </div>
  );
}

export default App;
