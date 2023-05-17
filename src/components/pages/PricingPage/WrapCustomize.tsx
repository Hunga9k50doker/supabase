/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import WrapTitle from "@/components/WrapTitle";
import { wrapCustomize } from "@/constants/WrapCustomize";
import Image from "next/image";
import { WrapCustomize as WrapCustomizeConfig } from "@/configs";
import ButtonSmall from "@/components/ButtonSmall";
import { useTheme } from "next-themes";
const WrapCustomize = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
      <WrapTitle
        title="Easily customizable add-ons"
        description="Level up your Supabase experience with add-ons."
        style={{ marginBottom: "64px !important" }}
        className_description="text-center mt-16 mb-64"
        className_title="text-center"
      />
      <div className="grid lg:grid-cols-3 gap-4 mb-16">
        {wrapCustomize.map((item, index) => (
          <div
            className="bg-white dark:bg-scale-1300 rounded-[4px]"
            key={index}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={theme === "dark" ? item.image_dark : item.image}
                alt={item.title}
                width={300}
                height={170}
              />
            </div>
            <div className="px-8 -mt-1">
              <p className="text-xs text-scale-1150">
                {item.tooltip} ${item.price}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src={theme === "dark" ? item.icon_dark : item.icon}
                  alt={item.title}
                  width={14}
                  height={14}
                />
                <span className="text-sm text-scale-1200 dark:text-scale-150">
                  {item.title}
                </span>
              </div>
              <p className="mt-2 text-scale-1150 text-xs min-h-[40px] lg:min-h-[50px] lg:max-w-[290px]">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-4 mb-4 lg:mb-8">
                <a href="https://supabase.com/docs/guides/platform/compute-add-ons">
                  <ButtonSmall
                    type="button"
                    title="Documentation"
                  ></ButtonSmall>
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
