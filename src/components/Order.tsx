// react
import { useEffect, useState } from "react";
// library
import { motion } from "framer-motion";
// component
import Modal from "./Modal";

interface IOrder {
  store: {
    selectedBase: string;
    selectedTopping: number[];
  };
  toppings: { id: number; label: string }[];
}

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order: React.FC<IOrder> = ({ store, toppings }) => {
  const [showModal, setShowModal] = useState(false);

  const { selectedBase, selectedTopping } = store;

  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, []);
  return (
    <div className="w-full flex flex-col gap-3 h-96 justify-center items-center ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <h2>Thank you for your order!</h2>
        </div>
        <div className="flex flex-col text-grey gap-3">
          <div>
            {selectedBase ? (
              <motion.p variants={childVariants}>
                You ordered a {selectedBase} pizza with:
              </motion.p>
            ) : (
              <motion.p variants={childVariants}>No base selected</motion.p>
            )}
          </div>
          <motion.div variants={childVariants}>
            <ul>
              {selectedTopping.map((toppingId) => {
                const top = toppings?.find((t) => t.id === toppingId);
                return <li key={toppingId}>{top?.label}</li>;
              })}
            </ul>
          </motion.div>
        </div>
      </motion.div>
      {showModal && <Modal showModal={showModal} />}
    </div>
  );
};

export default Order;
