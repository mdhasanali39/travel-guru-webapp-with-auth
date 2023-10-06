import { Outlet } from "react-router-dom";
import Header from "../shared-components/Header/Header";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="font-Montserrat">
      <Header></Header>
      <div className="max-w-[1300px] mx-auto px-5">
        <Outlet></Outlet>
      </div>
      <Toaster/>
    </div>
  );
};

export default MainLayout;
