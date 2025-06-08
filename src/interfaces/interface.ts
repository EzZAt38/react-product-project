import{ InputHTMLAttributes } from "react";
import { ButtonHTMLAttributes, ReactNode } from "react";
export interface IBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  text: string;
  width?: "w-full" | "w-fit";
}
export interface Icard {
  productImage: string;
  productname: string;
  description: string;
  price: string;
  children?: ReactNode;
}
// this class is maked to make code more readable
export const styles = {
  submit: "bg-indigo-700 shadow-indigo-400 hover:bg-indigo-900",
  delete: "bg-red-700 shadow-red-400 hover:bg-red-900",
  icardparents: "border rounded-md p-2 flex flex-col justify-between",
  responsiveScreen:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3 ",
  icardHeader: "header flex flex-col justify-around",
  ballsParent: "list-none flex max-w-[25%] justify-between my-2",
  majorBallStyle: "rounded-full w-3 h-3",
  categoryAndPrice: "flex items-center justify-between",
};
/**
 *
 * @param {string} txt  => this is the text param , it will have been sliced
 * @param {number} max  => this the max number of chars in the text
 * @returns  => it returns a new text the text is sliced of the text param
 */
export function textLenther(txt: string, max: number = 100) {
  if (txt.length >= max) {
    return `${txt.slice(0, max)} ...`;
  } else return txt;
}
export interface MyModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children: ReactNode;
}
// Define the interface for the Input component props
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeholder?: string;
  inputType?: "text" | "email" | "password" | "number";
}