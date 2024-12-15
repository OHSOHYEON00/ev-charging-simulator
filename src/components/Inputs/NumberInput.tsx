import React from "react";
import { twMerge } from "tailwind-merge";
import { IFormInput, IFormInputKeys, TFormDynamicInput } from "types";
import Label, { PLabel } from "../Label";
import { UseFormRegister } from "react-hook-form";

interface NumberInputProps extends Partial<PLabel> {
  suffix?: string;
  id: IFormInputKeys;
  defaultValue?: number;
  disable?: boolean;
  classNames?: string;
  register: UseFormRegister<IFormInput>;
  errorName?: string;
}

const NumberInput = ({
  name,
  defaultValue = 0,
  disable = false,
  suffix,
  classNames,
  register,
  id,
  errorName,
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
          {...register(id, {
            required: true,
            valueAsNumber: true,
            validate: (
              item: number | TFormDynamicInput | TFormDynamicInput[]
            ) =>
              Array.isArray(item)
                ? ""
                : typeof item === "object"
                ? item.value > 0 || `${errorName}`
                : item > 0 || `${errorName}`,
          })}
        />
        {suffix && <span className="ml-1">{suffix}</span>}
      </div>
    </div>
  );
};

export default NumberInput;
