"use client";

import { motion } from "framer-motion"; // For framer-motion
import localFont from "next/font/local"; // Import the local font

// Your custom font
const myFont = localFont({
  src: "../fonts/NeueMontreal-Bold.otf",
  variable: "--font-myfont", // Define a CSS variable for the font
});

export default function HireMeButton() {
  return (
    <div className={myFont.className}>
      <div className="flex flex-col gap-16 items-center justify-center text-center">
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] dark:text-white"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120, 0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="currentColor ">
              <textPath xlinkHref="#circlePath" className="text-lg">
                Designer ⭑ Developer ⭑ Designer ⭑ Developer ⭑
              </textPath>
            </text>
          </motion.svg>
          <span
            className={` w-16 h-16 md:w-28 md:h-28 absolute top-0 uppercase left-0 right-0 bottom-0 m-auto bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center text-xs md:text-sm lg:text-base xl:text-lg`}
          >
            Hire Me
          </span>
        </div>
      </div>
    </div>
  );
}
