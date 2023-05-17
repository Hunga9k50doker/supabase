import React from "react";
import { combineDatabase } from "@/constants/CombineDatabase";
import { DatabaseIcon, CloseIcon } from "@/assets/icons";
const WrapCombine = () => {
  return (
    <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
      <div className="grid grid-cols-12">
        {combineDatabase.map((item, index) => (
          <div
            key={index}
            className={`col-span-12 mb-10 lg:col-span-3 lg:mb-0 ${
              index === 1
                ? "lg:col-start-5"
                : index === 2
                ? "lg:col-start-9"
                : ""
            }`}
          >
            <div className="p mb-4 flex items-center space-x-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-scale-1200 text-scale-100 ">
                <DatabaseIcon />
              </div>
              <CloseIcon />
              <div className="flex w-fit items-center">{item.icon}</div>
            </div>
            <h4 className="text-[18px] text-scale-1200 dark:text-white lg:text-[20px] mb-4">
              {item.title}
            </h4>
            <p className="text-[16px] text-scale-1100 dark:text-white mb-4">
              {item.subtilte}
            </p>
            <p className="text-[14px] text-scale-1100 dark:text-white mb-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WrapCombine;
