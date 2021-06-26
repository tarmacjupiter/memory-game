import React from "react";
import ReactCircleModal from "react-circle-modal";

var number = 0;
function addOne() {
  number += 1;
  //console.log(number);
}
window.addEventListener("click", addOne, false);

const Modal = () => {
  return (
    <ReactCircleModal
      backgroundColor="#363836"
      toogleComponent={(onClick) => (
        <button onClick={onClick}>Click here to open modal</button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div style={{ backgroundColor: "#6a6e6a", padding: "1em" }}>
          <p style={{ color: "white" }}>You clicked {number} times</p>
          <button onClick={onClick}>Click here to close modal</button>
        </div>
      )}
    </ReactCircleModal>
  );
};

export default Modal;
