import React from "react";
import Link from "next/link";
import { DropdownIcon, StarIcon } from "@/assets/icons";
import Button from "@/components/Button";

const Navigation = () => {
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
    <nav className="flex items-center justify-center border-scale-400 border-b backdrop-blur-sm transition-opacity false border-colorScale3">
      <div className="flex flex-1 sm:items-stretch lg:justify-between relative h-16 mx-auto lg:container lg:px-16 xl:px-20 border-color">
        <div className="flex items-center">
          <div>Logo</div>
          <div className="hidden pl-4 sm:ml-6 sm:space-x-4 lg:flex">
            {categories.map((category, index) => (
              <div key={index}>
                <Link
                  href={category.path}
                  className="flex items-center gap-2 font-medium text-sm hover:text-lightGreenColor"
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
              className=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 hover:bg-scale-500 shadow-none focus-visible:outline-scale-700  text-xs px-2.5 py-1 hidden group lg:flex"
              type="button"
            >
              <div className="flex items-center justify-center w-4 h-4 text-brand-800">
                <div
                  className="text-yellow flex h-3 w-3 items-center justify-center

                            transition-all
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
                <span>Star us on GitHub</span>
              </span>
            </button>
          </a>
          <a href="https://app.supabase.com/">
            <Button
              title="Sign in"
              type="button"
              className="
             border relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-1200 bg-scale-100 hover:bg-scale-300 bordershadow-scale-600 hover:bordershadow-scale-700 dark:bordershadow-scale-700 hover:dark:bordershadow-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 focus-visible:outline-brand-600  shadow-sm text-xs px-2.5 py-1 hidden lg:block truncate "
            ></Button>
          </a>
          <a href="https://app.supabase.com/">
            <Button
              className="border relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1  bg-primary hover:bg-lightGreenColor text-white bordershadow-primary hover:bordershadow-brand-fixed-900 dark:bordershadow-primary dark:hover:bordershadow-primary focus-visible:outline-brand-600 fs-12 shadow-sm text-xs px-2.5 py-1 hidden text-white lg:block"
              type="button"
              title="Start your project"
            ></Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
