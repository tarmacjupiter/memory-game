import React from "react";
import "./App.css";
import Board from "./Board.js";
import Button from "react-bootstrap/Button";
import Timer from "./Timer";

function App() {
  function shuffle() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <span className="font-link">
        <header className="App-header">Memory Game</header>
      </span>
      <div>
        <Button color="primary" onClick={shuffle}>
          Shuffle
        </Button>
      </div>
      <Timer />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {" "}
        <Board />
      </div>
    </div>
  );
}

export default App;
