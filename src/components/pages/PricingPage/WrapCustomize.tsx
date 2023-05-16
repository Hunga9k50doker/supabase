/* eslint-disable react/no-unescaped-entities */
import React from "react";
import WrapTitle from "@/components/WrapTitle";
import { wrapCustomize } from "@/constants/WrapCustomize";
import Image from "next/image";
import { WrapCustomize as WrapCustomizeConfig } from "@/configs";
import ButtonSmall from "@/components/ButtonSmall";
const WrapCustomize = () => {
  return (
    <div className="sm:py-18 container relative mx-auto px-4 py-16 shadow-sm md:py-24 lg:px-12 lg:pt-32 lg:pb-12">
      <WrapTitle
        title="Easily customizable add-ons"
        description="Level up your Supabase experience with add-ons."
        style={{ marginBottom: "64px !important" }}
        className_description="text-center"
        className_title="text-center"
      />
      <div className="grid lg:grid-cols-3 gap-4 mb-16">
        {wrapCustomize.map((item, index) => (
          <div className="bg-white dark:bg-scale-300 rounded-[4px]" key={index}>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={170}
              />
            </div>
            <div className="px-8 -mt-1">
              <p className="text-xs text-scale-900">
                {item.tooltip} ${item.price}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={14}
                  height={14}
                />
                <span className="text-sm text-scale-1200">{item.title}</span>
              </div>
              <p className="mt-2 text-scale-900 text-xs min-h-[40px] lg:min-h-[50px] lg:max-w-[290px]">
                {item.description}
              </p>
              <div className="flex items-center justify-start mt-4 mb-4 lg:mb-8">
                <a href="https://supabase.com/docs/guides/platform/compute-add-ons">
                  <button
                    className="relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 bg-scale-100 hover:bg-scale-300 shadow-scale-600 hover:shadow-scale-700 dark:shadow-scale-700 hover:dark:shadow-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 focus-visible:outline-brand-600  shadow-sm text-xs px-2.5 py-1"
                    type="button"
                  >
                    <span className="truncate">Documentation</span>
                  </button>
                </a>
                {WrapCustomizeConfig.OPTIMIZE_COMPUTER === item.id && (
                  <button className="ml-2 text-primary text-xs hover:underline ">
                    See Pricing breakdown
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 justify-center text-center">
        <span className="text-textColor">
          Got something you'd like to see here?
        </span>
        <a
          target="_blank"
          href="https://github.com/supabase/supabase/discussions/categories/feature-requests"
        >
          <ButtonSmall type="button" title="Request a feature"></ButtonSmall>
        </a>
      </div>
    </div>
  );
};

export default WrapCustomize;
