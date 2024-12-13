import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface PButton extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  type?: "basic" | "submit";
}

const Button = ({ title, className, type = "basic", ...props }: PButton) => {
  return (
    <button
      className={twMerge(
        "text-center",
        `${
          type === "submit" &&
          "bg-blue-500 text-slate-50 border rounded-lg w-[70px] p-1 border-box"
        }`,
        className
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
