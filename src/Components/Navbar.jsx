import React from "react";
import { Link, NavLink } from "react-router";

import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li className="text-xl">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          Apps{" "}
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to="/my-profile"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          My Profile
        </NavLink>
      </li>
      <li className="text-xl">
        <NavLink
          to="/kids"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          Kids
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn bg-black text-white border-black ">
            <FaGooglePlay size={30} /> Google Play Store
          </button>
          <h2 className="text-2xl font-semibold text-amber-500">MyAppBD</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/auth/login" className="btn btn-neutral px-6">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
