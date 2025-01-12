"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Update dark mode based on user preference in localStorage
  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "enabled") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Toggle dark mode and update localStorage
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    }
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-3 rounded-full focus:outline-none"
      whileTap={{ scale: 0.9 }} // Smooth tap animation
      animate={{ rotate: isDark ? 360 : 0 }} // Rotate effect
      transition={{ duration: 0.3 }}
    >
      {isDark ? (
        <BsSun className="text-yellow-400" />
      ) : (
        <BsMoon className="text-gray-700" />
      )}
    </motion.button>
  );
};

export default DarkModeToggle;
