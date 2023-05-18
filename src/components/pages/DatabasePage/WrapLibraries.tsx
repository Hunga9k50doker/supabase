"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { libraries } from "@/constants/Libraries";
import WrapTitle from "@/components/WrapTitle";
import {
  BookIcon,
  GithubStrokeIcon,
  ArrowPreIcon,
  ArrowNextIcon,
} from "@/assets/icons";
import ButtonLarge from "@/components/ButtonLarge";
import Link from "next/link";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardServiceBuild from "@/components/Cards/CardServiceBuild";
import { serviceBuilds } from "@/constants/ServicesBuild";
import { community } from "@/constants/Community";


const WrapLibraries = () => {
  const styles: any = {
    Redwood: {
      className: "w-[3rem] left-[15%] top-[5%] ",
    },
    VueJs: {
      className: "w-[3rem] right-[33%] top-[3%]",
    },
    React: {
      className: "w-[3rem] right-[13%] top-[8%]",
    },
    Angular: {
      className: "w-[3rem] right-[21%] top-[28%]",
    },
    Electron: {
      className: "w-[3rem] left-[17%] top-[25%]",
    },
    NuxtJs: {
      className: "w-[3rem] right-[5%] top-[28%]",
    },
    Flutter: {
      className: "w-[3rem] left-[5%] top-[15%]",
    },
  };

  const breakpoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1204: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };
  const [serviceData, setServiceData] = useState(serviceBuilds);
  useEffect(() => {
    setServiceData(serviceBuilds);
  }, [serviceBuilds]);
  return (
    <div className="relative">
      <div className="w-full h-full pt-12 pb-0">
        <div className="absolute hidden h-full w-full lg:block">
          <div className="container relative mx-auto h-full max-w-screen-2xl">
            {libraries.map((item, index) => (
              <div
                key={index}
                className={`absolute z-10 right-[21%] top-[28%] ${
                  styles?.[item.title].className
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 mb-0 pb-8 lg:pt-32 overflow-x-hidden">
        <div className="grid grid-cols-12">
          <WrapTitle
            title="Community driven examples, libraries and guides"
            description="Supported by a network of early advocates, contributors, and champions."
            className="col-span-12 text-center"
            className_title="mb-16 fs-24"
            className_description="mb-16"
          >
            <div className="flex items-center justify-center gap-2 py-4">
              <Link
                target="_blank"
                href="https://github.com/supabase/docs/guides/auth/overview"
              >
                <ButtonLarge type="button">
                  <BookIcon />
                  <span className="truncate">View guides</span>
                </ButtonLarge>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/supabase/supabase/tree/master/examples"
              >
                <ButtonLarge type="button">
                  <GithubStrokeIcon />
                  <span className="truncate">Official GitHub library</span>
                </ButtonLarge>
              </Link>
            </div>
          </WrapTitle>
        </div>
        <div className="mt-4">
          <div className="lg:-mr-32 lg:-ml-32">
            {serviceData?.length > 0 && (
              <Swiper
                breakpoints={breakpoints}
                loop={true}
                navigation={{
                  nextEl: ".next-swiper",
                  prevEl: ".pre-swiper",
                }}
                modules={[Navigation]}
              >
                {serviceData.map((serviceBuild, index) => (
                  <SwiperSlide key={index}>
                    <CardServiceBuild
                      serviceBuild={serviceBuild}
                      className="my-8 mr-3 ml-3"
                    />
                  </SwiperSlide>
                ))}
                <div className="container mx-auto mt-3 hidden flex-row justify-between md:flex">
                  <div className="p ml-4 cursor-pointer pre-swiper">
                    <ArrowPreIcon />
                  </div>
                  <div className="p mr-4 cursor-pointer  next-swiper">
                    <ArrowNextIcon />
                  </div>
                </div>
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapLibraries;
