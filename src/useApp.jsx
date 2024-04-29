import { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function useApContext() {
  return useContext(AppContext);
}
