import React from "react";
import { IBtn } from "../interfaces/interface";

const ButtonComponent = ({ color, text }: IBtn) => {
  return (
    <div
      className={`text-white  p-1 text-center shadow-md cursor-pointer shadow-indigo-300  w-full rounded-md ${color}`}
    >
      {text}
    </div>
  );
};

export default ButtonComponent;
