import React from "react";
import Image from "next/image";
import Link from "next/link";
interface CustomerStoryCardProps {
  image: string;
  title: string;
  url?: string;
}
const CustomerStoryCard = ({ image, title, url }: CustomerStoryCardProps) => {
  return (
    <div className="relative h-full group cursor-pointer overflow-hidden border rounded-lg text-left border-scale-500 hover:border-scale-700 bg-white transition dark:bg-scale-1300 dark:border-scale-1250">
      <div className="relative box-content p-8 pb-0">
        <div className="relative h-[33px] w-auto max-w-[145px]">
          <Image
            className="opacity-75 dark:opacity-1"
            src={image}
            alt={title}
            width={145}
            height={33}
          ></Image>
        </div>
      </div>
      <div className="px-8 pb-8 relative flex flex-col h-full gap-2 pt-8">
        <div className="flex items-center gap-3">
          <h5 className="text-scale-1200 dark:text-scale-150">{title}</h5>
        </div>
        <span className="text-secondary justify-end text-xs">Learn more</span>
      </div>
    </div>
  );
};

export default CustomerStoryCard;
