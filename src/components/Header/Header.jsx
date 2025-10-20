import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks/NavLinks";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLinks to={"/"} address={"Home"} />
      </li>
      <li>
        <NavLinks to={"/services"} address={"Services"} />
      </li>
      <li>
        <NavLinks to={"/projects"} address={"Projects"} />
      </li>
      <li>
        <NavLinks to={"/out-team"} address={"Our Team"} />
      </li>
      <li>
        <NavLinks to={"/contact"} address={"Contact"} />
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="font-bold gap-0 text-2xl">
          <span className="text-yellow-500 italic">Build</span>Master
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Header;
