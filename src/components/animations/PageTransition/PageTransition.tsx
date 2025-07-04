"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      <div>
        <div key={pathname}>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1.2, duration: 0.4, ease: "easeInOut" },
            }}
            className="h-screen w-screen fixed bg-[#1c1b22] top-0 pointer-events-none"
          />
          {children}
        </div>
      </div>
    </div>
  );
}
