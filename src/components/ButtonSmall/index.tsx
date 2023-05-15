import React from "react";
interface ButtonProps {
  className?: string;
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  children?: any;
}
const ButtonSmall = ({ title, type, className, children }: ButtonProps) => {
  return (
    <button
      className={`border relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 text-scale-1200 bordershadow-scale-600 hover:bordershadow-scale-700 dark:bordershadow-scale-700 hover:dark:bordershadow-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 focus-visible:outline-brand-600  shadow-sm text-xs px-2.5 py-1 hidden lg:block truncate  ${className}`}
      type={type}
    >
      {title}
      {children}
    </button>
  );
};

export default ButtonSmall;
