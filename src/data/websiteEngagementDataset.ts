import type { DashboardDataset } from "../types/types";

export const websiteEngagementDataset: DashboardDataset = {
  id: "B",
  label: "Website Engagement Overview",
  periods: [
    {
      label: "Last Week",
      chart1: {
        title: "Sessions by Page Type",
        data: [
          { name: "Home Page", value: 3500 },
          { name: "Product Pages", value: 2900 },
          { name: "Blog / Content", value: 2100 },
          { name: "Contact / Support", value: 800 },
        ],
      },
      chart2: {
        title: "Bounce Rate by Channel",
        data: [
          { name: "Organic", value: 2300 },
          { name: "Social", value: 3200 },
          { name: "Direct", value: 1800 },
          { name: "Referral", value: 1600 },
        ],
      },
    },
    {
      label: "Last Month",
      chart1: {
        title: "Sessions by Page Type",
        data: [
          { name: "Home Page", value: 13800 },
          { name: "Product Pages", value: 11200 },
          { name: "Blog / Content", value: 8600 },
          { name: "Contact / Support", value: 3400 },
        ],
      },
      chart2: {
        title: "Bounce Rate by Channel",
        data: [
          { name: "Organic", value: 9700 },
          { name: "Social", value: 12400 },
          { name: "Direct", value: 8200 },
          { name: "Referral", value: 6200 },
        ],
      },
    },
    {
      label: "Last Year",
      chart1: {
        title: "Sessions by Page Type",
        data: [
          { name: "Home Page", value: 162000 },
          { name: "Product Pages", value: 138000 },
          { name: "Blog / Content", value: 106000 },
          { name: "Contact / Support", value: 42000 },
        ],
      },
      chart2: {
        title: "Bounce Rate by Channel",
        data: [
          { name: "Organic", value: 113000 },
          { name: "Social", value: 142000 },
          { name: "Direct", value: 96000 },
          { name: "Referral", value: 72000 },
        ],
      },
    },
  ],
};