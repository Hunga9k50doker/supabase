/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { ArrowRightIcon } from "@/assets/icons";
import { customerStory } from "@/constants/CustomerStory";
import Link from "next/link";
import CustomerStoryCard from "@/components/Cards/CustomerStoryCard";

const CustomerStory = () => {
  return (
    <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
      <div className="mb-12">
        <div>
          <div className="space-y-4">
            <span className="text-scale-900 block font-mono text-xs uppercase tracking-widest">
              Customer Stories
            </span>
            <h3 className="h2">
              <span>Infrastructure</span>
              <span className="text-scale-1100 inline">
                {" "}
                to innovate and scale with ease.
              </span>
            </h3>
          </div>
          <p className="p max-w-3xl text-lg sm:mt-4">
            See how Supabase empowers companies of all sizes to accelerate their
            growth and streamline their work.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-5 grid grid-cols-12 gap-8 lg:gap-12">
        {customerStory?.length > 0 &&
          customerStory.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="col-span-12 md:col-span-4 cursor-pointer"
            >
              <CustomerStoryCard title={item.title} image={item.image} />
            </Link>
          ))}
      </div>
      <div className="mt-12">
        <a
          className="text-scale-1100 hover:text-scale-1200 mt-3 block cursor-pointer text-xs"
          href="/customers"
        >
          <div className="group flex items-center gap-1">
            <span className="sr-only">Explore more about /customers</span>
            <span>Explore more</span>
            <div className="transition-all group-hover:ml-0.5">
              <ArrowRightIcon />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CustomerStory;
