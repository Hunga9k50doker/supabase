/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { services } from "@/constants/Services";
import { ArrowRightIcon } from "@/assets/icons";
const ManageData = () => {
  return (
    <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
      <div className="mb-16">
        <h2 className="h3">Build your app without leaving the dashboard</h2>
      </div>
      <div className="grid grid-cols-12">
        <div className="sbui-tabs--alt col-span-12 lg:col-span-7">
          <iframe
            className="rounded"
            allow="autoplay; modestbranding; encrypted-media"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xIHjwJgxOmk"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className="col-span-12 mt-8 lg:col-span-5 lg:col-start-8 lg:mt-0 xl:col-span-5 xl:col-start-8">
          <div className="sbui-tabs--underline-alt block mb-3">
            <div
              dir="ltr"
              data-orientation="horizontal"
              className="w-full justify-between space-y-4"
            >
              <div
                role="tablist"
                aria-orientation="horizontal"
                className=" flex items-center border-b border-scale-400  overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right outline-none"
                data-orientation="horizontal"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected="true"
                  aria-controls="radix-13-content-0"
                  data-state="active"
                  id="radix-13-trigger-0"
                  className="relative cursor-pointer text-scale-900 flex items-center space-x-2 text-center transition focus:outline-none focus-visible:ring focus-visible:ring-scale-700 focus-visible:border-scale-900  text-xs leading-4 px-3 py-2  !text-scale-1200 dark:!text-scale-100 border-b-2 border-scale-1200 "
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  <span>Table editor</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-13-content-1"
                  data-state="inactive"
                  id="radix-13-trigger-1"
                  className=" relative cursor-pointer text-scale-900 flex items-center space-x-2 text-center transition focus:outline-none focus-visible:ring focus-visible:ring-scale-700 focus-visible:border-scale-900 text-xs leading-4 px-3 py-2  hover:text-scale-1200  hover:dark:text-scale-300 dark:text-scale-1100 "
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  <span>SQL Editor</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-13-content-2"
                  data-state="inactive"
                  id="radix-13-trigger-2"
                  className=" relative cursor-pointer text-scale-900 flex items-center space-x-2 text-center transition focus:outline-none focus-visible:ring focus-visible:ring-scale-700 focus-visible:border-scale-900  text-xs leading-4 px-3 py-2  hover:text-scale-1200 hover:dark:text-scale-300 dark:text-scale-1100"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  <span>Auth rules</span>
                </button>
              </div>
              <div
                data-state="active"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-13-trigger-0"
                id="radix-13-content-0"
                className="focus:outline-none transition-height duration-0"
              ></div>
            </div>
          </div>
          <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-autoheight">
            <div className="swiper-wrapper h-[#212px]">
              <div className="swiper-slide py-4 swiper-slide-active w-[467px]">
                <h4 className="text-scale-1200 mb-4 text-xl dark:text-scale-100">
                  Manage your data with the familiarity of a spreadsheet
                </h4>
                <p className="p text-base">
                  You don’t have to be a database expert to use Supabase. Our
                  table editor makes Postgres easy to use, even for non-techies.
                  You can do everything right in our dashboard.
                </p>
                <a
                  className="text-scale-1100 hover:text-scale-1200 mt-3 block cursor-pointer text-xs"
                  href="/database"
                >
                  <div className="group flex items-center gap-1">
                    <span className="sr-only">
                      Explore Table View about /database
                    </span>
                    <span>Explore Table View</span>
                    <div className="transition-all group-hover:ml-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        className="sbui-icon "
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageData;
