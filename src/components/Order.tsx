const Order = ({ store, selectedTopping, toppings }) => {
  const { selectedBase } = store;

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-96">
      <div>
        <h2>Thank you for your order!</h2>
      </div>
      <div className="flex flex-col text-grey gap-3">
        <div>
          {selectedBase ? (
            <p>You ordered a {selectedBase} pizza with:</p>
          ) : (
            <p>No base selected</p>
          )}
        </div>
        <div>
          <ul>
            {selectedTopping?.map((toppingId) => {
              const top = toppings?.find((t) => t.id === toppingId);
              return <li key={toppingId}>{top.label}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Order;
