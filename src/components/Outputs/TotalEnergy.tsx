import { useDataContext } from "components/context/useDataContext";
import React from "react";

const TotalEnergy = () => {
  const { data } = useDataContext();
  console.log("result", data);

  return <div></div>;
};

export default TotalEnergy;
