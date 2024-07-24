import { useGameContext } from "../../store/GameContext";

export default function NewGameButton() {
  const { resetGame } = useGameContext();
  return <button onClick={() => resetGame()}>New Game</button>;
}
