import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../shared-components/Header/Header";

const MainLayout = () => {
  return (
    <div className="font-Montserrat">
      <Header></Header>
      <div className="max-w-[1300px] mx-auto px-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
