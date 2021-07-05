import React from "react";
import Button from "react-bootstrap/Button";
import "./css/ButtonReveal.css";
import Board from "./Board";

function ButtonReveal() {
  return (
    <div className="buttons">
      <Button variant="dark">Reveal All</Button>
    </div>
  );
}

export default ButtonReveal;
