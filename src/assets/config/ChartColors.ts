import { type DefaultTheme } from "styled-components";

export const getChartColors = (theme: DefaultTheme): string[] => {
  return [
    theme.PrimaryBlue600,
    theme.SecondaryOrange400,
    theme.SupportingGreen500,
    theme.SecondaryPurple400,
    theme.PrimaryGray600,
    theme.PrimaryGray300,
  ];
};