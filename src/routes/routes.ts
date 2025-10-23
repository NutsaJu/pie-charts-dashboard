import { lazy } from "react";
import type { AppRoute } from "../types/types";

const Dashboard = lazy(() => import("../pages/Dashboard"));

export const routes: AppRoute[] = [
  { path: "/", component: Dashboard},
];
