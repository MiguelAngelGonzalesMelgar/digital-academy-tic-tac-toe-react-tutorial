import { useState } from "react"
import calculateWinner from "./utils/calculateWinner.js"

// Square component
const Square = ({ value, onSquareClick }) => {

  return <button className="square"onClick={onSquareClick}>{ value }</button>
}

// Main board
const Board = () => {
  // Turn State
  const [xIsNext, setIsNext] = useState(true);

  // Top State
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Handler
  const handleSquareClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = [...squares];

    // Alternate turns
    xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
    
    setSquares(nextSquares);
    setIsNext(!xIsNext);
  }

  // Display info to user
  const winner = calculateWinner(squares);
  const draw = squares.every(square => square !== null);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (draw) {
    status = "It's a Draw!"
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }


  return (
    <>
    <div className="status">
      <p>{status}</p>
    </div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)}/>
    </div>

    <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)}/>
    <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)}/>
    <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)}/>
    </div>

    <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)}/>
    <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)}/>
    <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)}/>
    </div>
  </>
);
}

export default Board;