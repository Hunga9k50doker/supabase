import React from "react";

const Header = () => {
  return (
      <div className="relative w-full cursor-pointer ">
        <div className="absolute right-4 flex h-full items-center opacity-50 transition-opacity hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sbui-icon "
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <div className="w-full h-14 p-2 bg-gradient-to-r from-[#9E44EF] to-[#DBB8BF] bg-blue-300 flex items-center justify-center text-white">
          <div className="w-full flex gap-3 md:gap-6 items-center justify-center">
            <p>Supabase Launch Week 7</p>
            <div>
              <a
                href="#"
                className="bg-white text-xs px-1.5 md:px-2.5 py-1 rounded-full text-[#9E44EF] shadow-none hover:shadow-mg cursor-pointer"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
