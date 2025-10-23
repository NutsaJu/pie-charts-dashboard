import type { DashboardDataset } from "../types/types";

export const websiteVisitorsDataset: DashboardDataset = {
  id: "A",
  label: "Website Visitors Overview",
  periods: [
    {
      label: "Last Week",
      chart1: {
        title: "Users by Device Type",
        data: [
          { name: "Desktop", value: 4800 },
          { name: "Mobile", value: 4200 },
          { name: "Tablet", value: 900 },
        ],
      },
      chart2: {
        title: "Traffic Sources",
        data: [
          { name: "Organic Search", value: 4600 },
          { name: "Social Media", value: 2800 },
          { name: "Direct", value: 1700 },
          { name: "Referral", value: 900 },
        ],
      },
    },
    {
      label: "Last Month",
      chart1: {
        title: "Users by Device Type",
        data: [
          { name: "Desktop", value: 15200 },
          { name: "Mobile", value: 13400 },
          { name: "Tablet", value: 3100 },
        ],
      },
      chart2: {
        title: "Traffic Sources",
        data: [
          { name: "Organic Search", value: 14100 },
          { name: "Social Media", value: 7800 },
          { name: "Direct", value: 5300 },
          { name: "Referral", value: 2600 },
        ],
      },
    },
    {
      label: "Last Year",
      chart1: {
        title: "Users by Device Type",
        data: [
          { name: "Desktop", value: 168000 },
          { name: "Mobile", value: 142000 },
          { name: "Tablet", value: 29000 },
        ],
      },
      chart2: {
        title: "Traffic Sources",
        data: [
          { name: "Organic Search", value: 154000 },
          { name: "Social Media", value: 91000 },
          { name: "Direct", value: 62000 },
          { name: "Referral", value: 31000 },
        ],
      },
    },
  ],
};