import type { JSX } from "react";

export type ThemeMode = "light" | "dark";
export type DataSet = "visitors" | "engagement";

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
  label: string;
};

export type ChartDataItem = {
  name: string;
  value: number;
};

export type ChartGroup = {
  title: string;
  data: ChartDataItem[];
};

export type DatasetPeriod = {
  label: string;
  slug: string;
  chart1: ChartGroup;
  chart2: ChartGroup;
};

export type DashboardDataset = {
  id: string;
  label: string;
  periods: DatasetPeriod[];
};

export type ButtonProps = {
  id: string;
  active?: boolean;
  title?: string;
  onClick?: () => void;
};

export type PieChartCardProps = {
  title: string;
  data: ChartDataItem[];
};
export type EmptyStateProps = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}