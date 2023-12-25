import { TypographyVariants as TypographyVariantsOption } from "@mui/material/styles";
import { Mulish, Open_Sans } from "next/font/google";

export const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const OpenSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export interface TypographyVariants extends TypographyVariantsOption {}

export default {
  fontFamily: `${mulish.style.fontFamily}`,
  htmlFontSize: 16,
  fontSize: 14,
  fontWeightRegular: 400,
  fontWeightBold: 700,
  h1: {
    ...mulish.style,
    fontWeight: 700,
    fontSize: "36px",
    // lineHeight: "20px",
    letterSpacing: ".010em",
  },
  h2: {
    ...mulish.style,
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",
  },
  h3: {
    ...OpenSans.style,
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "1.2em",
    letterSpacing: ".08em",
  },
  h4: {
    ...mulish.style,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: 1.235,
    letterSpacing: "0.00735em",
  },
  h5: {
    ...mulish.style,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.334,
    letterSpacing: "0em",
  },
  h6: {
    ...mulish.style,
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
  },
  subtitle1: {
    ...mulish.style,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "1.5rem",
    letterSpacing: ".08em",
  },
  subtitle2: {
    ...mulish.style,
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: 1.57,
    letterSpacing: "0.00714em",
  },
  body1: {
    ...mulish.style,
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "14px",
    letterSpacing: ".06em",
  },
  body2: {
    ...mulish.style,
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "1.5em",
    letterSpacing: ".08em",
  },
  button: {
    ...mulish.style,
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
  },
  caption: {
    ...mulish.style,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
  },
  overline: {
    ...mulish.style,
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 2.66,
    letterSpacing: "0.08333em",
    textTransform: "uppercase",
  },
} as TypographyVariants;
