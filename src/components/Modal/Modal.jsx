import { AnimatePresence, motion } from "framer-motion";
import { useGameContext } from "../../store/GameContext";
import Square from "../Square/Square";
import NewGameButton from "../New Game Button/NewGameButton";

export default function Modal() {
  const { winner } = useGameContext();
  return (
    <AnimatePresence>
      {winner && (
        <motion.div
          key={"parent-box"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="winner"
        >
          <motion.div
            key={"child-box"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="text"
          >
            <motion.h2
              initial={{ scale: 0, y: 100 }}
              animate={{
                scale: 1,
                y: 0,
                transition: {
                  y: { delay: 0.7 },
                  duration: 0.7,
                },
              }}
            >
              {winner === "x | o" ? "No Winner :/" : "We have a winner 🥳"}
            </motion.h2>
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  delay: 1.3,
                  duration: 0.2,
                },
              }}
              className="win"
            >
              {winner === "x | o" ? (
                <>
                  <Square clsName="x" />
                  <Square clsName="o" />
                </>
              ) : (
                <>
                  <Square clsName={winner} />
                </>
              )}
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: { delay: 1.5, duration: 0.3 },
              }}
            >
              <NewGameButton />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
