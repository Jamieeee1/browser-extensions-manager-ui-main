import React, { useContext } from "react";
import { DataContext } from "../App";
import Individual from "./Individual";

const Inactive = () => {
  const { inActiveData } = useContext(DataContext);
  return (
    <div className="items-container">
      {inActiveData.map((item) => (
        <Individual item={item} />
      ))}
    </div>
  );
};

export default Inactive;
