import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();


  return (
    <nav className="">
      <ul className={`flex gap-6 items-center ${location.pathname === '/' ? 'text-white' : 'text-black'}`}>
        <li className="font-medium">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#F9A51A] underline" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="font-medium">
          <NavLink
            to="/news"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#F9A51A] underline" : ""
            }
          >
            News
          </NavLink>
        </li>
        <li className="font-medium">
          <NavLink
            to="/destination"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#F9A51A] underline" : ""
            }
          >
            Destination
          </NavLink>
        </li>
        <li className="font-medium">
          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#F9A51A] underline" : ""
            }
          >
            Blog
          </NavLink>
        </li>
        <li className="font-medium">
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#F9A51A] underline" : ""
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
            <Link 
             to={'/login'}
            type="button"
             className="font-medium px-4 py-3
             text-white
              bg-[#F9A51A] rounded-md"
             >
                Login
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
