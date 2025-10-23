import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    PrimaryBaseWhite: string;
    PrimaryGray300: string;
    PrimaryBaseBlack: string;
    PrimaryBlue600: string;
    SecondaryPurple400: string;
    PrimaryGray600: string;
    SecondaryOrange400: string;
    SupportingGreen500: string;
  }
}
