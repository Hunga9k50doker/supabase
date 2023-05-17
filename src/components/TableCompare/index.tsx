"use client";
import React from "react";
import { planDescription } from "@/constants/PlanDescription";
import { tableCompares } from "@/constants/TableComparePlan";
import ButtonSmall from "../ButtonSmall";
import { PlanDescription } from "@/configs";
import {
  DatabaseIcon,
  SubtractCircleIcon,
  CheckCircleIcon,
  InforIcon,
  QuestionIcon,
} from "@/assets/icons";
import dynamic from "next/dynamic";

const renderData = (data: any) => {
  switch (typeof data) {
    case "boolean":
      return data ? (
        <p className="text-primary">
          <CheckCircleIcon />
        </p>
      ) : (
        <p className="text-scale-700">
          <SubtractCircleIcon />
        </p>
      );
    case "object":
      return (
        <p className="flex items-center gap-2">
          <InforIcon />
          <p className="text-xs">{data.title}</p>
        </p>
      );
    default:
      return data;
  }
};

const TableCompare = () => {
  return (
    <table className="h-px w-full table-fixed">
      <caption className="sr-only">Pricing plan comparison</caption>
      <thead className="bg-scale-50 dark:bg-scale-50 sticky top-[0px] z-10">
        <tr>
          <th
            className="text-scale-1200 dark:bg-scale-1400 w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal"
            scope="col"
          >
            <React.Fragment>
              <span className="sr-only">Feature by</span>
              <p className="h-0.25 absolute bottom-0 left-0 w-full h-[1px]"></p>
            </React.Fragment>
          </th>
          {planDescription.map((item, index) => (
            <th
              key={index}
              className="text-scale-1200 dark:bg-scale-1400 w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal"
              scope="col"
            >
              <React.Fragment>
                <h3 className="text-scale-primary dark:text-scale-primary text-2xl font-mono font-normal uppercase flex items-center gap-4">
                  {item.title}
                </h3>
                <p className="h-0.25 absolute bottom-0 left-0 w-full h-[1px]"></p>
              </React.Fragment>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="descriptions">
          <th
            className="text-scale-1200 w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal"
            scope="col"
          ></th>
          {planDescription.map((item, index) => (
            <th
              key={index}
              className="text-scale-1200 w-1/4 px-6 pt-2 pb-2 text-left text-sm font-normal"
              scope="col"
            >
              <React.Fragment>
                <p className="text-sm border-b dark:border-scale-1250 text-scale-750 pb-4">
                  {item.description}
                </p>
                <p className="h-0.25 absolute bottom-0 left-0 w-full h-[1px]"></p>
              </React.Fragment>
            </th>
          ))}
        </tr>
      </tbody>
      <tbody>
        <tr className="descriptions">
          <th
            className="text-scale-1200 w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal"
            scope="col"
          ></th>
          {planDescription.map((item, index) => (
            <th key={index} className="h-full align-top px-6 pt-2">
              <React.Fragment>
                {PlanDescription.ENTERPRISE === item.id ? (
                  <div className="flex flex-col justify-between h-full">
                    <span className="text-scale-1200 text-4xl text-normal dark:text-scale-150">
                      Contact us
                    </span>

                    <p className="-mt-2">
                      <span className="bg-brand-500 text-brand-1100 rounded-md bg-opacity-30 py-0.5 px-2 text-xs "></span>
                    </p>
                    <p className="mt-8">
                      <a href="https://app.supabase.com/new/new-project">
                        <ButtonSmall
                          className="w-full justify-center"
                          type="button"
                          title="Contact us"
                        ></ButtonSmall>
                      </a>
                    </p>
                  </div>
                ) : (
                  <p className="flex flex-col justify-between h-full">
                    <span className="text-scale-1200 text-5xl text-start dark:text-scale-150">
                      ${item.price}
                    </span>

                    <p className="text-xs text-scale-750 text-start mt-1 mb-4">
                      per project per month
                    </p>
                    <p className="flex ">
                      <span className="bg-primary text-primary rounded-md bg-opacity-30 py-0.5 px-2 text-xs ">
                        {item.subttile}
                      </span>
                    </p>
                    <p className="mt-8">
                      <a href="https://app.supabase.com/new/new-project">
                        <ButtonSmall
                          className="w-full bg-scale-primary dark:bg-scale-primary text-white justify-center"
                          type="button"
                          title="Get Started"
                        ></ButtonSmall>
                      </a>
                    </p>
                  </p>
                )}
              </React.Fragment>
            </th>
          ))}
        </tr>
      </tbody>

      <tbody className="">
        {tableCompares.map((item, index) => (
          <React.Fragment key={index}>
            <tr className="flex items-center gap-4 bg-scale-200 bg-scale-50 dark:bg-scale-1400 text-scale-1200 sticky mt-[40px] top-[0px] z-10 py-3 pl-6 text-left text-sm font-medium dark:text-white">
              <React.Fragment>
                <p className="inline-flex h-8 w-8 items-center justify-center rounded-md  bg-primary dark:bg-primary text-primary">
                  {item.icon}
                </p>
                <p>{item.title}</p>
              </React.Fragment>
            </tr>
            {item.items.map((element, index) => (
              <tr
                key={index}
                className="divide-scale-600 dark:divide-scale-400 border-t dark:border-scale-1250"
              >
                <th className="text-scale-1200 flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal dark:text-white ">
                  <React.Fragment>
                    <p className="mr-2">{element.title}</p>
                    {element.moreInfo && <QuestionIcon />}
                  </React.Fragment>
                </th>
                {element.data.map((dataItem, index) => (
                  <td className="px-6 tier-free text-xs" key={index}>
                    {renderData(dataItem.value)}
                  </td>
                ))}
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
      <tbody>
        <tr className="descriptions">
          <th
            className="text-scale-1200 w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal"
            scope="col"
          ></th>
          {planDescription.map((item, index) => (
            <th key={index} className="h-full align-top px-6 pt-2">
              <React.Fragment>
                {PlanDescription.ENTERPRISE === item.id ? (
                  <p className="mt-8">
                    <a href="https://app.supabase.com/new/new-project">
                      <ButtonSmall
                        className="w-full justify-center"
                        type="button"
                        title="Contact us"
                      ></ButtonSmall>
                    </a>
                  </p>
                ) : (
                  <p className="mt-8">
                    <a href="https://app.supabase.com/new/new-project">
                      <ButtonSmall
                        className="w-full bg-scale-primary dark:bg-scale-primary text-white justify-center"
                        type="button"
                        title="Get Started"
                      ></ButtonSmall>
                    </a>
                  </p>
                )}
              </React.Fragment>
            </th>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default dynamic(() => Promise.resolve(TableCompare), { ssr: false });
