//rrd
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex m-auto justify-center h-96">
      <div className="flex flex-col gap-5 justify-center items-center ">
        <h1>Welcome to Pizza Joint</h1>
        <div className="border rounded-full border-white py-2 px-4 text-xl">
          <Link to="/base">
            <span>Create Your Pizza</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
