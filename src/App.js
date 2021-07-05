import React from "react";
import "./components/css/App.css";
import Board from "./components/Board.js";
import Timer from "./components/Timer";
import Shuffle from "./components/Shuffle";
import ButtonReveal from "./components/ButtonReveal";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#5c5957",
      }}
    >
      <div className="App">
        <span className="font-link">
          <header className="App-header">Memory Game</header>
        </span>
        <Shuffle />
        <ButtonReveal />
        <Timer />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "50vh",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          {" "}
          <Board key="board" />
        </div>
      </div>
    </div>
  );
}

export default App;
