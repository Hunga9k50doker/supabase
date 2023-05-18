import React from "react";
interface TagProps {
  title: string;
}
const Tag = ({ title }: TagProps) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-opacity-10 bg-secondary text-secondary border border-secondary">
      {title}
    </span>
  );
};

export default Tag;
