import React from "react";
import { InputProps } from "../interfaces/interface";

const Input = ({ inputType, id, label, placeholder, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={inputType || "text"}
        {...rest}
        id={id}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder={placeholder || ""}
        autoComplete="on"
      />
    </div>
  );
};

export default Input;
