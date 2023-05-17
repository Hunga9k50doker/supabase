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

const renderData = (data: any) => {
  switch (typeof data) {
    case "boolean":
      return data ? (
        <div className="text-primary">
          <CheckCircleIcon />
        </div>
      ) : (
        <div className="text-scale-700">
          <SubtractCircleIcon />
        </div>
      );
    case "object":
      return (
        <div className="flex items-center gap-2">
          <InforIcon />
          <p className="text-xs">{data.title}</p>
        </div>
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
            <span className="sr-only">Feature by</span>
            <div className="h-0.25 absolute bottom-0 left-0 w-full h-[1px]"></div>
          </th>
          {planDescription.map((item, index) => (
            <th
              key={index}
              className="text-scale-1200 dark:bg-scale-1400 w-1/4 px-6 pr-2 pt-2 pb-2 text-left text-sm font-normal"
              scope="col"
            >
              <h3 className="text-scale-primary dark:text-scale-primary text-2xl font-mono font-normal uppercase flex items-center gap-4">
                {item.title}
              </h3>
              <div className="h-0.25 absolute bottom-0 left-0 w-full h-[1px]"></div>
            </th>
          ))}
        </tr>
      </thead>

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
            <p className="text-sm border-b dark:border-scale-1250 text-scale-750 pb-4">
              {item.description}
            </p>
            <div className="h-0.25 absolute bottom-0 left-0 w-full h-[1px]"></div>
          </th>
        ))}
      </tr>
      <tr className="descriptions">
        <th
          className="text-scale-1200 w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal"
          scope="col"
        ></th>
        {planDescription.map((item, index) => (
          <th key={index} className="h-full align-top px-6 pt-2">
            <div className="relative table h-full w-full">
              {PlanDescription.ENTERPRISE === item.id ? (
                <div className="flex flex-col justify-between h-full">
                  <span className="text-scale-1200 text-4xl text-normal dark:text-scale-150">
                    Contact us
                  </span>

                  <p className="-mt-2">
                    <span className="bg-brand-500 text-brand-1100 rounded-md bg-opacity-30 py-0.5 px-2 text-xs "></span>
                  </p>
                  <div className="mt-8">
                    <a href="https://app.supabase.com/new/new-project">
                      <ButtonSmall
                        className="w-full justify-center"
                        type="button"
                        title="Contact us"
                      ></ButtonSmall>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-between h-full">
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
                  <div className="mt-8">
                    <a href="https://app.supabase.com/new/new-project">
                      <ButtonSmall
                        className="w-full bg-scale-primary dark:bg-scale-primary text-white justify-center"
                        type="button"
                        title="Get Started"
                      ></ButtonSmall>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </th>
        ))}
      </tr>

      <tbody className="">
        {tableCompares.map((item, index) => (
          <React.Fragment key={index}>
            <tr className="flex items-center gap-4 bg-scale-200 bg-scale-50 dark:bg-scale-1400 text-scale-1200 sticky mt-[40px] top-[0px] z-10 py-3 pl-6 text-left text-sm font-medium dark:text-white">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-md  bg-primary dark:bg-primary text-primary">
                {item.icon}
              </div>
              <p>{item.title}</p>
            </tr>
            {item.items.map((element, index) => (
              <tr
                key={index}
                className="divide-scale-600 dark:divide-scale-400 border-t dark:border-scale-1250"
              >
                <th className="text-scale-1200 flex items-center px-6 py-5 last:pb-24 text-left text-xs font-normal dark:text-white ">
                  <p className="mr-2">{element.title}</p>
                  {element.moreInfo && <QuestionIcon />}
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
      <tr className="descriptions">
        <th
          className="text-scale-1200 w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal"
          scope="col"
        ></th>
        {planDescription.map((item, index) => (
          <th key={index} className="h-full align-top px-6 pt-2">
            <div className="relative table h-full w-full">
              {PlanDescription.ENTERPRISE === item.id ? (
                <div className="mt-8">
                  <a href="https://app.supabase.com/new/new-project">
                    <ButtonSmall
                      className="w-full justify-center"
                      type="button"
                      title="Contact us"
                    ></ButtonSmall>
                  </a>
                </div>
              ) : (
                <div className="mt-8">
                  <a href="https://app.supabase.com/new/new-project">
                    <ButtonSmall
                      className="w-full bg-scale-primary dark:bg-scale-primary text-white justify-center"
                      type="button"
                      title="Get Started"
                    ></ButtonSmall>
                  </a>
                </div>
              )}
            </div>
          </th>
        ))}
      </tr>
    </table>
  );
};

export default TableCompare;
