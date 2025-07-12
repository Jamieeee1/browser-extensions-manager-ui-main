import React, { useContext } from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import logo from "../../Public/images/logo.svg";
import dark from "../../Public/images/icon-moon.svg";
import light from "../../Public/images/icon-sun.svg";
import { DataContext } from "../App";

const Mainlayout = () => {
  const { colorScheme, toggleColorScheme } = useContext(DataContext);
  const checkColorScheme = () => (colorScheme === "light" ? dark : light);
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <div>
          <label htmlFor="color-scheme" className="switch-color">
            <img src={checkColorScheme()} alt="" />
            <input
              type="checkbox"
              name=""
              onChange={toggleColorScheme}
              id="color-scheme"
              hidden
            />
          </label>
        </div>
      </div>
      <nav className="nav">
        <Nav />
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default Mainlayout;
