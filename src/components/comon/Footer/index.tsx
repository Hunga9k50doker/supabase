"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { categoriesFooter } from "@/constants/CategoriesFooter";
import {
  TwitterIcon,
  DiscordIcon,
  GithubIcon,
  YoutubeIcon,
  LightThemeIcon,
  DarkThemeIcon,
} from "@/assets/icons";

const Footer = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const handleTheme = () => {
    if (theme === systemTheme) setTheme("dark");
    else setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <footer className="border-scale-500 dark:border-scale-600 border-t">
      <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/">Logo</Link>
            <div className="flex space-x-5">
              <a
                href="https://twitter.com/supabase"
                className="text-textColor hover:text-blackColor transition"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon />
              </a>
              <a
                href="https://github.com/supabase"
                className="text-textColor hover:text-blackColor transition"
              >
                <span className="sr-only">GitHub</span>
                <GithubIcon />
              </a>
              <a
                href="https://discord.supabase.com/"
                className="text-textColor hover:text-blackColor transition"
              >
                <span className="sr-only">Discord</span>
                <DiscordIcon />
              </a>
              <a
                href="https://youtube.com/c/supabase"
                className="text-textColor hover:text-blackColor transition"
              >
                <span className="sr-only">Youtube</span>
                <YoutubeIcon />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {categoriesFooter?.length > 0 &&
                categoriesFooter.map((category, index) => (
                  <div key={index}>
                    <h6 className="text-blackColor overwrite text-base dark:text-white">
                      {category.title}
                    </h6>
                    <ul className="mt-4 space-y-2">
                      {category.items.map((item, index) => (
                        <li key={index}>
                          <a
                            href="/database"
                            className="text-sm transition-colors text-textColor hover:text-blackColor  "
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="border-scale-500 dark:border-scale-600 mt-32 flex justify-between border-t pt-8 text-textColor">
          <small className="small">© Supabase Inc</small>
          <div className="flex items-center">
            <LightThemeIcon />
            <button
              onClick={handleTheme}
              type="button"
              aria-pressed="false"
              className="
                relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent
                transition-colors duration-200 ease-in-out focus:outline-none bg-bgGrayColor dark:bg-bgBlackColor mx-5
              "
            >
              <span className="sr-only">Toggle Themes</span>
              <span
                aria-hidden="true"
                className="
                  translate-x-0 dark:translate-x-5 inline-block h-5 w-5
                  transform rounded-full bg-white dark:bg-bgDarkThumbColor shadow-lg ring-0 transition duration-200 ease-in-out
                "
              ></span>
            </button>
            <DarkThemeIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;