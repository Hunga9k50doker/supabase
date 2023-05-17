/* eslint-disable react/no-unescaped-entities */
"use client";
import { DropdownIcon } from "@/assets/icons";
import React, { useState } from "react";

interface CollapseProps {
  title: string;
  description: string;
}
const Collapse = ({ title, description }: CollapseProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="border-b pb-3 dark:border-scale-1250">
      <div
        data-state={isActive ? "open" : "colosed"}
        data-orientation="vertical"
        className=" group first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md overflow-hidden "
      >
        <button
          onClick={() => setIsActive(!isActive)}
          type="button"
          aria-controls="radix-0"
          aria-expanded="true"
          data-state={isActive ? "open" : "colosed"}
          data-orientation="vertical"
          id="radix-1"
          className="flex flex-row gap-3 items-center w-full text-left cursor-pointer outline-none focus-visible:ring-1 focus-visible:z-10 ring-scale-1100  justify-between"
          data-radix-collection-item=""
        >
          <span className="text-scale-1200 text-sm dark:text-scale-150">
            {title}
          </span>
          <DropdownIcon />
        </button>
        <div
          data-state={isActive ? "open" : "colosed"}
          id="radix-0"
          role="region"
          aria-labelledby="radix-1"
          data-orientation="vertical"
          className="data-open:animate-slide-down data-closed:animate-slide-up "
          hidden={!isActive}
        >
          <div className=" py-3 ">
            <div className="text-scale-250">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
