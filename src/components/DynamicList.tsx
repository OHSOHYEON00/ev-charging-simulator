import React, { useState } from "react";
import NumberInput from "./NumberInput";
import { EFormInput } from "types";
import Button from "./Button";
import Label from "./Label";
import Line from "./Line";

interface TItem {
  id: number;
  num: number;
  power: number;
}

interface PDefaultItem extends TItem {
  isShowDelete?: boolean;
  deleteItem?: (id: number) => void;
}

const DefaultItem = ({
  isShowDelete = false,
  num,
  power,
  deleteItem,
  id,
}: PDefaultItem) => {
  const onClickDeleteBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteItem && deleteItem(id);
  };

  return (
    <>
      {isShowDelete ? (
        <Button
          className={`md:text-sm font-semibold text-red-500 sm:text-xs`}
          title="remove"
          onClick={onClickDeleteBtn}
        />
      ) : (
        <div></div>
      )}
      <NumberInput key={EFormInput["chargingPoints"]} defaultValue={num} />
      <NumberInput
        key={EFormInput["chargingPower"]}
        suffix="kW"
        defaultValue={power}
      />
    </>
  );
};

const DynamicList = () => {
  const [list, setList] = useState<TItem[]>([
    {
      id: Math.random(),
      num: 0,
      power: 11,
    },
  ]);

  const addItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newItem = {
      id: Math.random(),
      num: 0,
      power: 11,
    };
    setList((pre) => [...pre, newItem]);
  };

  const deleteItem = (id: number) => {
    const filtered = list.filter((item) => item.id !== id);

    setList(filtered);
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
      {list.map((item, index) => (
        <DefaultItem
          key={item.id}
          {...item}
          isShowDelete={index > 0}
          deleteItem={deleteItem}
        />
      ))}
      <Line />
      <Button title="Add" onClick={addItem} type="submit" />
    </section>
  );
};

export default React.memo(DynamicList);
