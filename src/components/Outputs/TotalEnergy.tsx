import useCalculate from "hooks/useCalculate";
import React from "react";

const TotalEnergy = () => {
  const { totalEnergy, formatNumberWithCommas } = useCalculate({});

  if (typeof totalEnergy !== "number") {
    return <div></div>;
  }

  return (
    <div>
      <span>Total energy charged</span>: {formatNumberWithCommas(totalEnergy)}
    </div>
  );
};

export default TotalEnergy;
