import { createContext, useState, useContext } from "react";
import { INITIAL_GAME_BOARD, WINNING_COMBINATIONS } from "../assets/GameConfig";

// Create a context
const GameContext = createContext();

// Create a provider component
export const GameProvider = ({ children }) => {
  const [squares, setSquares] = useState(INITIAL_GAME_BOARD);
  const [turn, setTurn] = useState("x");
  const [winner, setWinner] = useState(null);

  const isGameEnded = () => squares.every((square) => square !== "");

  const checkWinner = () => {
    for (const winningCombo of WINNING_COMBINATIONS) {
      const [firstSquare, secondSquare, thirdSquare] = winningCombo;
      const firstSquareValue = squares[firstSquare];

      if (
        firstSquareValue &&
        firstSquareValue === squares[secondSquare] &&
        firstSquareValue === squares[thirdSquare]
      ) {
        return firstSquareValue;
      }
    }

    return null;
  };

  // const checkWinner = () => {
  //   for (let combo of WINNING_COMBINATIONS) {
  //     const [a, b, c] = combo;
  //     if (
  //       squares[a] &&
  //       squares[a] === squares[b] &&
  //       squares[a] === squares[c]
  //     ) {
  //       return squares[a];
  //     }
  //   }
  //   return null;
  // };

  const updateSquares = (ind) => {
    if (squares[ind] || winner) {
      return;
    }
    const s = squares;
    s[ind] = turn;
    setSquares(s);
    setTurn(turn === "x" ? "o" : "x");
    const W = checkWinner();
    if (W) {
      setWinner(W);
    } else if (isGameEnded()) {
      setWinner("x | o");
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(""));
    setTurn("x");
    setWinner(null);
  };

  const ctxValues = {
    squares,
    turn,
    winner,
    updateSquares,
    resetGame,
  };

  return (
    <GameContext.Provider value={ctxValues}>{children}</GameContext.Provider>
  );
};

// Custom hook for using the context
export const useGameContext = () => useContext(GameContext);
