import Collapse from "components/Collapse";
import React from "react";
import ChargingValueTable from "./ChargingValueTable";
import ExemplaryDay from "./ExemplaryDay";
import TotalEnergy from "./TotalEnergy";
import ChargingEvents from "./ChargingEvents";
import ChargingInsights from "./ChargingInsights";

const Outputs = () => {
  return (
    <section className="mt-24 pb-24">
      <div className="font-semibold text-2xl mb-8">Simulator results</div>

      <Collapse title="The charging value per charging point">
        <ChargingValueTable />
      </Collapse>

      <Collapse title="An exemplary day">
        <ExemplaryDay />
      </Collapse>

      <Collapse title="The total energy charged">
        <TotalEnergy />
      </Collapse>

      <Collapse title="The number of charging events">
        <ChargingEvents />
      </Collapse>

      <Collapse title="Charging Insights">
        <ChargingInsights />
      </Collapse>
    </section>
  );
};

export default Outputs;
