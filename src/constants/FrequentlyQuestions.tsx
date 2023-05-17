interface FrequentlyQuestionsProps {
  title: string;
  description: string;
}

export const frequentlyQuestions: Array<FrequentlyQuestionsProps> = [
  {
    title: "Can I cap my usage so my bill doesn't run over?",
    description:
      "Yes. Spend caps are on by default on the Pro tier. You can turn spend caps off for usage beyond the tier limits to pay as you grow.",
  },
  {
    title:
      "I'm worried I could end up with a huge bill at the end of the month.",
    description:
      "Spend caps are on by default and you need to toggle them off from your dashboard to enable pay as you grow pricing.",
  },
  {
    title: "When will I be billed?",
    description:
      "Our Pro tier is charged up front, and billed on a monthly basis. Additional usage costs are also billed at the end of the month.",
  },
  {
    title: "Are you going to change your pricing in the future?",
    description:
      "Our pricing is in Beta. You can read more about our decisions in our pricing blog post. Pricing may change in the future, however as a team of developers we are committed to pricing being as developer friendly as possible.",
  },
  {
    title: "What happens if I cancel my subscription?",
    description:
      "The organization is allocated credits for unused time during the billing month. Those credits can be used for other projects.",
  },
  {
    title: "Do I get a notification if I am approaching my usage limits?",
    description:
      "Yes, we will email you when you are within 20% of your tier limits ",
  },
  {
    title: "What if I need one project for development and one for production?",
    description:
      "We are working on multi-environment projects. For now, you can create a project for your development backend and production backend. We give you 2 free projects as part of our free tier. This means you could have a development and a production server as part of your free tier.",
  },
  {
    title: "Can I self-host Supabase for free?",
    description:
      "Yes, you can use the Docker setup or the Supabase CLI. Supabase Studio is also available in the Docker setup.",
  },
  {
    title: "Can I pause a free project?",
    description:
      "Yes, you can pause a project at any time. Our Free tier gives you 2 free projects, but you can have as many paused projects as you want. Just pause and unpause them as needed.  ",
  },
];
