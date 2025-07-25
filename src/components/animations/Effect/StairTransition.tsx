"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Stairs from "../Stairs/Stairs";

export default function StairTransition() {
  const pathname = usePathname();
  return (
    <div>
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
        <motion.div
          className="h-screen w-screen fixed bg-[#1c1b22] top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1.5, duration: 0.4, ease: "easeInOut" },
          }}
        />
      </div>
    </div>
  );
}
