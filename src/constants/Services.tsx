"use client";

import {
  DatabaseIcon,
  FunctionIcon,
  StorageIcon,
  AuthenticationIcon,
} from "@/assets/icons";
import React from "react";
interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const services: Array<ServiceProps> = [
  {
    icon: <DatabaseIcon />,
    title: "Database",
    description:
      "Every project is a full Postgres database, the world's most trusted relational database.",
  },
  {
    icon: <FunctionIcon />,
    title: "Authentication",
    description:
      "Add user sign ups and logins, securing your data with Row Level Security.",
  },
  {
    icon: <StorageIcon />,
    title: "Storage",
    description:
      "Store, organize, and serve large files. Any media, including videos and images.",
  },
  {
    icon: <AuthenticationIcon />,
    title: "Edge Functions",
    description: "Write custom code without deploying or scaling servers.",
  },
];
