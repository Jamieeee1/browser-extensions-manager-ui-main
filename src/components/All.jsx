import React, { useContext } from "react";
import { DataContext } from "../App";
import Individual from "./Individual";

const All = () => {
  const { dataState } = useContext(DataContext);
  return (
    <div className="items-container">
      {dataState.map((item, key) => (
        <Individual item={item} />
      ))}
    </div>
  );
};

export default All;
