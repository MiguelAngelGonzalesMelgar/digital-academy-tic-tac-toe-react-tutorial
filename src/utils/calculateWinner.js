// Define all posible combinations to win

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (const line of lines) {
    const [a, b, c] = lines[i];
    const potentialWinner = squares[a]
    if (potentialWinner && potentialWinner === squares[b] && potentialWinner === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default calculateWinner;
