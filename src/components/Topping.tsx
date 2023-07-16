import { Link } from "react-router-dom";

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
          <h2>Step 1: Choose Your Base</h2>
        </div>
        <div>
          <ul className="flex flex-col gap-2 items-start ">
            {toppings?.map((topping) => {
              const isActive = selectedTopping.includes(topping.id);
              return (
                <li
                  key={topping.id}
                  className="cursor-pointer "
                  onClick={() => handleToppingSelection(topping.id)}
                >
                  <span
                    className={`cursor-pointer ${
                      isActive ? "text-active" : "text-grey"
                    }`}
                  >
                    {topping.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="btn">
          <Link to="/order">
            <span>Order</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topping;
