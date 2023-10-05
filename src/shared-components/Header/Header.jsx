import logo from "../../assets/logo.png";
import logoBlack from "../../assets/logo-black.png";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar";
import "./Header.css";
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();

  return (
    <header className={`${location.pathname === '/' && 'overlay min-h-screen'}`}>
      <div className="max-w-[1300px] mx-auto px-5 py-8">
        <div className="flex justify-between items-center">
          {/* logo here  */}
          <div>
            <img src={location.pathname === '/' ? logo : logoBlack} />
          </div>
          <Navbar></Navbar>
        </div>
        {
          location.pathname === '/' && <Banner></Banner>
        }
        
      </div>
    </header>
  );
};

export default Header;
