/* eslint-disable react/no-unescaped-entities */
"use client";
import ButtonLarge from "@/components/ButtonLarge";
import React from "react";
import { services } from "@/constants/Services";
import { ArrowRightIcon, CopyIcon, GithubStrokeIcon } from "@/assets/icons";
import { usefulAPI, usefulAPIButton } from "@/constants/UsefulAPI";
import CardServiceBuild from "@/components/Cards/CardServiceBuild";

const UsefulAPI = () => {
  return (
    <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
      <div className="grid grid-cols-12 lg:gap-16">
        <div className="col-span-12 pb-8 lg:col-span-5 xl:col-span-5">
          <h2 className="h3">Instant APIs that do the hard work for you</h2>
          <div className="mt-4">
            <p className="lg:text-lg text-base">
              We introspect your database to provide APIs instantly. Stop
              building repetitive CRUD endpoints and focus on your product.
            </p>
          </div>
          <div className="py-8">
            <dl className="grid grid-cols-12 gap-y-4 md:gap-8">
              {usefulAPI.map((item, index) => (
                <div
                  key={index}
                  className="col-span-12 md:col-span-6 lg:col-span-6"
                >
                  <div className="lg:mt-5">
                    <dt>
                      <h4 className="text-scale-1200 dark:text-scale-100 mb-4 text-base">
                        {item.title}
                      </h4>
                      <p className="p">{item.description}</p>
                      <a
                        className="text-scale-1100 hover:text-scale-1200 mt-3 block cursor-pointer text-xs"
                        href="/docs/client/generating-types"
                      >
                        <div className="group flex items-center gap-1">
                          <span className="sr-only">
                            Explore more about /docs/client/generating-types
                          </span>
                          <span>Explore more</span>
                          <div className="transition-all group-hover:ml-0.5">
                            <ArrowRightIcon />
                          </div>
                        </div>
                      </a>
                    </dt>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="sbui-tabs--alt col-span-12 lg:col-span-7 xl:col-span-6 xl:col-start-7">
          <div
            dir="ltr"
            data-orientation="horizontal"
            className="w-full justify-between space-y-4"
          >
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="flex space-x-1 overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right pb-2"
              data-orientation="horizontal"
            >
              {usefulAPIButton.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected="true"
                  aria-controls={`radix-5-content-${index}`}
                  data-state="active"
                  id={`radix-5-trigger-${index}`}
                  className={`relative flex items-center space-x-2 text-center transition shadow-sm rounded border-scale-800 border focus:outline-none focus-visible:ring focus-visible:ring-scale-700 focus-visible:border-scale-900  text-xs px-2.5 py-1 ${
                    item.active
                      ? "text-scale-1200 bg-scale-600"
                      : "text-scale-900 cursor-pointer hover:text-scale-1200 hover:border-scale-1200"
                  }`}
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <pre className="rounded-t-lg rounded-b-lg block text-[#ddd] bg-[#181818] py-[21px] px-[24px] overflow-auto font-size-[0.875rem]">
              <code className="language-js white-space-pre span">
                <span className="text-[#569cd6] span">import</span>
                <span className="span"> {"{ createClient }"} </span>
                <span className="text-[#569cd6] span">from</span>
                <span> </span>
                <span className="text-primary span">
                  '@supabase/supabase-js'
                </span>
                <br />
                <span className="text-[#75715e] span">{"// Initialize"}</span>
                <br />
                <br />
                <span className="text-[#569cd6] span">const</span>
                <span className="span"> supabaseUrl = </span>
                <span className="text-primary span">
                  'https://chat-room.supabase.co'
                </span>
                <br />
                <br />
                <span className="ctext-[#569cd6] span">const</span>
                <span className="span"> supabaseKey = </span>
                <span className="text-primary span">'public-anon-key'</span>
                <br />
                <span className="ctext-[#569cd6] span">const</span>
                <span className="span">
                  {" "}
                  supabase = createClient(supabaseUrl, supabaseKey)
                </span>
                <br />
                <br />
                <span className="text-[#75715e] span">
                  {"// Create a new user"}
                </span>
                <br />
                <span className="text-[#569cd6] span">const</span>
                <span className="span"> {"{ user, error }"} = </span>
                <span className="text-[#569cd6] span">await</span>
                <span className="span">
                  {" "}
                  {"supabase.auth.signUpWithPassword({"}
                </span>
                <br />
                <span> </span>
                <span className="hljs-attr span">email</span>
                <span>: </span>
                <span className="text-primary span">'example@email.com'</span>
                <span>,</span>
                <span> </span>
                <span className="hljs-attr span">password</span>
                <span>: </span>
                <span className="text-primary span">'example-password'</span>
                <span>,</span>
                {"})"}
              </code>
            </pre>
            <div className="dark absolute right-2 top-2">
              <button
                className=" relative cursor-pointer inline-flex items-center space-x-2 text-center font-regular transition ease-out duration-200 rounded outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1   text-scale-100 hover:text-scale-1200 hover:bg-scale-500 shadow-none focus-visible:outline-scale-700  text-xs px-2.5 py-1"
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

export default UsefulAPI;
