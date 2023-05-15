import React from "react";
import Image from "next/image";
import { Felicis, Coatue, YC, Mozilla } from "@/assets/imgs";
import Button from "@/components/Button";
import { BookIcon } from "@/assets/icons";

const BrandHeader = () => {
  return (
    <div className="overflow-hidden">
      <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pb-0 pt-24">
        <div className="relative mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div className="space-y-12 sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full">
                <div>
                  <h1 className=" text-scale-1200 text-2xl sm:text-3xl sm:leading-none lg:text-4xl xl:text-5xl ">
                    <span className="block">Build in a weekend.</span>
                    <span className="text-lightGreenColor block md:ml-0">
                      Scale to millions.
                    </span>
                  </h1>
                  <div>
                    <p className="p mt-1.5 text-sm sm:mt-5 sm:text-base lg:text-lg ">
                      Supabase is an open source Firebase alternative. Start
                      your project with a Postgres database, Authentication,
                      instant APIs, Edge Functions, Realtime subscriptions, and
                      Storage.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a href="https://app.supabase.com">
                    <Button
                      className="border truncate relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   bg-primary hover:bg-lightGreenColor text-white bordershadow-primary hover:bordershadow-lightGreenColor dark:bordershadow-primary dark:hover:bordershadow-primary focus-visible:outline-brand-600  shadow-sm text-sm leading-4 px-3 py-2 text-white"
                      type="button"
                      title="Start your project"
                    ></Button>
                  </a>
                  <a href="/docs">
                    <Button
                      className="border gap-2 truncate relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 bg-scale-100 hover:bg-scale-300 bordershadow-scale-600 hover:bordershadow-scale-700 dark:bordershadow-scale-700 hover:dark:bordershadow-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 focus-visible:outline-brand-600  shadow-sm text-sm leading-4 px-3 py-2"
                      type="button"
                      title=""
                    >
                      <BookIcon />
                      Documentation
                    </Button>
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <small className="small text-xs">backed by</small>
                  <div className="w-full sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-center justify-start gap-y-8 sm:flex-nowrap">
                      <Image
                        className="h-8 pr-5 sm:h-8 md:pr-10"
                        src={YC}
                        alt="Y Combinator"
                      />
                      <Image
                        className="relative h-5 pr-5 sm:h-5 md:pr-10"
                        src={Mozilla}
                        alt="Mozilla"
                      />
                      <Image
                        className="relative h-5 pr-5 sm:h-5 md:pr-10"
                        src={Coatue}
                        alt="Coatue"
                      />
                      <Image
                        className="relative h-6 pr-5 sm:h-6 md:pr-10"
                        src={Felicis}
                        alt="Felicis"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 flex content-center sm:mt-24 lg:absolute lg:-right-80 lg:col-span-6 lg:mt-0 lg:w-9/12 xl:relative xl:right-0 xl:w-full">
              <div className="relative flex w-full flex-col items-center justify-center rounded-md">
                <div className="bg-scale-400 flex h-5 w-full items-center justify-start rounded-t-md px-2">
                  <div className="bg-scale-800 mr-2 h-2 w-2 rounded-full"></div>
                  <div className="bg-scale-800 mr-2 h-2 w-2 rounded-full"></div>
                  <div className="bg-scale-800 mr-2 h-2 w-2 rounded-full"></div>
                </div>
                <div className="bg-scale-1000 relative w-full rounded-b-md shadow-lg p-0 pt-[56.25%] ">
                  <iframe
                    title="Demo video showcasing Supabase"
                    className="absolute h-full w-full rounded-b-md top-0 left-0"
                    src="https://www.youtube-nocookie.com/embed/dBOSUER_5T4?playlist=dBOSUER_5T4&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;disablekb=1&amp;mute=1&amp;muted=1"
                    frameBorder="0"
                    allow="autoplay; modestbranding; encrypted-media"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
