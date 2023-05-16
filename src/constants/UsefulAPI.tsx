interface usefulAPIProps {
  title: string;
  description: string;
}

export const usefulAPI: Array<usefulAPIProps> = [
  {
    title: "TypeScript Support",
    description: "Type definitions built directly from your database schema",
  },
  {
    title: "Authentication",
    description:
      "Add user sign ups and logins, securing your data with Row Level Security.",
  },
  {
    title: "Storage",
    description:
      "Store, organize, and serve large files. Any media, including videos and images.",
  },
  {
    title: "Edge Functions",
    description: "Write custom code without deploying or scaling servers.",
  },
];

export const usefulAPIButton = [
  {
    title: "Create user",
    active: true,
  },
  {
    title: "Realtime subscriptions",
    active: false,
  },
  {
    title: "Read a record",
    active: false,
  },
  {
    title: "Create a record",
    active: false,
  },
  {
    title: "Update a record",
    active: false,
  },
];
