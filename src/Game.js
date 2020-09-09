import React, {useState} from 'react';
import Board from './board.js';
import calculateWinner from './calculateWinner.js';


const Game = () => {
  const [history, setHistory] = useState([{squares : Array(9).fill(null)}])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)


  handleClick = (i) =>  {
    const history = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(history.concat([
        {
          squares: squares
        }
      ]),
    setStepNumber : history.length,
    setXIsNext : !xIsNext
  }

  jumpTo = (step) => {
    setStepNumber: step,
    setXIsNext: (step % 2) === 0
  }

  render() {
    const history = history;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (setXIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }



export default Game;