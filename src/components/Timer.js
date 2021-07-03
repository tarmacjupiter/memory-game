import React from "react";
import { useStopwatch } from "react-timer-hook";
import "./css/App.css";
import Button from "react-bootstrap/Button";

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
      <Button variant="dark" onClick={pause}>
        Pause
      </Button>
      <div style={{ margin: 10 }} />
      <Button variant="dark" onClick={reset}>
        Reset
      </Button>
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
