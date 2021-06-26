import React from "react";
import "./App.css";
import Board from "./Board.js";
import Timer from "./Timer";
import Shuffle from "./Shuffle";
import Modal from "./Modal";

function App() {
  return (
    <div className="App">
      <span className="font-link">
        <header className="App-header">Memory Game</header>
      </span>
      <Shuffle />
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
        <Board key="board" />
      </div>
      <Modal />
    </div>
  );
}

export default App;
