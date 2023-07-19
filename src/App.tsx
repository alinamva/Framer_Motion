//rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//components
import Base from "./components/Base";
import Home from "./components/Home";
import Order from "./components/Order";
import Topping from "./components/Topping";
import Main from "./layouts/Main";
import { useStore } from "./store";

function App() {
  const store = useStore();
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const toppings = [
    { id: 1, label: "mushrooms" },
    { id: 2, label: "peppers" },
    { id: 3, label: "onions" },
    { id: 4, label: "olives" },
    { id: 5, label: "extra cheese" },
    { id: 6, label: "tomatoes" },
  ];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/base",
          element: <Base store={store} bases={bases} />,
        },
        {
          path: "/topping",
          element: <Topping store={store} toppings={toppings} />,
        },
        {
          path: "/order",
          element: <Order store={store} toppings={toppings} />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
