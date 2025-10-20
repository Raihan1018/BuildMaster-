import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ to, address }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-yellow-500 font-semibold text-xl underline" : "text-xl"
      }
    >
      {address}
    </NavLink>
  );
};

export default NavLinks;
