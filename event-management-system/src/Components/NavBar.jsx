// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 dark:bg-slate-900 ">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-bold text-indigo-600">College Events</h1>
        <div>
            <Link to="/admin/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium dark:text-white">DashBoard</Link>
        </div>
        <div className="space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium dark:text-white">
            Login
          </Link>
          <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-500 transition">
            Register
          </Link>
        </div>
        <div>
            <DarkModeToggle/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
