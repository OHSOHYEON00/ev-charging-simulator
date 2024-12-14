import DynamicList from "./DynamicList";
import Label from "components/Label";
import NumberInput from "components/Inputs/NumberInput";
import React from "react";
import { DEFAULT_POWER, EFormInput, EFormKeyName, IFormInput } from "types";
import { useForm } from "react-hook-form";

interface PInputs {
  onValid: (data: IFormInput) => void;
}

const Inputs = ({ onValid }: PInputs) => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    defaultValues: {
      chargingPoints: [
        {
          id: 1,
          value: 0,
        },
      ],
      chargingPower: [
        {
          id: 1,
          value: DEFAULT_POWER,
        },
      ],
    },
    mode: "onSubmit",
  });

  const errorNameList: (keyof typeof EFormKeyName)[] = Object.keys(
    errors
  ) as (keyof typeof EFormKeyName)[];

  return (
    <section>
      <div className="font-semibold text-2xl mb-4">Input parameters</div>
      {errorNameList.length > 0 && (
        <div className="text-red-500 mb-12">
          {errorNameList.map((name, index) => (
            <span key={name} role="alert" className="mr-1 ">
              {EFormKeyName[name]}
              {index < errorNameList.length - 1 && ","}
            </span>
          ))}
          must be greater than 0.
        </div>
      )}

      <form className="flex flex-col" onSubmit={handleSubmit(onValid)}>
        <div className="flex justify-between lg:flex-row flex-col gap-24 ">
          <div>
            <Label name="Add Charging points" />
            <DynamicList register={register} control={control} />
          </div>

          <div className="flex lg:flex-row flex-col gap-24">
            <NumberInput
              name={EFormKeyName["carConsumption"]}
              id={EFormInput["carConsumption"]}
              suffix="kWh"
              defaultValue={18}
              classNames={"col-start-2"}
              register={register}
              errorName={EFormKeyName["carConsumption"]}
            />

            <NumberInput
              name={EFormKeyName["arrivalProbability"]}
              id={EFormInput["arrivalProbability"]}
              suffix={"%"}
              defaultValue={100}
              register={register}
              errorName={EFormKeyName["arrivalProbability"]}
            />
          </div>
        </div>
        <div className="text-end">
          <input
            type="submit"
            value={"Simulate"}
            className="cursor-pointer bg-button text-slate-50 border rounded-lg w-28 p-1 border-box"
          />
        </div>
      </form>
    </section>
  );
};

export default Inputs;
