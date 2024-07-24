import NewGameButton from "./components/New Game Button/NewGameButton";
import GameBoard from "./components/Game Board/GameBoard";
import GameTurn from "./components/Game Turn/GameTurn";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className="tic-tac-toe">
      <h1> TIC-TAC-TOE </h1>
      <NewGameButton />
      <GameBoard />
      <GameTurn />
      <Modal />
    </div>
  );
}

export default App;
