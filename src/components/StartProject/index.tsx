import React from "react";
import ButtonLarge from "@/components/ButtonLarge";
const StartProject = () => {
  return (
    <div
      className="
        bg-scale-50 grid grid-cols-12 items-center gap-4 border-t py-32 text-center
         px-16 dark:bg-bgDarkThumbColor  dark:border-scale-1250
      "
    >
      <div className="col-span-12">
        <h2 className="h2">
          <span className="text-scale-900 dark:text-scale-1100">
            Build in a weekend,
          </span>
          <span className="text-scale-1200 dark:text-white">
            {" "}
            scale to millions
          </span>
        </h2>
      </div>
      <div className="col-span-12 mt-4">
        <a href="https://app.supabase.com/">
          <ButtonLarge
            className="bg-scale-primary hover:bg-secondary dark:bg-scale-primary hover:dark:bg-secondary text-white px-4 line-height-1.5"
            type="button"
            title="Start your project"
          ></ButtonLarge>
        </a>
      </div>
    </div>
  );
};

export default StartProject;
