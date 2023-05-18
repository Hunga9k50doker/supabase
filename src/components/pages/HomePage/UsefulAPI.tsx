/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { ArrowRightIcon, CopyIcon } from "@/assets/icons";
import { usefulAPI } from "@/constants/UsefulAPI";
import { tabListUsefulAPI } from "@/constants/TabList";
import TabList from "@/components/TabList";
import CreateUserBlock from "@/components/CodeBlocks/CreateUserBlock";

const UsefulAPI = () => {
  return (
    <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
      <div className="grid grid-cols-12 lg:gap-16">
        <div className="col-span-12 pb-8 lg:col-span-5 xl:col-span-5">
          <h2 className="h3">Instant APIs that do the hard work for you</h2>
          <div className="mt-4">
            <p className="lg:text-lg text-base">
              We introspect your database to provide APIs instantly. Stop
              building repetitive CRUD endpoints and focus on your product.
            </p>
          </div>
          <div className="py-8">
            <dl className="grid grid-cols-12 gap-y-4 md:gap-8">
              {usefulAPI.map((item, index) => (
                <div
                  key={index}
                  className="col-span-12 md:col-span-6 lg:col-span-6"
                >
                  <div className="lg:mt-5">
                    <dt>
                      <h4 className="text-scale-1200 dark:text-scale-100 mb-4 text-md">
                        {item.title}
                      </h4>
                      <p className="p">{item.description}</p>
                      <a
                        className="text-scale-1100 hover:text-scale-1200 mt-3 block cursor-pointer text-xs"
                        href="https://github.com/supabase/docs/client/generating-types"
                      >
                        <div className="group flex items-center gap-1">
                          <span className="sr-only">
                            Explore more about /docs/client/generating-types
                          </span>
                          <span>Explore more</span>
                          <div className="transition-all group-hover:ml-0.5">
                            <ArrowRightIcon />
                          </div>
                        </div>
                      </a>
                    </dt>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="sbui-tabs--alt col-span-12 lg:col-span-7 xl:col-span-6 xl:col-start-7">
          <div
            dir="ltr"
            data-orientation="horizontal"
            className="w-full justify-between space-y-4"
          >
            <TabList data={tabListUsefulAPI} />
          </div>
          <CreateUserBlock />
        </div>
      </div>
    </div>
  );
};

export default UsefulAPI;
