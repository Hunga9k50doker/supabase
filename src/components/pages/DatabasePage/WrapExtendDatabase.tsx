/* eslint-disable react/no-unescaped-entities */
import WrapTitle from "@/components/WrapTitle";
import React from "react";
import Tag from "@/components/Tag";
import { ArrowNextIcon, CopyIcon } from "@/assets/icons";
import { tabListEtandDatabase } from "@/constants/TabList";
import TabList from "@/components/TabList";
import ButtonLarge from "@/components/ButtonLarge";
import GeographicalBlock from "@/components/CodeBlocks/GeographicalBlock";
const WrapExtendDatabase = () => {
  return (
    <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 lg:py-48">
      <div className="grid grid-cols-12 lg:gap-16">
        <div className="col-span-12 mb-8 lg:col-span-6 xl:col-span-5">
          <WrapTitle
            className_title="mt-0 mb-16 fs-24"
            className_description="mt-0 mb-16 fs-16"
            title="Extend your database"
            description={`Supabase works natively with Postgres extensions.`}
          >
            <p className="text-scale-1100 dark:text-scale-150 mb-16">
              Choose from a huge collection of Postgres extensions, enabled with
              a single click.
            </p>
            <p className="mb-16">40+ preinstalled extensions</p>
            <p className="text-scale-1100  dark:text-scale-150 mb-16">
              We only show a few of the extensions supported by supabase here,
              but we preinstall many more that you can use right away.
            </p>
            <ButtonLarge type="button">
              <ArrowNextIcon transform="rotate(-45)" />
              <span>Explore documentation</span>
            </ButtonLarge>
          </WrapTitle>
        </div>
        <div className="col-span-12 mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0">
          <TabList data={tabListEtandDatabase} />
          <GeographicalBlock />
          <div className="bg-scale-100 mt-2 dark:bg-scale-1300 border-scale-500 dark:border-scale-550 overflow-hidden rounded-md border p-8">
            <WrapTitle
              className_title="fs-18 mb-8"
              className_description="mb-16"
              title="Spatial and Geographic objects for PostgreSQL"
              description="PostGIS is a spatial database extender for PostgreSQL object-relational database. It adds support for geographic objects allowing location queries to be run in SQL."
            >
              <div>
                <p className="p mr-4">Extensions used:</p>
                <Tag title=" PostGIS" />
              </div>
            </WrapTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapExtendDatabase;
