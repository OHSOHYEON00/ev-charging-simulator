import React from "react";
import Inputs from "../components/Inputs/Inputs";
import { SubmitHandler } from "react-hook-form";
import { IFormInput } from "types";

const Simulator = () => {
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Inputs onValid={onSubmit} />
    </div>
  );
};

export default Simulator;
