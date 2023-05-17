import {
  AuthenticationIcon,
  ThunderIcon,
  PostgresqlIcon,
} from "@/assets/icons";
interface CombineDatabaseProps {
  id: number;
  icon: any;
  title: string;
  subtilte: string;
  description: string;
}

export const combineDatabase: Array<CombineDatabaseProps> = [
  {
    id: 1,
    icon: <PostgresqlIcon />,
    title: "Just Postgres",
    subtilte: "Every Supabase project is a dedicated Postgres database.",
    description:
      "100% portable. Bring your existing Postgres database, or migrate away at any time.",
  },
  {
    id: 2,
    icon: <AuthenticationIcon />,
    title: "Built-in Auth",
    subtilte: "Leveraging PostgreSQL's proven Row Level Security.",
    description:
      "Integrated with JWT authentication which controls exactly what your users can access.",
  },
  {
    id: 3,
    icon: <ThunderIcon />,
    title: "Realtime enabled",
    subtilte: "Data-change listeners over websockets.",
    description:
      "Subscribe and react to database changes, milliseconds after they happen.",
  },
];
