import React from "react";
import { useSelector } from "react-redux";
import Fixed from "../components/Fixed";
const FixedContainer = () => {
  const test = useSelector((state) => state.fixed.test);

  return <Fixed test={test} />;
};

export default FixedContainer;
