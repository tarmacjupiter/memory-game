import React from "react";
import Button from "react-bootstrap/Button";

const styles = {
  color: "black",
};

function refresh() {
  window.location.reload(false);
}

function Shuffle() {
  return (
    <Button style={{ styles }} variant="dark" onClick={refresh}>
      Shuffle
    </Button>
  );
}

export { refresh };

export default Shuffle;
