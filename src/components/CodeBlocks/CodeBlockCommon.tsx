"use client";

import React, { useState, useEffect } from "react";
import Prism from "prismjs";
// import "prismjs/components/prism-javascript"; // Language
// import "prismjs/themes/prism-okaidia.css";
import { CopyIcon } from "@/assets/icons";
interface CodeBlockCommonProps {
  className?: string;
  children: React.ReactNode;
}
const CodeBlockCommon = ({
  className = "lang-js",
  children,
}: CodeBlockCommonProps) => {
  const language = className.replace("lang-", "");
  const [isCopy, setIsCopy] = useState(false);
  const [mounted, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <pre className="rounded-t-lg rounded-b-lg bg-[#181818] overflow-x-auto px-[21px] py-[24px] text-scale-50 text-sm leading-1.4 tracking-[0.5px]">
        <code className={`language-${language} whitespace-pre`}>
          {children}
        </code>
      </pre>
      <div className="dark absolute right-2 top-2">
        <button
          className="relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-100 hover:bg-scale-500 shadow-none focus-visible:outline-scale-700  text-xs px-2.5 py-1"
          type="button"
        >
          <CopyIcon />
        </button>
      </div>
    </div>
  );
};

export default CodeBlockCommon;
