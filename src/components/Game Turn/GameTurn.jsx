import { useGameContext } from "../../store/GameContext";
import Square from "../Square/Square";

export default function GameTurn() {
  const { turn } = useGameContext();
  return (
    <div className={`turn ${turn === "x" ? "left" : "right"}`}>
      <Square clsName="x" />
      <Square clsName="o" />
    </div>
  );
}
