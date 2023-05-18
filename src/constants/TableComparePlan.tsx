import { DatabaseIcon, AuthenticationIcon, StorageIcon } from "@/assets/icons";

type TableCompareProps = {
  id: number;
  icon: any;
  title: string;
  items: Array<{
    title: string;
    moreInfo: boolean;

    data: Array<{
      plan_id: number;
      value: string | boolean | object;
    }>;
  }>;
};

export const tableCompares: Array<TableCompareProps> = [
  {
    id: 1,
    icon: <DatabaseIcon />,
    title: "Database",
    items: [
      {
        title: "Dedicated Postgres Database",
        moreInfo: true,
        data: [
          { plan_id: 1, value: true },
          {
            plan_id: 2,
            value: true,
          },
          {
            plan_id: 3,
            value: true,
          },
        ],
      },
      {
        title: "Unlimited API requests",
        moreInfo: false,
        data: [
          { plan_id: 1, value: true },
          {
            plan_id: 2,
            value: true,
          },
          {
            plan_id: 3,
            value: true,
          },
        ],
      },
      {
        title: "Database size",
        moreInfo: true,
        data: [
          { plan_id: 1, value: "500 MB" },
          {
            plan_id: 2,
            value: "8 GB, then $0.125 per GB",
          },
          {
            plan_id: 3,
            value: "Unlimited",
          },
        ],
      },
      {
        title: "Automatic backups",
        moreInfo: true,
        data: [
          { plan_id: 1, value: false },
          {
            plan_id: 2,
            value: {
              title: "7 days",
            },
          },
          {
            plan_id: 3,
            value: "Custom",
          },
        ],
      },
      {
        title: "Point in time recovery",
        moreInfo: true,
        data: [
          { plan_id: 1, value: false },
          {
            plan_id: 2,
            value: {
              title: "$100 per 7 days",
            },
          },
          {
            plan_id: 3,
            value: true,
          },
        ],
      },
      {
        title: "Pausing",
        moreInfo: true,
        data: [
          { plan_id: 1, value: "After 1 inactive week" },
          {
            plan_id: 2,
            value: "Never",
          },
          {
            plan_id: 3,
            value: "Never",
          },
        ],
      },
      {
        title: "Database egress",
        moreInfo: true,
        data: [
          { plan_id: 1, value: "2GB" },
          {
            plan_id: 2,
            value: "50 GB, then $0.09 per GB",
          },
          {
            plan_id: 3,
            value: "Unlimited",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    icon: <AuthenticationIcon />,
    title: "Auth",
    items: [
      {
        title: "Total Users",
        moreInfo: true,
        data: [
          { plan_id: 1, value: 'Unlimited' },
          {
            plan_id: 2,
            value: 'Unlimited',
          },
          {
            plan_id: 3,
            value: 'Unlimited',
          },
        ],
      },
      {
        title: "Unlimited",
        moreInfo: true,
        data: [
          { plan_id: 1, value: '50,000' },
          {
            plan_id: 2,
            value: '100,000, then $0.00325 per MAU',
          },
          {
            plan_id: 3,
            value: 'Unlimited',
          },
        ],
      },
      {
        title: "Social OAuth providers",
        moreInfo: true,
        data: [
          { plan_id: 1, value: true },
          {
            plan_id: 2,
            value: true,
          },
          {
            plan_id: 3,
            value: true,
          },
        ],
      },
      {
        title: "Custom SMTP server",
        moreInfo: true,
        data: [
          { plan_id: 1, value: true },
          {
            plan_id: 2,
            value: {
              title: true,
            },
          },
          {
            plan_id: 3,
            value: true,
          },
        ],
      },
      {
        title: "Point in time recovery",
        moreInfo: true,
        data: [
          { plan_id: 1, value: false },
          {
            plan_id: 2,
            value: {
              title: "$100 per 7 days",
            },
          },
          {
            plan_id: 3,
            value: true,
          },
        ],
      },
      {
        title: "Remove Supabase branding from emails",
        moreInfo: true,
        data: [
          { plan_id: 1, value:false },
          {
            plan_id: 2,
            value: true,
          },
          {
            plan_id: 3,
            value: true,
          },
        ],
      },
      {
        title: "Enterprise OAuth providers",
        moreInfo: true,
        data: [
          { plan_id: 1, value: false },
          {
            plan_id: 2,
            value: false,
          },
          {
            plan_id: 3,
            value: true,
          },
        ],
      },
    ],
  },
];
