import React from "react";
import "./css/Card.css";

class Card extends React.Component {
  render() {
    let content;
    if (this.props.faceUp) {
      content = this.props.content;
    } else {
      content = "";
    }
    return (
      <div
        onClick={this.props.flip}
        className={`Card ${this.props.faceDown ? "face-up" : ""}`}
      >
        {content}
      </div>
    );
  }
}

export default Card;
