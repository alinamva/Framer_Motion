//rrd
import { Outlet } from "react-router-dom";
//components
import Header from "../components/Header";
const Main = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
