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
import CreateRecord from "@/components/CodeBlocks/CreateRecord";

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
          <CreateRecord />
        </div>
      </div>
    </div>
  );
};

export default WrapWriteAPI;
