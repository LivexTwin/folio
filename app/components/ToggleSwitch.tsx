"use client"; // Make it a client component
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ToggleSwitch = () => {
  const { theme, setTheme } = useTheme(); // Access theme and setTheme from next-themes
  const [isToggled, setIsToggled] = useState(false); // Local state to control the toggle

  // Sync the toggle state with the theme immediately after theme is applied
  useEffect(() => {
    // Set the initial toggle state based on the current theme
    setIsToggled(theme === "dark");
  }, [theme]); // Update the toggle when the theme changes

  // Handle toggle click
  const toggleSwitch = () => {
    const newTheme = isToggled ? "light" : "dark";
    setTheme(newTheme); // Update the theme using next-themes
    setIsToggled(!isToggled); // Update the local toggle state
  };

  return (
    <div
      role="switch"
      aria-checked={isToggled}
      aria-label="Toggle dark mode"
      className={`relative flex items-center z-50 w-[34px] h-5 rounded-full p-[2px] cursor-pointer transition-colors ${
        isToggled ? "bg-gray-300 justify-end" : "bg-black justify-start"
      }`}
      onClick={toggleSwitch}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleSwitch();
        }
      }}
    >
      <motion.div
        className={`w-4 h-4 rounded-full shadow-md ${
          isToggled ? "bg-black" : "bg-gray-300"
        }`}
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
};

export default ToggleSwitch;
