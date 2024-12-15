import Label from "components/Label";
import Line from "components/Line";
import useCalculate from "hooks/useCalculate";
import React from "react";

const ExemplaryDay = () => {
  const { inputInfo, dailyPerformance } = useCalculate({});

  if (!inputInfo || !dailyPerformance) {
    return <></>;
  }

  const MiniTitle = ({
    title,
    children,
  }: React.PropsWithChildren<{ title: string }>) => {
    return (
      <div className="mb-8">
        <div className="font-semibold mb-2">* {title} </div>
        {children}
      </div>
    );
  };

  const SubTitle = ({ name }: { name: string }) => {
    return (
      <>
        <div className="font-semibold text-lg pt-8">{name}</div>
        <Line />
      </>
    );
  };

  return (
    <section className="py-4">
      {/* Basic Input */}
      <div>
        <SubTitle name={"Basic input information"} />
        <MiniTitle title={"The number of Points"}>
          <div className="grid grid-cols-[0.2fr_1fr]">
            {inputInfo.totalPointWithPower.map((p) => (
              <React.Fragment key={p.power}>
                <span className="pr-4">number: {p.point}</span>
                <span>power: {p.power} kW</span>
              </React.Fragment>
            ))}
          </div>
        </MiniTitle>
        <MiniTitle
          title={"Expected Car arrival - simulated based on 200 vehicles."}
        >
          {inputInfo.arrivalMulti}
        </MiniTitle>
        <MiniTitle title={"Car consumption power (kW)"}>
          {inputInfo.carConsumption}
        </MiniTitle>
      </div>

      <div>
        <SubTitle name={"Daily Charging Station Performance Metrics"} />
        <MiniTitle title={"Total Vehicles Charged"}>
          {dailyPerformance.chargingEvents}
        </MiniTitle>
        <MiniTitle title={"Average Charging Time per Vehicle"}>
          <>
            {dailyPerformance.chargeTime.map((t, i) => (
              <React.Fragment key={t.kw}>
                <div>
                  {t.time} hour per {t.kw} kW Point.
                </div>
              </React.Fragment>
            ))}
          </>
        </MiniTitle>
        <MiniTitle title={"Total Energy Dispensed"}>
          {dailyPerformance.totalEnergy} kW
        </MiniTitle>
      </div>
    </section>
  );
};

export default ExemplaryDay;
