import React from "react";
import { IBtn } from "../interfaces/interface";

const ButtonComponent = ({ color, text,width="w-full", ...rest }: IBtn) => {
  return (
    <button
      className={`text-white  p-1 text-center shadow-md cursor-pointer shadow-indigo-300  ${width} rounded-md ${color}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
