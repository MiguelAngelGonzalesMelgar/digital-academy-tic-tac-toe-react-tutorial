import { useState } from "react"

// Square component
const Square = () => {
  // State
  const [value, setValue] = useState(null);

  // Handler
  const handleClick = () => {
    setValue("X");
  }
  return <button className="square" onClick={handleClick}>{ value }</button>
}

// Main board
const Board = () => {
  return (
    <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>

    <div className="board-row">
    <Square />
    <Square />
    <Square />
    </div>

    <div className="board-row">
    <Square />
    <Square />
    <Square />
    </div>
  </>
);
}

export default Board;