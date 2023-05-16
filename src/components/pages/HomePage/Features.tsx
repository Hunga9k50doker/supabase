/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { services } from "@/constants/Services";
import { ArrowRightIcon } from "@/assets/icons";
const Features = () => {
  return (
    <div className="w-full bg-scale-100 dark:bg-bgDarkThumbColor">
      <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 space-y-16 pb-0">
        <h3 className="h3">Build faster and focus on your products</h3>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-2 md:gap-16 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-24">
          {services?.length > 0 &&
            services.map((service, index) => (
              <div className="mb-10 space-y-4 md:mb-0" key={index}>
                <div className="flex items-center">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-scale-1200 text-white ">
                    {service.icon}
                  </div>
                  <div className="text-scale-1200 ml-4 flex flex-row xl:flex-col dark:text-white">
                    {service.title}
                  </div>
                </div>
                <p className="text-scale-1100 dark:text-white">
                  {service.description}
                </p>
                <a
                  className="text-scale-1100 hover:text-scale-1200 mt-3 block cursor-pointer text-xs"
                  href="/database"
                >
                  <div className="group flex items-center gap-1">
                    <span className="sr-only">Learn more about /database</span>
                    <span>Learn more</span>
                    <div className="transition-all group-hover:ml-0.5">
                      <ArrowRightIcon />
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
