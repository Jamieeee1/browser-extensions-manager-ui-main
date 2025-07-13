import React, { useContext } from "react";
import { DataContext } from "../App";

const Individual = ({ item }) => {
  const { toggleActiveStatus, removeExtension } = useContext(DataContext);
  return (
    <div>
      <div>
        <img src={item.logo} alt="" />
        <div>
          <h3> {item.name} </h3>
          <p>{item.description}</p>
        </div>
      </div>
      <div>
        <button
          className="remove-btn"
          onClick={() => removeExtension(item.name)}
        >
          Remove
        </button>

        <label className="switch">
          <input
            type="checkbox"
            onChange={() => toggleActiveStatus(item.name)}
            hidden
            checked={item.isActive ? true : false}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Individual;
