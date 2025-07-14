import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom"; // ✅ use router-dom
import { FaGooglePlay } from "react-icons/fa";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, lognOut } = useContext(AuthContext);

  const handleLogout = () => {
    lognOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out!",
          text: "You have been logged out successfully.",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops!",
          text: error.message,
          icon: "error",
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myprofile"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/kids"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : ""
          }
        >
          Kids
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="navbar container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo & Play Store */}
        <div className="flex items-center gap-4">
          <button className="btn bg-black text-white hover:bg-gray-900">
            <FaGooglePlay size={20} />
            <span className="hidden sm:inline">Google Play</span>
          </button>
          <h1 className="text-2xl font-bold text-amber-500">MyAppBD</h1>
        </div>

        {/* Center: Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-lg font-medium">
            {links}
          </ul>
        </div>

        {/* Right: User & Auth */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300"
                title={user.displayName}
              />
              <button onClick={handleLogout} className="btn btn-warning">
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth/login" className="btn btn-neutral">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
