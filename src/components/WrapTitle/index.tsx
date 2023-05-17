import React from "react";

interface WrapTitleProps {
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  style?: any;
  className?: string;
  className_subttile?: string;
  className_title?: string;
  className_description?: string;
  children?: React.ReactNode;
}
const WrapTitle = ({
  title,
  subtitle,
  description,
  style,
  className,
  className_subttile,
  className_title,
  className_description,
  children,
}: WrapTitleProps) => {
  return (
    <div
      className={
        className ? className : "mx-auto max-w-3xl space-y-2 lg:max-w-none"
      }
    >
      <h1
        className={`text-secondary da ${
          className_subttile ? className_subttile : ""
        }`}
      >
        {subtitle}
      </h1>
      <h2
        className={`text-scale-1200 dark:text-scale-150 text-xl sm:text-2xl sm:leading-none lg:text-3xl xl:text-4xl h2 ${
          className_title ? className_title : ""
        }`}
      >
        {title}
      </h2>
      <p
        className={`p text-lg text-scale-1100 ${
          className_description ? className_description : ""
        }`}
        style={style ? style : { marginBottom: "16px !important" }}
      >
        {description}
      </p>
      {children}
    </div>
  );
};

export default WrapTitle;
