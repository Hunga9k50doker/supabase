import React from "react";
import TabList from "@/components/TabList";
import { tabListTableEditor } from "@/constants/Tablist";
import Image from "next/image";
import WrapTitle from "@/components/WrapTitle";
import { ArrowRightIcon, TwitterBlueIcon } from "@/assets/icons";

const WrapEdit = () => {
  return (
    <div>
      <div className="w-full flex justify-center space-y-4">
        <div className="flex items-center border-b border-scale-400">
          <button className=" relative cursor-pointer text-scale-900 flex items-center space-x-2 text-center transition focus:outline-none focus-visible:ring focus-visible:ring-scale-700 focus-visible:border-scale-900  text-base px-6 py-3  !text-scale-1200 border-b-2 border-scale-1200 ">
            Table Editor
          </button>
          <button className=" relative cursor-pointer text-scale-900 flex items-center space-x-2 text-center transition focus:outline-none focus-visible:ring focus-visible:ring-scale-700 focus-visible:border-scale-900  text-base px-6 py-3  hover:text-scale-1200 ">
            SQL Editor
          </button>
        </div>
      </div>
      <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-16 pb-0">
        <div className="grid grid-cols-12">
          <div className="col-span-12 w-full lg:col-span-6">
            <TabList data={tabListTableEditor} />
            <div className="overflow-hidden rounded-md border border-gray-100 bg-gray-800 dark:border-gray-600 bg-secondary">
              <Image
                src={
                  "https://supabase.com/_next/image?url=%2Fimages%2Fproduct%2Fdatabase%2Ftable-view%2Fspreadsheet-interface.png&w=1920&q=75"
                }
                alt="Table Editor"
                width={446}
                height={293}
              />
            </div>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-5 lg:col-start-8 lg:mt-0 xl:col-span-5 xl:col-start-8">
            <WrapTitle
              title="The simplicity of a spreadsheet"
              description="Add, edit, and update your data with the simplicity of a no-code tool."
              className_title="fs-20 mb-16 mt-0"
              className_description="mb-16 mt-0"
            >
              <div className="group flex items-center gap-1 cursor-pointer">
                <span className="sr-only">View documentation about </span>
                <span className="text-scale-1100 hover:text-scale-1200 text-sm">
                  View documentation
                </span>
                <div className="transition-all group-hover:ml-0.5 text-scale-1100 hover:text-scale-1200">
                  <ArrowRightIcon />
                </div>
              </div>
            </WrapTitle>
            <div className="my-8">
              <div className=" dark:bg-scale-300 border-scale-300 dark:border-scale-400 rounded-md border bg-white p-6 drop-shadow-sm ">
                <div className="relative flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full border dark:border-gray-600">
                    <span className="block w-initial h-initial bg-none opacity-1 p-0 m-0 bỏrder-0 relative">
                      <p className="w-[20px] h-[20px] absolute top-[-5px] left-[-5px] z-10 bg-brand-600 rounded-full border-white flex items-center justify-center">
                        <TwitterBlueIcon />
                      </p>
                      <Image
                        width={38}
                        height={38}
                        alt={""}
                        src={
                          "https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2Fv6citnk33y2wpeyzrq05_400x400.jpeg&w=1920&q=75"
                        }
                        className="rounded-full"
                      />
                    </span>
                  </div>
                  <p className="text-scale-1200 mt-3 text-xs font-medium dark:text-white">
                    @Elsolo244
                  </p>
                </div>
                <p className="text-scale-1100 mt-3">
                  Where has @supabase been all my life? 😍
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapEdit;
