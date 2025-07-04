"use client";

import { ServicesDetails } from "@/components/Services/ServicesDetails/ServicesDetails";
import { BsArrowDownRight } from "react-icons/bs";

import { motion } from "motion/react";
import Link from "next/link";
export default function ServicesPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid md:grid-cols-2 gap-[60px]"
        >
          {ServicesDetails.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top bar */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold">{service.num}</div>
                <Link href={service.href}>
                  <BsArrowDownRight />
                </Link>
              </div>
              {/* service title */}
              <h2>{service.title}</h2>
              {/* service description */}
              <p>{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
