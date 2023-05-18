"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  DropdownIcon,
  StarIcon,
  MenuHambugerIcon,
  CloseIcon,
} from "@/assets/icons";
import ButtonSmall from "@/components/ButtonSmall";
import Image from "next/image";
import { Logo, LogoDark } from "@/assets/imgs";
import { useTheme } from "next-themes";
import { categoriesNav } from "@/constants/CategoriesNav";
import NavigationMobile from "@/components/NavigationMobile";
const Navigation = () => {
  const { theme } = useTheme();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="relative z-500 flex items-center justify-center border-scale-400 border-b backdrop-blur-sm transition-opacity false dark:border-scale-1250 dark:bg-bgDarkThumbColor">
        <div className="flex flex-1 sm:items-stretch hidden lg:flex lg:justify-between relative h-16 mx-auto lg:container lg:px-16 xl:px-20 border-color">
          <div className="flex items-center">
            <Link href="/">
              <Image alt="logo" src={theme === "dark" ? LogoDark : Logo} />
            </Link>
            <div className="hidden pl-4 sm:ml-6 sm:space-x-4 lg:flex">
              {categoriesNav.map((category, index) => (
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
                className=" relative cursor-pointer hover:dark:bg-bgBlackColor inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 hover:bg-scale-500 shadow-none focus-visible:outline-scale-700  text-xs px-2.5 py-1 hidden group lg:flex"
                type="button"
              >
                <div className="flex items-center justify-center w-4 h-4 text-secondary">
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
                className="bg-scale-100 hover:bg-scale-300 hover:dark:shadow-scale-800 dark:bg-[#18181c] hover:dark:bg-scale-1100 dark:text-white text-xs"
              ></ButtonSmall>
            </a>
            <a href="https://app.supabase.com/">
              <ButtonSmall
                className="bg-scale-primary text-white hover:bg-scale-secondary dark:bg-scale-primary hover:dark:bg-scale-secondary border-scale-secondary dark:border-secondary border"
                type="button"
                title="Start your project"
              ></ButtonSmall>
            </a>
          </div>
        </div>
        <div className="flex flex-1 sm:items-stretch lg:hidden lg:justify-between relative h-16 mx-auto lg:container lg:px-16 xl:px-20 border-color">
          <div className="absolute inset-y-0 left-0 flex items-center px-4">
            <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="text-scale-900 dark:text-scale-150 focus:ring-secondary dark:bg-scale-1300 inline-flex items-center justify-center rounded-md bg-gray-50 p-2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpenMenu ? <MenuHambugerIcon /> : <CloseIcon />}
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch lg:justify-between">
            <div className="flex items-center flex-shrink-0">
              <Link href="/">
                <Image alt="logo" src={theme === "dark" ? LogoDark : Logo} />
              </Link>
            </div>
          </div>
        </div>
        {isOpenMenu && (
          <NavigationMobile setIsOpenMenu={() => setIsOpenMenu(false)} />
        )}
      </nav>
    </>
  );
};

export default Navigation;
