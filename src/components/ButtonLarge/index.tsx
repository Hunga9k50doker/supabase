import React from "react";
interface ButtonProps {
  className?: string;
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  children?: any;
}
const ButtonLarge = ({ title, type, className, children }: ButtonProps) => {
  return (
    <button
      className={`gap-2 truncate relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 bg-scale-100 hover:bg-scale-300 shadow-scale-600 hover:shadow-scale-700 dark:shadow-scale-700 hover:dark:shadow-scale-800 dark:bg-bgBlackColor dark:hover:bg-scale-600 focus-visible:outline-brand-600 dark:text-white shadow-sm leading-4 px-3 py-2 text-sm ${
        className ? className : ""
      }`}
      type={type}
    >
      {title}
      {children}
    </button>
  );
};

export default ButtonLarge;
