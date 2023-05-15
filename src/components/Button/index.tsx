import React from "react";
interface ButtonProps {
  className?: string;
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  children?: any;
}
const Button = ({ title, type, className, children }: ButtonProps) => {
  return (
    <button className={className} type={type}>
      {title}
      {children}
    </button>
  );
};

export default Button;
