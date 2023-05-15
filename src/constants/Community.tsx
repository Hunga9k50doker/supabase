"use client";

import { TwitterBlueIcon } from "@/assets/icons";
import { user_01 } from "@/assets/imgs";
import React from "react";
interface communityProps {
  icon: any;
  avatar: any;
  username: string;
  description: string;
  twitter_url: string;
}

export const community: Array<communityProps> = [
  {
    icon: <TwitterBlueIcon />,
    avatar: user_01,
    username: "BraydonCoyer",
    twitter_url: "https://twitter.com/varlenneto/status/1496595780475535366",
    description:
      "And thanks to @supabase, I was able to go from idea to launched feature in a matter of hours. Absolutely amazing!",
  },
  {
    icon: <TwitterBlueIcon />,
    avatar: user_01,
    username: "Authentication",
    twitter_url: "https://twitter.com/varlenneto/status/1496595780475535366",
    description:
      "Add user sign ups and logins, securing your data with Row Level Security.",
  },
  {
    icon: <TwitterBlueIcon />,
    avatar: user_01,
    username: "Storage",
    twitter_url: "https://twitter.com/varlenneto/status/1496595780475535366",
    description:
      "Store, organize, and serve large files. Any media, including videos and images.",
  },
  {
    icon: <TwitterBlueIcon />,
    avatar: user_01,
    username: "Edge Functions",
    twitter_url: "https://twitter.com/varlenneto/status/1496595780475535366",
    description: "Write custom code without deploying or scaling servers.",
  },
];
