"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
interface CustomerStoryCardProps {
  image: string;
  title: string;
  url?: string;
  image_dark: string;
}

const CustomerStoryCard = ({
  image,
  title,
  url,
  image_dark,
}: CustomerStoryCardProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative h-full group cursor-pointer overflow-hidden border rounded-lg text-left border-scale-500 hover:border-scale-700 bg-white transition dark:bg-scale-1300 dark:border-scale-1250">
      <div className="relative box-content p-8 pb-0">
        <div className="relative h-[33px] w-auto max-w-[145px]">
          <Image
            className="opacity-75 dark:opacity-1"
            src={theme === "dark" ? image_dark : image}
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
