//rrd
import { Link } from "react-router-dom";

const Base = ({ store, bases }) => {
  const { selectedBase, setSelectedBase } = store;
  const handleBaseClick = (base: string) => {
    setSelectedBase(base);
  };
  return (
    <div className="flex flex-col m-auto justify-center items-center h-96 gap-3">
      <div className="border-b border-gray text-white py-3">
        <h2>Step 1: Choose Your Base</h2>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {bases.map((base) => {
            const isActive = selectedBase === base;
            return (
              <li key={base} onClick={() => handleBaseClick(base)}>
                <span
                  className={`cursor-pointer ${
                    isActive ? "text-active" : "text-white"
                  }`}
                >
                  {base}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      {selectedBase && (
        <div className="btn">
          <Link to="/topping">
            <span>Next</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
