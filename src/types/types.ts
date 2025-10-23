import type { JSX } from "react";

export type ThemeMode = "light" | "dark";
export type DataSet = 'visitors' | 'engagement'

export type AppRoute = {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
};

export type LoaderProps = {
  size?: number;
  color?: string;
  fullscreen?: boolean;
};

export type DataSetMenu = {
  id: number;
  slug: DataSet;
  label: string
}