import React from "react";
import "./css/Card.css";

class Card extends React.Component {
  render() {
    let content;
    if (this.props.faceUp) {
      content = this.props.content;
      // console.log(this.props.faceUp);
      // console.log(content);
      // console.log(this.props.faceDown);
      // if (content !== true || false || " ") {
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
