"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;
