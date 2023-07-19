// rrd
import { Link } from "react-router-dom";
// library
import { AnimatePresence, motion } from "framer-motion";

export interface IModal {
  showModal: boolean;
}
const backDrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
const Modal = ({ showModal }: IModal) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          variants={backDrop}
          initial="hidden"
          animate="visible"
          className=" bg-black absolute inset-0 bg-opacity-40 z-10 h-[100vh] w-[100vw]"
        >
          <motion.div
            variants={modal}
            className="max-w-[400px] m-auto flex flex-col gap-4 bg-white px-4 py-8 rounded text-center"
          >
            <p>Want to make another pizza?</p>

            <Link to="/">
              <button className=" bg-white border border-grey p-2 rounded-full w-40">
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
