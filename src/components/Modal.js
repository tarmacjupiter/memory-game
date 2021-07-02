import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

var number = 0;
function addOne() {
  number += 1;
  // console.log(number + " hello from the other side");
}
window.addEventListener("click", addOne, false);

const Modals = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="dark" onClick={() => setShow(true)}>
        Open Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You clicked {number} times</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
