import React from "react";
import Card from "./Card.js";
import "./css/Board.css";
import { refresh } from "./Shuffle.js";

//ASK USER FOR AMOUNT OF CARDS
let input = prompt("How many pairs would you like:");

//Convert input string to a number
let parseNum = parseInt(input, 10);

//Array for storing the input
var numbers = [];

//Loop that iterates each num in input
for (var i = 0; i <= input - 1; i++) {
  numbers[i] = i;
}

//Counts how many times you have matched a pair of cards
let correctPairsNum = 0;

//Counts how many times you missed matches
let incorrectPairsNum = 0;

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
        correctPairsNum += 1;
        if (parseNum === correctPairsNum) {
          alert(
            `You got ${incorrectPairsNum} wrong matches and ${correctPairsNum} right matches. You flipped ${
              (incorrectPairsNum + correctPairsNum) * 2
            } times\nYour time is below`
          );
          refresh();
        }
      } else {
        incorrectPairsNum += 1;
        setTimeout(() => {
          this.flipCardTo(this.state.firstCard, false);
          this.flipCardTo(cardIdx, false);
          this.setState({ firstCard: null });
        }, 500);
      }
    }
    this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp);
  }

  render() {
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
