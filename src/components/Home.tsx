//rrd
import { Link } from "react-router-dom";
//library
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 2 }}
      className="flex m-auto justify-center h-96"
    >
      <div className="flex flex-col gap-5 justify-center items-center ">
        <h1>Welcome to Pizza Joint</h1>
        <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,,255,255)",
            boxShadow: "0px 0px 8px rgb(255,,255,255)",
          }}
          className="border rounded-full border-white py-2 px-4 text-xl"
        >
          <Link to="/base">
            <span>Create Your Pizza</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
