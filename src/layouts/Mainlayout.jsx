import React, { useContext } from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import { DataContext } from "../App";

const Mainlayout = () => {
  const { colorScheme, toggleColorScheme } = useContext(DataContext);
  const checkColorScheme = () =>
    colorScheme === "light" ? "/images/icon-moon.svg" : "/images/icon-sun.svg";
  return (
    <div className="cover-div">
      <div className="header">
        <img src="/images/logo.svg" alt="logo" />
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
      <>
        <Nav />
      </>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;
