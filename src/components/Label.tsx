import React from "react";
import { twMerge } from "tailwind-merge";
import Line from "./Line";

export interface PLabel {
  name: string;
  labelClassname?: string;
  isHeader?: boolean;
}

const Label = ({ name, labelClassname = "", isHeader = true }: PLabel) => {
  return (
    <div className="">
      {isHeader && <span className="mr-1"> * </span>}
      <label className={twMerge("font-medium pr-2", labelClassname)}>
        {name}
      </label>
      {isHeader && <Line />}
    </div>
  );
};

export default Label;
