"use client"; // Ensure this is a client-side component
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ToggleSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme(); // Use resolvedTheme for synchronization
  const [mounted, setMounted] = useState(false); // To track whether the component has mounted

  // After component mounts, set the mounted state to true
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until the theme is resolved
  if (!mounted) return null;

  // Use resolvedTheme for the final theme value (this ensures we're using the applied theme)
  const isDarkMode = resolvedTheme === "dark";

  // Handle the toggle switch action
  const toggleSwitch = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div
      role="switch"
      aria-checked={isDarkMode}
      aria-label="Toggle dark mode"
      className={`relative flex items-center z-50 w-[34px] h-5 rounded-full p-[2px] cursor-pointer transition-colors ${
        isDarkMode ? "bg-gray-300 justify-end" : "bg-black justify-start"
      }`}
      onClick={toggleSwitch}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleSwitch(); // Allow toggling with Enter or Space keys
        }
      }}
    >
      <motion.div
        className={`w-4 h-4 rounded-full shadow-md ${
          isDarkMode ? "bg-black" : "bg-gray-300"
        }`}
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
};

export default ToggleSwitch;
