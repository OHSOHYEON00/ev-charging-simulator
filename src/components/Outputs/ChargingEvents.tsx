import useCalculate from "hooks/useCalculate";
import React from "react";

const ChargingEvents = () => {
  const { chargingEvents, formatNumberWithCommas } = useCalculate({});

  if (typeof chargingEvents !== "number") {
    return <div></div>;
  }

  return (
    <div className="flex flex-col gap-1">
      <>
        <div>
          <span>per day</span>: {formatNumberWithCommas(chargingEvents)}
        </div>
        <div>
          <span>per week</span>: {formatNumberWithCommas(chargingEvents * 7)}
        </div>
        <div>
          <span>per month</span>: {formatNumberWithCommas(chargingEvents * 30)}
        </div>
        <div>
          <span>per year</span>: {formatNumberWithCommas(chargingEvents * 365)}
        </div>
      </>
    </div>
  );
};

export default ChargingEvents;
