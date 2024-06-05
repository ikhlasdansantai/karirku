"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { responsiveFontSizes } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const base = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    error: {
      main: red[400],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      // sm: 640
      sm: 685,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

const theme = responsiveFontSizes(base);

export default theme;
