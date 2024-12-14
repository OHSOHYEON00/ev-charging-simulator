import React from "react";
import NumberInput from "./NumberInput";
import { DEFAULT_POWER, EFormInput, EFormKeyName, IFormInput } from "types";
import Button from "components/Button";
import Label from "components/Label";
import Line from "components/Line";
import { Control, UseFormRegister } from "react-hook-form/dist/types";
import { useFieldArray } from "react-hook-form";

interface PDynamicList {
  register: UseFormRegister<IFormInput>;
  control: Control<IFormInput>;
}

const DynamicList = ({ register, control }: PDynamicList) => {
  const {
    remove: removePoint,
    fields: pointFields,
    append: appendPoint,
  } = useFieldArray({
    control,
    name: EFormInput["chargingPoints"],
  });

  const {
    remove: removePower,
    fields: powerFields,
    append: appendPower,
  } = useFieldArray({
    control,
    name: EFormInput["chargingPower"],
  });

  const addItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const id = Math.random();
    appendPoint({ id, value: 0 });
    appendPower({ id, value: DEFAULT_POWER });
  };

  const deleteItem = (index: number) => {
    removePoint(index);
    removePower(index);
  };

  return (
    <section className="grid text-center gap-4 grid-cols-[min-content_1fr_1fr]">
      <div></div>
      <Label
        name="Number of charge points"
        labelClassname={"m-0"}
        isHeader={false}
      />
      <Label
        name="Charging power per charge point"
        labelClassname={"m-0"}
        isHeader={false}
      />
      {pointFields.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 ? (
            <Button
              className={`md:text-sm font-semibold text-red-500 sm:text-xs`}
              title="remove"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                deleteItem && deleteItem(index);
              }}
            />
          ) : (
            <div></div>
          )}
          <NumberInput
            id={`chargingPoints.${index}.value` as const}
            defaultValue={item.value}
            register={register}
            errorName={EFormKeyName["chargingPoints"]}
          />
          <NumberInput
            id={`chargingPower.${index}.value` as const}
            suffix="kW"
            defaultValue={pointFields[index].value}
            register={register}
            errorName={EFormKeyName["chargingPower"]}
          />
        </React.Fragment>
      ))}
      <Line />
      <Button title="Add" onClick={addItem} type="submit" />
    </section>
  );
};

export default React.memo(DynamicList);
