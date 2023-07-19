//rrd
import { Outlet } from "react-router-dom";
//components
import Header from "../components/Header";

const Main = () => {
  return (
    <div className="flex flex-col w-full h-screen p-10">
      {" "}
      <Header />
      <main className="flex items-center w-full h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
