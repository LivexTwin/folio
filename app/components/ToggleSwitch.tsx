"use client"; // Add this line to make it a client component
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes"; // Import useTheme from next-themes

const ToggleSwitch = () => {
  const [mounted, setMounted] = useState(false); // To track whether the component has mounted
  const { theme, setTheme } = useTheme(); // Access theme and setTheme from next-themes
  const [isToggled, setIsToggled] = useState(false); // Local state to control the toggle

  // Set mounted to true after the component has mounted on the client
  useEffect(() => {
    setMounted(true);
    // Sync the toggle state with the current theme
    setIsToggled(theme === "dark");
  }, [theme]);

  // Prevent rendering until the component has mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Handle toggle click
  const toggleSwitch = () => {
    const newTheme = isToggled ? "light" : "dark";
    setTheme(newTheme); // Update the theme using next-themes
    setIsToggled(!isToggled); // Update the local toggle state
  };

  return (
    <div
      role="switch" // Indicates that this is a switch for screen readers
      aria-checked={isToggled} // State of the switch
      aria-label="Toggle dark mode" // Describes the switch
      className={`relative flex items-center w-[34px] h-5 rounded-full p-[2px] cursor-pointer transition-colors ${
        isToggled ? "bg-neutral-400 justify-end" : "bg-black justify-start"
      }`}
      onClick={toggleSwitch}
      tabIndex={0} // Makes the element focusable with the keyboard
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          // Allow toggling with Enter or Space keys
          toggleSwitch();
        }
      }}
    >
      <motion.div
        className={`w-4 h-4 rounded-full shadow-md ${
          isToggled ? "bg-black" : "bg-gray-300"
        }`}
        layout // Automatically animates position changes
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
};

export default ToggleSwitch;
