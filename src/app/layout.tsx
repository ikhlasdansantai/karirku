import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "../theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karirku",
  description: "Mencari kerja jadi lebih mudah dan efisien",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
