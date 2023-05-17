import React from "react";
import WrapTitle from "@/components/WrapTitle";
import { tableCompares } from "@/constants/TableComparePlan";
import { wrapCustomize } from "@/constants/WrapCustomize";
import TableCompare from "@/components/TableCompare";
const ComparePlans = () => {
  return (
    <div className="sm:py-18 container relative mx-auto px-4 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20">
      <WrapTitle
        className_title="text-center text-3xl scroll-m-20"
        className_description="text-center mt-4 mb-8 lg:mb-16 text-lg mt-16"
        style={{ marginBottom: "64px", marginTop: "16px !important" }}
        title="Compare plans"
        description="Start with a hobby project, collaborate with a team, and scale to millions of users."
      />
      <div className="sm:mb-18 mb-16 md:mb-24 lg:mb-24">
        <div className="hidden lg:block">
          <TableCompare />
        </div>
      </div>
    </div>
  );
};

export default ComparePlans;
