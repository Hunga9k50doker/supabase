/* eslint-disable react/no-unescaped-entities */
"use client";
import ButtonLarge from "@/components/ButtonLarge";
import React from "react";
import { GithubStrokeIcon } from "@/assets/icons";
import { serviceBuilds } from "@/constants/ServicesBuild";
import CardServiceBuild from "@/components/Cards/CardServiceBuild";
const FeaturesBuild = () => {
  return (
    <div className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 xl:pt-32">
      <div className="text-center">
        <h3 className="h2">What can you build with supabase?</h3>
        <p className="p">
          There are many example apps and starter projects to get going
        </p>
        <div className="flex justify-center gap-2 py-4">
          <a href="https://github.com/supabase/docs/guides/examples">
            <ButtonLarge title="View all examples" type="button"></ButtonLarge>
          </a>
          <a href="https://github.com/supabase/supabase/tree/master/examples">
            <ButtonLarge type="button" title="">
              <GithubStrokeIcon />
              Official github library
            </ButtonLarge>
          </a>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-12 gap-5">
        {serviceBuilds?.length > 0 &&
          serviceBuilds.map((serviceBuild, index) => (
            <CardServiceBuild key={index} serviceBuild={serviceBuild} />
          ))}
      </div>
    </div>
  );
};

export default FeaturesBuild;
