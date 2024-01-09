import { useState } from "react";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
function App() {
  const colors = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "dark",
  ];
  //Setting Colormode to change color randomly
  const [mode, setMode] = useState(colors[0]);
  const toggleColor = () => {
    let randomColor = Math.floor(Math.random() * colors.length);
    setMode(colors[randomColor]);
  };
  //Changing body color according to mode
  document.getElementById("mainbody").className = 'bg-'+ mode;

  return (
    <>
      <Navbar color={mode} />
      <Quote color={mode} toggleColor={toggleColor} />
    </>
  );
}

export default App;
