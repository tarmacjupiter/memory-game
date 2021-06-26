import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    let content;
    if (this.props.faceUp) {
      content = this.props.content;
      // console.log(this.props.faceUp);
      // if (this.props.content !== true || false || " ") {
      //   if (this.props.faceUp === true && this.props.faceDown === undefined) {
      //     console.log("hehe");
      //   }
      // }
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
