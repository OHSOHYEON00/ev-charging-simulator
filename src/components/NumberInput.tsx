import React from "react";
import { twMerge } from "tailwind-merge";
import { EFormInput } from "types";
import Label, { PLabel } from "./Label";

interface NumberInputProps extends Partial<PLabel> {
  suffix?: string;
  key: EFormInput;
  defaultValue?: number;
  disable?: boolean;
  classNames?: string;
}

const NumberInput = ({
  name,
  defaultValue = 0,
  disable = false,
  suffix,
  classNames,
}: NumberInputProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-4",
        `${disable ? "text-gray-400" : ""}`,
        classNames
      )}
    >
      {name && <Label name={name} />}
      <div className={`${name ? "ml-4" : ""}`}>
        <input
          className="border text-right rounded-lg w-[70px] p-1 border-box"
          defaultValue={defaultValue}
          type="number"
          disabled={disable}
        />
        {suffix && <span className="ml-1">{suffix}</span>}
      </div>
    </div>
  );
};

export default NumberInput;
