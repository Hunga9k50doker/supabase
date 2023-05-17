interface WrapCustomizeProps {
  id: number;
  icon: any;
  icon_dark: any;
  title: string;
  description: string;
  image: string;
  image_dark: string;
  price: number;
  tooltip: string;
  url: string;
}

export const wrapCustomize: Array<WrapCustomizeProps> = [
  {
    id: 1,
    icon: "https://supabase.com/images/pricing/compute-upgrade-light.svg",
    icon_dark: "https://supabase.com/images/pricing/compute-upgrade.svg",
    image: "https://supabase.com/images/pricing/addons-compute-hero-light.png",
    image_dark: "https://supabase.com/images/pricing/addons-compute-hero.png",
    price: 5,
    tooltip: "Starts from",
    title: "Optimized Compute",
    description:
      "Increase the capability of your database only for what you need.",
    url: "https://supabase.com/docs/guides/database/optimizing-compute",
  },
  {
    id: 2,
    icon: "https://supabase.com/images/pricing/custom-domain-upgrade-light.svg",
    image: "https://supabase.com/images/pricing/addons-domains-hero-light.png",
    icon_dark: "https://supabase.com/images/pricing/custom-domain-upgrade.svg",
    image_dark: "https://supabase.com/images/pricing/addons-domains-hero.png",
    price: 10,
    tooltip: "Flat fee ",
    title: "Custom Domain",
    description:
      "Use your own domain for your Supabase project to present a more polished product to your users.",
    url: "https://supabase.com/docs/guides/database/optimizing-compute",
  },
  {
    id: 3,
    icon: "https://supabase.com/images/pricing/pitr-upgrade-light.svg",
    image: "https://supabase.com/images/pricing/addons-pitr-hero-light.png",
    icon_dark: "https://supabase.com/images/pricing/pitr-upgrade.svg",
    image_dark: "https://supabase.com/images/pricing/addons-pitr-hero.png",
    price: 100,
    tooltip: "Starts from",
    title: "Point in Time Recovery",
    description:
      "Roll back to any specific point in time and ensure that data is not lost.",
    url: "https://supabase.com/docs/guides/database/optimizing-compute",
  },
];
