// "use client"; // Required for client-side interactivity in Next.js App Router

// import React, { useEffect } from "react";
// import { useAnimate, motion } from "framer-motion";

// interface NavMenuToggleProps {
//   menuOpen: boolean;
//   setMenuOpen: (open: boolean) => void;

//   children: React.ReactNode;
// }

// export const NavButton: React.FC<NavMenuToggleProps> = ({
//   menuOpen,
//   setMenuOpen,
//   children,
// }) => {
//   const path1Controls = useAnimate();
//   const path2Controls = useAnimate();

//   const path1Variants = {
//     open: {
//       d: "M3.06061 2.99999L21.0606 21",
//     },
//     closed: {
//       d: "M0 8.5L24 8.5",
//     },
//   };

//   const path2Variants = {
//     open: {
//       d: "M3.00006 21.0607L21 2.06064",
//     },
//     closed: {
//       d: "M0 15.5L24 15.5",
//     },
//   };

//   useEffect(() => {
//     if (menuOpen) {
//       path1Controls.start(path1Variants.open);
//       path2Controls.start(path2Variants.open);
//     } else {
//       path1Controls.start(path1Variants.closed);
//       path2Controls.start(path2Variants.closed);
//     }
//   }, [menuOpen]);

//   return (
//     <button
//       onClick={() => setMenuOpen(!menuOpen)}
//       aria-label={menuOpen ? "Close menu" : "Open menu"}
//       aria-expanded={menuOpen}
//       className="relative justify-self-center flex flex-col gap-2 cursor-pointer dark: stroke-black dark:stroke-gray-300 stroke-2 z-50"
//     >
//       <svg width="24" height="24" viewBox="0 0 24 24">
//         <motion.path {...path1Variants.closed} animate={path1Controls} />
//         <motion.path {...path2Variants.closed} animate={path2Controls} />
//       </svg>
//     </button>
//   );
// };

"use client"; // Required for client-side interactivity in Next.js App Router

import React from "react";
import { motion } from "framer-motion";

interface NavMenuToggleProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  children?: React.ReactNode;
}

export const NavButton: React.FC<NavMenuToggleProps> = ({
  menuOpen,
  setMenuOpen,
  children,
}) => {
  const path1Variants = {
    open: {
      d: "M3.06061 2.99999L21.0606 21", // Cross
    },
    closed: {
      d: "M3 8.5L21 8.5", // Horizontal line
    },
  };

  const path2Variants = {
    open: {
      d: "M3.00006 21.0607L21 2.06064", // Cross
    },
    closed: {
      d: "M3 15.5L21 15.5", // Horizontal line
    },
  };

  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      className="relative justify-self-center flex flex-col gap-2 cursor-pointer  stroke-black dark:stroke-gray-300 stroke-2 z-50"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="stroke-current"
      >
        {/* Line 1 */}
        <motion.path
          variants={path1Variants}
          animate={menuOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
          initial="closed"
          strokeWidth="2"
          strokeLinecap="round" // Always rounded ends
        />
        {/* Line 2 */}
        <motion.path
          variants={path2Variants}
          animate={menuOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
          initial="closed"
          strokeWidth="2"
          strokeLinecap="round" // Always rounded ends
        />
      </svg>
    </button>
  );
};
