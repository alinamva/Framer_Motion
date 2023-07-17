import { Link } from "react-router-dom";
//library
import { motion } from "framer-motion";
const Topping = ({ store, toppings }) => {
  const { selectedTopping, setSelectedTopping } = store;
  const handleToppingSelection = (toppingId) => {
    if (selectedTopping.includes(toppingId)) {
      setSelectedTopping(selectedTopping.filter((id) => id !== toppingId));
    } else {
      setSelectedTopping([...selectedTopping, toppingId]);
    }
  };

  return (
    <div className="flex">
      <div className="w-full flex flex-col gap-3 h-96 justify-center items-center ">
        <div className="border-b border-gray text-white py-3">
          <h2>Step 1: Choose the Toppings</h2>
        </div>
        <div>
          <ul className="flex flex-col gap-2 items-start ">
            {toppings?.map((topping) => {
              const isActive = selectedTopping.includes(topping.id);
              return (
                <motion.li
                  whileHover={{ scale: 1.3, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={topping.id}
                  className="cursor-pointer "
                  onClick={() => handleToppingSelection(topping.id)}
                >
                  <motion.span
                    whileHover={{ color: "#f8e112" }}
                    className={`cursor-pointer ${
                      isActive ? "text-active" : "text-grey"
                    }`}
                  >
                    {topping.label}
                  </motion.span>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <Link to="/order">
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,,255,255)",
              boxShadow: "0px 0px 8px rgb(255,,255,255)",
            }}
            className="btn"
          >
            <span>Order</span>
          </motion.div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Topping;
