import React, { useContext } from "react";
import { DataContext } from "../App";
import Individual from "./Individual";

const Active = () => {
  const { activeData } = useContext(DataContext);
  return (
    <div className="items-container">
      {activeData.map((item, key) => (
        <Individual item={item} />
      ))}
    </div>
  );
};

export default Active;
