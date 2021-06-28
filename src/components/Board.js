import React from "react";
import Card from "./Card.js";
import "./css/Board.css";

//ASK USER FOR AMOUNT OF CARDS
let input = prompt("How many pairs would you like:");

//console.log(input);

var numbers = [];

for (var i = 0; i <= input - 1; i++) {
  numbers[i] = i;
}

//console.log(numbers);

class Board extends React.Component {
  constructor(props) {
    super(props);
    const fronts = numbers;
    const deck = fronts
      .concat(fronts)
      .sort(() => Math.random() - 0.5)
      .map((f) => {
        return {
          content: f,
          faceUp: false,
        };
      });
    this.state = {
      deck: deck,
      firstCard: null,
    };
  }

  flipCardTo(cardIdx, faceUp) {
    this.setState({
      deck: this.state.deck.map((f, i) => {
        if (i === cardIdx) {
          return {
            content: f.content,
            faceUp: !f.faceUp,
          };
        } else {
          return f;
        }
      }),
    });
  }

  flip(cardIdx) {
    if (this.state.firstCard === null) {
      this.setState({ firstCard: cardIdx });
    } else {
      const firstCardContent = this.state.deck[this.state.firstCard].content;
      const secondCardContent = this.state.deck[cardIdx].content;
      if (firstCardContent === secondCardContent) {
        this.setState({ firstCard: null });
      } else {
        setTimeout(() => {
          this.flipCardTo(this.state.firstCard, false);
          this.flipCardTo(cardIdx, false);
          this.setState({ firstCard: null });
        }, 1000);
      }
    }
    this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp);
  }

  render() {
    //console.log(this.state.firstCard);
    return this.state.deck.map((f, i) => {
      return (
        <div className="Board">
          <Card
            flip={() => {
              this.flip(i);
            }}
            content={f.content}
            faceUp={f.faceUp}
          />
        </div>
      );
    });
  }
}

export default Board;
