import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <h2>Extensions List</h2>
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/active"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Active
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/inactive"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            InActive
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
