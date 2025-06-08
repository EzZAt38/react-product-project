import { InputHTMLAttributes } from "react";
import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Button component props interface.
 * Extends the default HTML button attributes and adds custom props.
 */
export interface IBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string; // Tailwind color classes for button background
  text: string;  // Button display text
  width?: "w-full" | "w-fit"; // Optional width utility class
}

/**
 * Product card props interface.
 * Represents the shape of a product object and its children (usually action buttons).
 */
export interface Icard {
  productImage: string;   // URL for the product image
  productname: string;    // Name/title of the product
  description: string;    // Product description
  price: string;          // Product price
  children?: ReactNode;   // Optional: React children (e.g., action buttons)
}

/**
 * Centralized style/class name definitions for consistency across the app.
 */
export const styles = {
  submit: "bg-indigo-700 shadow-indigo-400 hover:bg-indigo-900", // Submit button style
  delete: "bg-red-700 shadow-red-400 hover:bg-red-900",         // Delete button style
  icardparents: "border rounded-md p-2 flex flex-col justify-between", // Card container style
  responsiveScreen: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3 ", // Responsive grid
  icardHeader: "header flex flex-col justify-around",            // Card header style
  ballsParent: "list-none flex max-w-[25%] justify-between my-2",// Decorative balls container
  majorBallStyle: "rounded-full w-3 h-3",                       // Decorative ball style
  categoryAndPrice: "flex items-center justify-between",         // Category and price row
};

/**
 * Utility function to slice a string to a maximum length and append ellipsis if needed.
 * @param {string} txt - The text to slice.
 * @param {number} max - The maximum number of characters allowed (default: 100).
 * @returns {string} - The sliced text with ellipsis if it exceeds max length.
 */
export function textLenther(txt: string, max: number = 100): string {
  if (txt.length >= max) {
    return `${txt.slice(0, max)} ...`;
  }
  return txt;
}

/**
 * Modal dialog props interface.
 * Used for the modal component to control visibility and content.
 */
export interface MyModalProps {
  isOpen: boolean;           // Controls if the modal is open
  closeModal: () => void;    // Function to close the modal
  title?: string;            // Optional modal title
  children: ReactNode;       // Modal content (form, buttons, etc.)
}

/**
 * Input component props interface.
 * Extends default HTML input attributes and adds custom props for label and type.
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;                // Unique identifier for the input
  label: string;             // Label text for the input
  placeholder?: string;      // Optional placeholder text
  inputType?: "text" | "email" | "password" | "number"; // Optional input type
}
