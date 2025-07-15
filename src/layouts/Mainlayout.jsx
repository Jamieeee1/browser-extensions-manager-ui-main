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
        <img src="/images/logo.svg" className="logo" alt="logo" />
        <div>
          <label htmlFor="color-scheme" className="switch-color">
            <input
              type="checkbox"
              name=""
              onChange={toggleColorScheme}
              id="color-scheme"
              hidden
            />
            <span className="custom-checkbox">
              <img src={checkColorScheme()} alt="color-sector" />
            </span>
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
