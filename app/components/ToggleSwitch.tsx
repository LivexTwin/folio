"use client"; // Add this line to make it a client component
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes"; // Import useTheme from next-themes

const ToggleSwitch = () => {
  const [mounted, setMounted] = useState(false); // To track whether the component has mounted
  const { theme, setTheme } = useTheme(); // Access theme and setTheme from next-themes

  // Set mounted to true after the component has mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until the component has mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Handle theme toggle
  const toggleSwitch = () => {
    // Toggle between 'dark' and 'light' themes
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.div
      role="switch" // Indicates that this is a switch for screen readers
      aria-checked={theme === "dark" ? "true" : "false"} // State of the switch
      aria-label="Toggle dark mode" // Describes the switch
      className={`relative flex items-center w-[34px] h-5 rounded-3xl p-[2px] transition-colors ${
        theme === "dark"
          ? "bg-neutral-400 justify-end" // Dark mode: Gray background and ball is black
          : "bg-black justify-start" // Light mode: Black background and ball is gray
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
          theme === "dark" ? "bg-black" : "bg-gray-300"
        }`}
        animate={{
          scaleX: theme === "dark" ? 1 : -1, // Flip the ball for smooth transition
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
};

export default ToggleSwitch;
