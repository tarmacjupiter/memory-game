import React from "react";
import "./App.css";
import Board from "./Board.js";
import Button from "react-bootstrap/Button";

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
          Primary
        </Button>
      </div>
      <Board />
    </div>
  );
}

export default App;
