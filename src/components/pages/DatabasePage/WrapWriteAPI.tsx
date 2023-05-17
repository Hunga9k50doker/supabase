/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import WrapTitle from "@/components/WrapTitle";
import ButtonLarge from "@/components/ButtonLarge";
import { ArrowNextIcon, CopyIcon } from "@/assets/icons";
import Link from "next/link";
import Tag from "@/components/Tag";
import TabList from "@/components/TabList";
import { tabListAPI } from "@/constants/TabList";
const WrapWriteAPI = () => {
  const tags = ["Python", "Dart", "C++", "Kotlin"];
  return (
    <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 -mb-48">
      <div className="grid grid-cols-12 lg:gap-16">
        <div className="col-span-12 pb-8 lg:col-span-5 xl:col-span-5">
          <WrapTitle
            className_title="fs-24 mb-16 mt-0"
            className_description="mb-16"
            title="Never write an API again"
            description="We introspect your database and provide instant APIs. Focus on building your product, while Supabase handles the CRUD."
          >
            <Link href="#">
              <ButtonLarge title="" type="button" className="mt-4">
                <ArrowNextIcon transform="rotate(-45)" />
                Explore documentation
              </ButtonLarge>
            </Link>
            <div className="py-8">
              <div className="grid grid-cols-12">
                <div className="col-span-12 mt-0 flex lg:col-span-6 xl:col-span-12 xl:mb-8">
                  <p className="text-scale-1100 m-0">Libraries coming soon:</p>
                  <div className="ml-1 space-x-1">
                    {tags.map((tag, index) => (
                      <Tag key={index} title={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </WrapTitle>
        </div>
        <div className="sbui-tabs--alt col-span-12 lg:col-span-7 xl:col-span-6 xl:col-start-7">
          <TabList data={tabListAPI} />
          <div className="relative">
            <pre className="rounded-t-lg rounded-b-lg bg-[#181818] overflow-x-auto px-[21px] py-[24px] text-scale-50 text-sm leading-1.4 tracking-[0.5px]">
              <code className="language-js whitespace-pre">
                <span className="text-scale-650">// Create a record</span>
                <br></br>
                <br></br>
                <span className="text-scale-650">
                  // Insert new record into a table called `rooms`
                </span>
                <br></br>
                <span className="text-secondary">const</span>
                <span> {"{ data, error }"} = </span>
                <span className="text-secondary">await</span>
                <span> supabase</span>
                <br />
                <span> .from(</span>
                <span className="text-secondary">'rooms'</span>
                <span>
                  ) <br />
                </span>{" "}
                {".insert({ "} <br />
                &nbep;<span className="hljs-attr">name</span>
                <span>: </span>
                <span className="text-secondary">'Supabase Fan Club'</span>
                <span>,</span>
                <br />
                <span className="hljs-attr">public</span>
                <span>: </span>
                <span className="text-secondary">true</span>
                <br /> {"})"}
              </code>
            </pre>
            <div className="dark absolute right-2 top-2">
              <button
                className="relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-100 hover:bg-scale-500 shadow-none focus-visible:outline-scale-700  text-xs px-2.5 py-1"
                type="button"
              >
                <CopyIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapWriteAPI;
