//rrd
import { Link } from "react-router-dom";
//library
import { motion, Variants } from "framer-motion";

interface IBase {
  store: {
    selectedBase: string;
    setSelectedBase: (base: string) => void;
  };
  bases: string[];
}

const containerVariants: Variants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,,255,255)",
    boxShadow: "0px 0px 8px rgb(255,,255,255)",
    transition: {
      repeatType: "reverse",
      duration: 0.6,
      repeat: Infinity,
    },
  },
};
const Base = ({ store, bases }: IBase) => {
  const { selectedBase, setSelectedBase } = store;
  const handleBaseClick = (base: string) => {
    setSelectedBase(base);
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col m-auto justify-center items-center h-96 gap-3"
    >
      <div className="border-b border-gray text-white py-3">
        <h2>Step 1: Choose Your Base</h2>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {bases.map((base) => {
            return (
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={base}
                onClick={() => handleBaseClick(base)}
              >
                <motion.span
                  whileHover={{ color: "#fe8112" }}
                  className="cursor-pointer"
                >
                  {base}
                </motion.span>
              </motion.li>
            );
          })}
        </ul>
      </div>
      {selectedBase && (
        <Link to="/topping">
          {" "}
          <motion.div
            className="btn"
            whileHover="hover"
            variants={buttonVariants}
          >
            <span>Next</span>
          </motion.div>
        </Link>
      )}
    </motion.div>
  );
};

export default Base;
