import { DatabaseIcon, BookIcon } from "@/assets/icons";
import React from "react";
import ButtonLarge from "@/components/ButtonLarge";
import Image from "next/image";
const WrapHeader = () => {
  return (
    <div className="container relative mx-auto px-6 pt-16 pb-0 sm:px-16 lg:pt-32 xl:px-20">
      <div className="grid grid-cols-12">
        <div className="col-span-12 space-y-8 lg:col-span-5">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-scale-1200 text-scale-100 ">
                <DatabaseIcon />
              </div>
              <span className="text-scale-1200">Database</span>
            </div>
            <h1 className="text-scale-1200 text-2xl sm:text-3xl sm:leading-none dark:text-white lg:text-4xl">
              Open Source SQL Database <br /> (without the hassle)
            </h1>
          </div>
          <div>
            <p className="p lg:text-lg">
              Every Supabase project is a dedicated PostgreSQL database, trusted
              by millions of developers.
            </p>
            <p className="p lg:text-lg">
              PostgreSQL is one of the worlds most scalable databases.
            </p>
          </div>
          <div className="flex flex-row md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <a href="https://app.supabase.com">
                <ButtonLarge
                  className="bg-scale-primary text-white hover:bg-scale-secondary dark:bg-scale-primary hover:dark:bg-scale-secondary"
                  type="button"
                  title="Start your project"
                ></ButtonLarge>
              </a>
              <a href="https://supabase.com/docs/guides/database">
                <ButtonLarge className="" type="button" title="">
                  <BookIcon />
                  See Documentation
                </ButtonLarge>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 mt-8 lg:col-span-7 lg:mt-0 xl:col-span-6 xl:col-start-7">
          <div className="w-full">
            <Image
              src={
                "https://supabase.com/_next/image?url=%2Fimages%2Fproduct%2Fdatabase%2Fheader--light-2.png&w=1920&q=75"
              }
              width={532}
              height={347}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapHeader;
