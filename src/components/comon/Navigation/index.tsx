"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DropdownIcon, StarIcon } from "@/assets/icons";
import ButtonSmall from "@/components/ButtonSmall";
import Image from "next/image";
import { Logo, LogoDark } from "@/assets/imgs";
import { useTheme } from "next-themes";

const Navigation = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const categories = [
    {
      title: "Products",
      path: "#",
      icon: <DropdownIcon />,
    },
    {
      title: "Developers",
      path: "#",
      icon: <DropdownIcon />,
    },
    {
      title: "Pricing",
      path: "/pricing",
      icon: "",
    },
    {
      title: "Docs",
      path: "#",
      icon: "",
    },
    {
      title: "Blog",
      path: "#",
      icon: "",
    },
  ];
  return (
    <nav className="flex items-center justify-center border-scale-400 border-b backdrop-blur-sm transition-opacity false border-colorScale3 dark:bg-bgDarkThumbColor">
      <div className="flex flex-1 sm:items-stretch lg:justify-between relative h-16 mx-auto lg:container lg:px-16 xl:px-20 border-color">
        <div className="flex items-center">
          <Link href="/">
            <Image alt="logo" src={theme === "light" ? Logo : LogoDark} />
          </Link>
          <div className="hidden pl-4 sm:ml-6 sm:space-x-4 lg:flex">
            {categories.map((category, index) => (
              <div key={index}>
                <Link
                  href={category.path}
                  className="flex items-center gap-2 hover:text-secondary text-sm"
                >
                  {category.title}
                  {category.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/supabase/supabase" target="_blank">
            <button
              className=" relative cursor-pointer dark:hover:bg-bgBlackColor inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 hover:bg-scale-500 shadow-none focus-visible:outline-scale-700  text-xs px-2.5 py-1 hidden group lg:flex"
              type="button"
            >
              <div className="flex items-center justify-center w-4 h-4 text-brand-800">
                <div
                  className="text-yellow flex h-3 w-3 items-center justify-center transition-all
                            dark:text-yellow-900  
                            group-hover:h-4
                            group-hover:w-4
                            group-hover:text-yellow-900
                            group-focus:h-4
                            group-focus:w-4
                            group-focus:text-yellow-900 false"
                >
                  <StarIcon />
                </div>
              </div>
              <span className="truncate">
                <span className="dark:text-scale-100 text-xs">
                  Star us on GitHub
                </span>
              </span>
            </button>
          </a>
          <a href="https://app.supabase.com/">
            <ButtonSmall
              title="Sign in"
              type="button"
              className="bg-scale-100 hover:bg-scale-300 hover:dark:shadow-scale-800 dark:bg-[#18181c] dark:hover:bg-scale-1100 dark:text-white text-xs"
            ></ButtonSmall>
          </a>
          <a href="https://app.supabase.com/">
            <ButtonSmall
              className="bg-scale-primary text-white hover:bg-scale-secondary dark:bg-scale-primary dark:hover:bg-scale-secondary"
              type="button"
              title="Start your project"
            ></ButtonSmall>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
