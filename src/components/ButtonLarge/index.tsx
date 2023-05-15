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
      className={`border gap-2 truncate relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 bg-scale-100 hover:bg-scale-300 bordershadow-scale-600 hover:bordershadow-scale-700 dark:bordershadow-scale-700 hover:dark:bordershadow-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 focus-visible:outline-brand-600  shadow-sm text-sm leading-4 px-3 py-2 ${className}`}
      type={type}
    >
      {title}
      {children}
    </button>
  );
};

export default ButtonLarge;
