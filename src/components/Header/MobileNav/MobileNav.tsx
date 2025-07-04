"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { NavData } from "../Nav/NavData/NavData";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-amber-200" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <SheetTitle>
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href={"/"}>
              <h1 className="text-4xl font-semibold">
                Ripon<span className="text-amber-200">.</span>
              </h1>
            </Link>
          </div>
        </SheetTitle>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {NavData.map((singleNav, index) => (
            <Link
              href={singleNav.path}
              key={index}
              className={`${
                singleNav.path === pathname &&
                "text-amber-200 border-b-2 border-amber-200"
              } text-xl capitalize hover:text-amber-200 transition-all`}
            >
              {singleNav.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
