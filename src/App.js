import { useState } from "react"
import Board from "./components/Board.jsx";

const Game = () => {
  // Top state
  const [xIsNext, setIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board 
        xIsNext={xIsNext} 
        squares={currentSquares} 
        onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  )
}

export default Game;