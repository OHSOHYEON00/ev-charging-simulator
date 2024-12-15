import Collapse from "components/Collapse";
import React from "react";
import ChargingValueTable from "./ChargingValueTable";
import ExemplaryDay from "./ExemplaryDay";
import TotalEnergy from "./TotalEnergy";
import ChargingEvents from "./ChargingEvents";
import ChargingInsights from "./ChargingInsights";

const Outputs = () => {
  return (
    <section>
      <Collapse title="The Charging Value per charging point">
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
