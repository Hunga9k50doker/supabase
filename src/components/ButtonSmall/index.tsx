import React from "react";
interface ButtonProps {
  className?: string;
  title: string;
  type: "button" | "submit" | "reset";
  children?: any;
}
const ButtonSmall = ({ title, type, className, children }: ButtonProps) => {
  return (
    <button
      className={`relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 bg-scale-100 hover:bg-scale-300 shadow-scale-600 hover:shadow-scale-700 dark:shadow-scale-1100 hover:dark:shadow-scale-800 dark:bg-scale-550 dark:text-white hover:dark:bg-scale-850 focus-visible:outline-secondary  shadow-sm text-xs px-2.5 py-1 truncate  ${
        className ? className : ""
      }`}
      type={type ? type : "button"}
    >
      {title}
      {children}
    </button>
  );
};

export default ButtonSmall;
