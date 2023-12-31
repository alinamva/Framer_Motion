// rrd
import { Link } from "react-router-dom";
// library
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -100 },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div className=" h-16">
      <Link to="/">
        <div className="flex items-center gap-4">
          <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.7}
          >
            <motion.svg
              width={60}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.path
                variants={pathVariants}
                d="M100.4 112.3L.5101 491.7c-1.375 5.625 .1622 11.6 4.287 15.6c4.127 4.125 10.13 5.744 15.63 4.119l379.1-105.1C395.3 231.4 276.5 114.1 100.4 112.3zM127.1 416c-17.62 0-32-14.38-32-31.1c0-17.62 14.39-32 32.01-32c17.63 0 32 14.38 32 31.1C160 401.6 145.6 416 127.1 416zM175.1 271.1c-17.63 0-32-14.38-32-32c0-17.62 14.38-31.1 32-31.1c17.62 0 32 14.38 32 31.1C208 257.6 193.6 271.1 175.1 271.1zM272 367.1c-17.62 0-32-14.38-32-31.1c0-17.62 14.38-32 32-32c17.63 0 32 14.38 32 32C304 353.6 289.6 367.1 272 367.1zM158.9 .1406c-16.13-1.5-31.25 8.501-35.38 24.12L108.7 80.52c187.6 5.5 314.5 130.6 322.5 316.1l56.88-15.75c15.75-4.375 25.5-19.62 23.63-35.87C490.9 165.1 340.8 17.39 158.9 .1406z"
                fill="white"
              ></motion.path>
            </motion.svg>
          </motion.div>
          <motion.div
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            className="border-b border-gray w-full py-2 text-lg "
          >
            <span>Pizza Joint</span>
          </motion.div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
