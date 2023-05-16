import React from "react";
import WrapTitle from "@/components/WrapTitle";
import Image from "next/image";
const CostControl = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center mt-12 lg:mt-8 max-w-6xl mx-auto">
      <WrapTitle
        className_description="text-md"
        style={{
          fontSize: "16px !important",
          wordSpacing: "1px",
          lineHeight: "28px",
        }}
        className_subttile="bg-primary text-brand-1100 rounded-md bg-opacity-20 inline-block dark:bg-primary dark:text-white py-0.5 px-2 text-xs mt-2"
        subtitle="Available for Pro plan"
        title="Cost control with spend caps"
        description="The Pro tier has a usage quota included and a spend cap turned on by
          default. If you need to go beyond the inclusive limits, simply switch
          off your spend cap to pay for additional usage and scale seamlessly.
          Note that your project will run into restrictions if you have the
          spend cap enabled and exhaust your quota."
      />
      <div>
        <div className="">
          <Image
            className="w-full"
            src={"https://supabase.com/images/pricing/spend-cap-light.png"}
            alt="not found"
            width={448}
            height={265}
          />
        </div>
      </div>
    </div>
  );
};

export default CostControl;
