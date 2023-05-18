import React from "react";
import { CloseIcon } from "@/assets/icons";
import { categoriesNav } from "@/constants/CategoriesNav";
import Link from "next/link";

interface NavigationMobileProps {
  setIsOpenMenu: () => void;
}
const NavigationMobile = ({ setIsOpenMenu }: NavigationMobileProps) => {
  return (
    <div className="dark:bg-scale-1300 fixed -inset-y-0 z-500 h-screen w-screen transform overflow-y-scroll p-4 md:p-8 bg-scale-150 enter-done">
      <div className="absolute items-center justify-between right-4 top-4">
        <div className="-mr-2">
          <button
            onClick={setIsOpenMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 bg-white rounded-md text-scale-900 focus:ring-secondary dark:bg-scale-1300 hover:dark:bg-scale-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset"
          >
            <span className="sr-only">Close menu</span>
            <CloseIcon />
          </button>
        </div>
      </div>
      <div className="mt-6 mb-12">
        <div className="pt-2 pb-4 space-y-1" onClick={setIsOpenMenu}>
          <Link
            className="block pl-3 pr-4 text-md font-medium text-scale-250 dark:text-white"
            href="#"
          >
            Sign in
          </Link>
        </div>
        {categoriesNav.map((item, index) => (
          <div
            className="pt-2 pb-4 space-y-1"
            key={index}
            onClick={setIsOpenMenu}
          >
            <Link
              className="block py-2 pl-3 pr-4 text-md font-medium rounded-md text-scale-250 hover:dark:bg-scale-600 hover:border-gray-300 hover:bg-gray-50 dark:text-white"
              href={item.path}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationMobile;
