import DynamicList from "components/DynamicList";
import Label from "components/Label";
import NumberInput from "components/NumberInput";
import React from "react";
import { EFormInput } from "types";

const Inputs = () => {
  return (
    <section>
      <div className="font-semibold text-2xl mb-12">Input parameters</div>

      <form className="flex  lg:flex-row flex-col gap-24 ">
        <div>
          <Label name="Add Charging points" />
          <DynamicList />
        </div>

        <div className="flex lg:flex-row flex-col gap-24">
          <NumberInput
            name="Car Consumption"
            key={EFormInput["carConsumption"]}
            suffix="kWh"
            defaultValue={18}
            classNames={"col-start-2"}
          />

          <NumberInput
            name="Arrival Probability Multiplier"
            key={EFormInput["arrivalProbability"]}
            suffix={"%"}
            defaultValue={100}
          />
        </div>
      </form>
    </section>
  );
};

export default Inputs;
