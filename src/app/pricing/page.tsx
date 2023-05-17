import React from "react";
import WrapTitle from "@/components/WrapTitle";
import PricingCard from "@/components/Cards/PricingCard";
import { planDescription } from "@/constants/PlanDescription";
import ButtonSmall from "@/components/ButtonSmall";
import WrapCustomize from "@/components/pages/PricingPage/WrapCustomize";
import CostControl from "@/components/pages/PricingPage/CostControl";
import ComparePlans from "@/components/pages/PricingPage/ComparePlans";
import FrequentlyQuestion from "@/components/pages/PricingPage/FrequentlyQuestion";
const Pricing = () => {
  return (
    <main className="pricing_page bg-scale-50 dark:bg-bgDarkThumbColor">
      <div className="relative z-10 py-16 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <WrapTitle
            subtitle="Pricing"
            title="Predictable pricing, no surprises"
            description="Start building for free, collaborate with a team, then scale to millions of users"
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col">
        <div className="relative z-10 mx-auto -mt-8 w-full px-4 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-md grid lg:max-w-6xl lg:grid-cols-3 gap-24 lg:gap-5 h-full">
            {planDescription?.length > 0 &&
              planDescription.map((card, index) => (
                <PricingCard data={card} key={index} />
              ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-24">
        <a href="#compare-plans">
          <ButtonSmall
            className="m-auto shadow-lg"
            type="button"
            title="Compare Plans"
          ></ButtonSmall>
        </a>
      </div>
      <div className="sm:py-18 container relative mx-auto px-4 py-16 shadow-sm md:py-24 lg:px-12 lg:pt-32 lg:pb-12">
        <WrapCustomize />
        <CostControl />
      </div>
      <ComparePlans />
      <FrequentlyQuestion />
    </main>
  );
};

export default Pricing;
