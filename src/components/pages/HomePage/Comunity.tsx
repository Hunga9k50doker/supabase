/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { services } from "@/constants/Services";
import { MessageIcon, ArrowNextIcon, ArrowPreIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import ButtonLarge from "@/components/ButtonLarge";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { community } from "@/constants/Community";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Comunity = () => {
  return (
    <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 space-y-16 pb-0">
      <div className="grid grid-cols-12">
        <div className="col-span-12 text-center">
          <h3 className="h2">Join the community</h3>
          <p className="text-textColor">
            Supported by a network of early advocates, contributors, and
            champions.
          </p>
          <div className="my-8 flex justify-center gap-2">
            <a
              target="_blank"
              href="https://github.com/supabase/supabase/discussions"
            >
              <ButtonLarge type="button" title="GitHub discussions">
                <MessageIcon />
              </ButtonLarge>
            </a>
            <a target="_blank" href="https://discord.supabase.com/">
              <ButtonLarge type="button" title="Discord">
                <MessageIcon />
              </ButtonLarge>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 cursor-move lg:-mr-32 lg:-ml-32">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: ".next-swiper",
            prevEl: ".pre-swiper",
          }}
          modules={[Navigation]}
        >
          {community?.length > 0 &&
            community.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="mr-3 ml-3">
                  <Link
                    target="_blank"
                    className="cursor-pointer"
                    href={item.twitter_url}
                  >
                    <div className=" dark:bg-scale-300 border-scale-300 dark:border-scale-400 rounded-md border bg-white p-6 drop-shadow-sm ">
                      <div className="relative flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full border dark:border-gray-600">
                          <span className="block w-initial h-initial bg-none opacity-1 p-0 m-0 bỏrder-0 relative">
                            <Link
                              href={item.twitter_url}
                              className="w-[20px] h-[20px] absolute top-[-5px] left-[-5px] z-10 bg-brand-600 rounded-full border-white flex items-center justify-center"
                            >
                              {item.icon}
                            </Link>
                            <Image
                              width={38}
                              height={38}
                              alt={item.username}
                              src={item.avatar}
                              className="rounded-full"
                            />
                          </span>
                        </div>
                        <p className="text-scale-1200 mt-3 text-sm font-medium">
                          @{item.username}
                        </p>
                      </div>
                      <p className="text-scale-1100 mt-3 text-base">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          <div className="container-fluid mx-auto mt-3 hidden flex-row justify-between md:flex">
            <div className="p ml-4 cursor-pointer pre-swiper">
              <ArrowPreIcon />
            </div>
            <div className="p mr-4 cursor-pointer  next-swiper">
              <ArrowNextIcon />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Comunity;
