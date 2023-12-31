//rrd
import { Link } from "react-router-dom";
//library
import { motion, Variants } from "framer-motion";
import Loader from "./Loader";

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,,255,255)",
    boxShadow: "0px 0px 8px rgb(255,,255,255)",
    transition: {
      duration: 0.6,
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
};
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="flex m-auto justify-center"
    >
      <div className="flex flex-col gap-5 justify-center items-center ">
        <h1>Welcome to Pizza Joint</h1>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          className="border rounded-full border-white py-2 px-4 text-xl"
        >
          <Link to="/base">
            <span>Create Your Pizza</span>
          </Link>
        </motion.div>
        <Loader />
      </div>
    </motion.div>
  );
};

export default Home;
