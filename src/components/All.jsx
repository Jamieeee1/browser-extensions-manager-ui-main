import React, { useContext } from "react";
import { DataContext } from "../app";

const All = () => {
  const { dataState } = useContext(DataContext);
  console.log(dataState);
  return (
    <div className="all-container">
      {dataState.map((item, key) => (
        <div id={key}>
          <div>
            <img src={item.logo} alt="" />
            <div>
              <h3> {item.name} </h3>
              <p>{item.description}</p>
            </div>
          </div>
          <div>
            <button>Remove</button>

            <label class="switch">
              <input type="checkbox" hidden />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default All;
