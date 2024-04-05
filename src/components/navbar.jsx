import LOGO from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b fixed top-0 left-0 right-0 bg-[#e4e4e4]">
      <div className="flex justify-between mx-32 h-[80px] items-center">
        <div>
          <img src={LOGO} alt="logo" width={200} />
        </div>
        <div>
          <ul className="flex gap-10 items-center">
            <li className="hover:text-cyan-500 hover:underline underline-offset-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline text-cyan-500" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-cyan-500 hover:underline underline-offset-4">
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive ? "underline text-cyan-500" : ""
                }
              >
                Jobs
              </NavLink>
            </li>
            <li className="hover:text-cyan-500 hover:underline underline-offset-4">
              Companies
            </li>
            <li className="hover:text-cyan-500 hover:underline underline-offset-4">
              About us
            </li>
            <button className="bg-cyan-500 text-white border-2 border-cyan-500 p-2 rounded hover:text-cyan-500 hover:bg-white">
              Sign Up
            </button>
            <button className="text-cyan-500 bg-white border-2 border-cyan-500 p-2 rounded hover:text-white hover:bg-cyan-500">
              Post a Job
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
