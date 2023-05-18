import { CheckIcon } from "@/assets/icons";
import { PlanDescription as TypeCard } from "@/configs";
import ButtonLarge from "../ButtonLarge";
interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  subttile?: string;
  benefits: Array<string>;
  benefit_title: string;
  other_title?: string;
  id: number;
}
interface dataProps {
  data: PricingCardProps;
}
const PricingCard = ({ data }: dataProps) => {
  return (
    <div
      className={`${
        TypeCard.PRO === data.id
          ? "bg-primary dark:bg-primary border dark:border-0 px-0.5 -mt-8 rounded-[6px]"
          : ""
      }`}
    >
      {TypeCard.PRO === data.id && (
        <p className="text-xs text-center py-2 text-white">Most Popular</p>
      )}
      <div
        className={`flex flex-col overflow-hidden ${
          TypeCard.PRO === data.id
            ? ""
            : "border dark:border-0 h-full rounded-[4px]"
        }`}
      >
        <div className="dark:bg-scale-1300 bg-white px-8 pt-6 rounded-tr-[4px] rounded-tl-[4px]">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex items-center gap-2">
              <h3 className="text-secondary dark:text-secondary text-2xl font-normal uppercase flex items-center gap-4 font-mono">
                {data.title}
              </h3>
            </div>
          </div>
          <p className="text-scale-1100 my-4 h-[55px] text-sm border-b dark:border-scale-1250 pb-4 lg:pr-20">
            {data.description}
          </p>
          <div className="text-scale-1200 flex items-baseline text-5xl font-normal lg:text-4xl xl:text-4xl border-b dark:border-scale-1250 pt-4 pb-8 min-h-[175px] flex-1">
            <div className="flex flex-col gap-1 justify-center">
              <div className="flex items-end gap-2 justify-center">
                {TypeCard.ENTERPRISE === data.id ? (
                  <div>
                    <p className="text-scale-900 ml-1 text-xs font-normal"></p>
                    <p className="mt-2 text-scale-1200 dark:text-scale-100 pb-1 text-4xl">
                      Contact us
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-scale-250 ml-1 text-xs font-normal leading-4">
                      Starting from
                    </p>
                    <p className="mt-2 text-scale-1200 dark:text-scale-100 pb-1 text-5xl">
                      ${data.price}
                    </p>
                    <p className="text-scale-250 mt-0.5 text-xs leading-4">
                      per month per project
                    </p>
                    <p className="mt-2 leading-4">
                      <span className="bg-primary text-primary rounded-md bg-opacity-20 py-0.5 px-2 text-xs ">
                        {data.subttile}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`dark:border-scale-400 dark:bg-scale-1300 flex h-full rounded-bl-[4px] rounded-br-[4px] flex-1 flex-col bg-white px-8 py-6 ${
            TypeCard.PRO === data.id ? "mb-0.5" : ""
          }`}
        >
          <p className="text-scale-1100 text-xs mt-2 mb-4">Get started with:</p>
          <ul className="text-xs text-scale-1000">
            {data.benefits.map((benefit, index) => (
              <div className="flex items-center py-2 first:mt-0" key={index}>
                <CheckIcon />
                <span className="dark:text-scale-300 mb-0 ml-3 ">
                  {benefit}
                </span>
              </div>
            ))}
          </ul>
          <div className="flex flex-col gap-6 mt-auto prose">
            <div className="space-y-2 mt-12">
              <p className="text-xs text-scale-1100">{data.other_title}</p>
            </div>

            <ButtonLarge
              className={`w-full bg-scale-primary dark:bg-scale-primary border-scale-secondary border-scale-secondary dark:border-secondary border hover:bg-scale-secondary hover:dark:bg-scale-secondary text-white justify-center leading-4
              `}
              title={
                TypeCard.ENTERPRISE !== data.id ? "Get Started" : "Contact Us"
              }
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
