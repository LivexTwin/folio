// "use client";
// import { navItems } from "utils/navData";

// import { useState } from "react";
// import Link from "next/link";
// import { NavButton } from "./NavButton";
// import { AnimatePresence, motion } from "framer-motion";

// export function NavMenu() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="relative block sm:hidden">
//       <NavButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0, opacity: 0 }}
//             transition={{ duration: 0.5, type: "spring" }}
//             className="absolute -top-2 -right-2 w-64 min-h-64 rounded-lg bg-white shadow-md dark:bg-black p-8 z-10 flex flex-col origin-top-right"
//           >
//             <ul className="flex flex-col gap-2 flex-1">
//               {Object.entries(navItems).map(([path, { name }]) => (
//                 <li key={path}>
//                   <Link
//                     href={path}
//                     className="text-2xl font-medium"
//                     onClick={() => setMenuOpen(false)} // Close menu on navigation
//                   >
//                     {name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";
import { navItems } from "utils/navData";
import { useState } from "react";
import Link from "next/link";
import { NavButton } from "./NavButton";
import { AnimatePresence, motion } from "framer-motion";

export function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [disableAnimation, setDisableAnimation] = useState(false);

  const handleLinkClick = () => {
    setDisableAnimation(true);
    setMenuOpen(false);
  };

  const handleToggleMenu = () => {
    setDisableAnimation(false);
    setMenuOpen((prev) => !prev);
  };

  // Shared animation settings
  const animationProps = disableAnimation
    ? {}
    : {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0, opacity: 0 },
        transition: { duration: 0.5, type: "spring" },
      };

  const menuContent = (
    <motion.div
      {...animationProps}
      className="absolute -top-3 -right-2 w-64 min-h-64 rounded-lg bg-white shadow-md dark:bg-[#0a0a0a] p-8 z-10 flex flex-col origin-top-right"
    >
      <ul className="flex flex-col gap-4 flex-1 pt-4">
        {Object.entries(navItems).map(([path, { name }]) => (
          <li key={path}>
            <Link
              href={path}
              className="text-2xl font-medium"
              onClick={handleLinkClick}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className="relative block sm:hidden">
      <NavButton menuOpen={menuOpen} setMenuOpen={handleToggleMenu} />
      {disableAnimation ? (
        menuOpen && menuContent
      ) : (
        <AnimatePresence>{menuOpen && menuContent}</AnimatePresence>
      )}
    </div>
  );
}
