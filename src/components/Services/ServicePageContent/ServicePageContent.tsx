"use client";

import { ServicesDetails } from "@/components/Services/ServicesDetails/ServicesDetails";
import { BsArrowDownRight } from "react-icons/bs";

import { motion } from "motion/react";
import Link from "next/link";
export default function ServicePageContent() {
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
                <div className="text-5xl font-extrabold text-outline transition-all duration-500 group-hover-text-outline-hover">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-[#1c1b22] text-3xl" />
                </Link>
              </div>
              {/* service title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500">
                {service.title}
              </h2>
              {/* service description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
