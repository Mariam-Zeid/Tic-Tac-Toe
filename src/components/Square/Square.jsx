import { useGameContext } from "../../store/GameContext";
import "./Square.scss";
import { motion } from "framer-motion";

const Square = ({ ind, clsName }) => {
  const { updateSquares } = useGameContext();
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="square"
      onClick={() => updateSquares(ind)}
    >
      {clsName && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={clsName}
        ></motion.span>
      )}
    </motion.div>
  );
};

export default Square;
