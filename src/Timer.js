import React from "react";
import { useStopwatch } from "react-timer-hook";
import "./App.css";

//COUNTS NUMBER OF MOUSE CLICKS

var number = 0;
function addOne() {
  number += 1;
  //console.log(number);
}
window.addEventListener("click", addOne, false);

function MyStopwatch() {
  const { seconds, minutes, isRunning, pause, reset } = useStopwatch({
    autoStart: true,
  });
  return (
    <div style={{ textAlign: "center", marginBottom: 50 }}>
      <span className="font-link">
        <h3 style={{ color: "white" }}>Hit Pause Once Finished</h3>
      </span>
      <div style={{ fontSize: "100px", color: "white" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p style={{ color: "white" }}>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}
