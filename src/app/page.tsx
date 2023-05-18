import BrandHeader from "@/components/pages/HomePage/BrandHeader";
import Features from "@/components/pages/HomePage/Features";
import Comunity from "@/components/pages/HomePage/Comunity";
import FeaturesBuild from "@/components/pages/HomePage/FeaturesBuild";
import UsefulAPI from "@/components/pages/HomePage/UsefulAPI";
import ManageData from "@/components/pages/HomePage/ManageData";
import CustomerStory from "@/components/pages/HomePage/CustomerStory";
import StartProject from "@/components/StartProject";

import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-scale-50 dark:bg-bgDarkThumbColor">
      <BrandHeader />
      <Features />
      <Comunity />
      <FeaturesBuild />
      <UsefulAPI />
      <ManageData />
      <CustomerStory />
      <StartProject />
    </main>
  );
}
