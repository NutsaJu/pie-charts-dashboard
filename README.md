# Pie Charts Dashboard

A responsive dashboard built with React and TypeScript that visualizes multiple datasets using pie charts.  
This project demonstrates skills in modern front-end development, including data visualization, theming, responsive design, and component architecture.

---

# Overview

The dashboard displays two main data categories:

- Website Visitors Overview
- Website Engagement Overview

Each dataset includes two pie charts visualizing specific metrics such as device type, traffic sources, sessions, or bounce rates.

Users can:

- Switch between datasets (Visitors / Engagement)
- Filter data by period (Last Week, Last Month, Last Year)
- Toggle between light and dark themes
- Hide or show chart segments dynamically
- View responsive and animated charts that adapt to all devices

---

# Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | React (Vite) |
| Language | TypeScript |
| State Management | Redux Toolkit |
| Styling | styled-components |
| Charts | Recharts |
| Routing | React Router |
| Icons | React Icons |
| Code Quality | ESLint, Prettier |
| Responsive Design | Custom Responsive.ts breakpoints |
| Theming | Styled-components ThemeProvider (light/dark modes) |

---

# Installation and Setup

Before starting, make sure you have Node.js (v18 or later) and npm installed on your machine.

1. Clone the repository

- git clone #url

2. Install dependencies

Install all required packages:

- npm install

3. Start the development server

Run the following command to start the local development environment:

- npm run dev

4. Build for production

To create an optimized production build, run:

- npm run build

The build output will be located in the /dist directory.
You can preview the build locally using:

- npm run preview

---

## Usage Guide

- Dashboard Structure

The dashboard includes:
- A header with project title, dataset selector, and theme toggle
- A period filter section for switching between Last Week, Last Month, and Last Year
- Two pie charts displaying the active dataset
- A fallback empty state if no data is available

- Switching Between Datasets

The header contains chips for “Website Visitors” and “Website Engagement.”
Clicking on these updates both pie charts with new data from the selected dataset.

- Filtering by Period

Below the header, there are buttons labeled “Last Week,” “Last Month,” and “Last Year.”
Selecting one of these filters updates the chart data accordingly.

- Theme Switching

Click the theme toggle icon in the header to switch between light and dark themes.
The selected theme is saved locally and persists between sessions.
All chart and UI colors update automatically based on the current theme.

- Filtering Chart Segments

Each pie chart includes a legend for categories.
Clicking on a legend item hides or shows that specific chart segment, allowing dynamic filtering.

- Empty State

If there is an error and no dataset or period is selected, the dashboard displays a placeholder message using the EmptyState component to indicate that no data is currently available.

---

## Developer Notes

- All colors used in the charts and throughout the dashboard are defined in the shared Figma design file.
- Responsive breakpoints are defined in Responsive.ts.
- The header is fixed, and only the content area is scrollable.
- The project uses styled-components for theme management and isolated component styling.
- Each major UI element (Header, Button, ChartCard, EmptyState) is built as a reusable, independent component.
