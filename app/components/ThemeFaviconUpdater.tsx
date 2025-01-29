"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeFaviconUpdater = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      const faviconPath =
        theme === "dark" ? "/favicon-dark.ico" : "/favicon.ico";
      favicon.setAttribute("href", faviconPath);
    }
  }, [theme]);

  return null;
};

export default ThemeFaviconUpdater;
