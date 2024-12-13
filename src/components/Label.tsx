import React from "react";
import { twMerge } from "tailwind-merge";

export interface PLabel {
  name: string;
  labelClassname?: string;
  isHeader?: boolean;
}

const Label = ({ name, labelClassname = "", isHeader = true }: PLabel) => {
  return (
    <div className="">
      {isHeader && <span className="mr-1"> * </span>}
      <label className={twMerge("font-medium", labelClassname)}>{name}</label>
      {isHeader && (
        <div className="my-4 col-span-full drop-shadow-sm border-box border "></div>
      )}
    </div>
  );
};

export default Label;
