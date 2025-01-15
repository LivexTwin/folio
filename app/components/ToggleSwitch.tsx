"use client"; // Add this line to make it a client component
import { motion } from "framer-motion";
import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <motion.div
      className={`relative flex items-center w-[34px] h-5 rounded-3xl p-[2px] transition-colors ${
        isOn ? "bg-blue-500 justify-end" : "bg-gray-300 justify-start"
      }`}
      onClick={toggleSwitch}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-white shadow-md"
        animate={{
          scaleX: isOn ? 1 : -1, // Flip the ball for smooth transition
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
};

export default ToggleSwitch;
