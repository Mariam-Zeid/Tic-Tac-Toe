import { useGameContext } from "../../store/GameContext";
import Square from "../Square/Square";

export default function GameBoard() {
  const { squares } = useGameContext();
  return (
    <div className="game">
      {Array.from("012345678").map((ind) => (
        <Square key={ind} ind={ind} clsName={squares[ind]} />
      ))}
    </div>
  );
}
