"use client";

import { Box, ThemeProvider } from "@mui/material";
import theme from "../theme";
import HeaderLayout from "./HeaderLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body style={{ margin: 0 }}>
          <HeaderLayout />
          <main>{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
