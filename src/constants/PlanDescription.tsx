interface PlanDescriptionProps {
  id: number;
  title: string;
  description: string;
  price: number;
  subttile?: string;
  benefits: Array<string>;
  benefit_title: string;
  other_title?: string;
}

export const planDescription: Array<PlanDescriptionProps> = [
  {
    id: 1,
    title: "free",
    description: "Perfect for passion projects & simple websites.",
    price: 0,
    subttile: "Limit of 2 free projects",
    benefit_title: "Get started with",
    benefits: [
      "Social OAuth providers",
      "Up to 500MB database & 1GB file storage",
      "Up to 2GB bandwidth",
      "Up to 50MB file uploads",
      "50,000 monthly active users",
      "Up to 500K Edge Function invocations",
      "200 concurrent Realtime connections",
      "2 million Realtime messages",
      "1-day log retention",
      "Community support",
    ],
    other_title: "Free projects are paused after 1 week of inactivity.",
  },
  {
    id: 2,
    title: "pro",
    description: "PFor production applications with the option to scale.",
    price: 25,
    subttile: "+usage",
    benefit_title: "Everything in the Free plan, plus",
    benefits: [
      "No project pausing",
      "8GB database & 100GB file storage",
      "50GB bandwidth",
      "5GB file uploads",
      "100,000 monthly active users",
      "2M Edge Function invocations",
      "500 concurrent Realtime connections",
      "5 million Realtime messages",
      "7-day log retention",
      "Email support",
      "Daily backups",
    ],
    other_title:
      "Additional fees apply for usage and storage beyond the limits above.",
  },
  {
    id: 3,
    title: "ENTERPRISE",
    description: "For large-scale applications managing serious workloads.",
    price: 0,
    benefit_title: "These apply to all projects within the organization",
    benefits: [
      "Designated Support manager & SLAs",
      "Enterprise OAuth providers",
      "SSO/ SAML",
      "SOC2",
      "Custom contracts & invoicing",
      "On-premise support",
      "24×7×365 premium enterprise support",
      "Custom Security questionnaires",
      "Private Slack channel",
      "Uptime SLA",
    ],
  },
];
