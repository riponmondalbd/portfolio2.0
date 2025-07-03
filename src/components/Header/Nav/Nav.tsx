"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavData } from "./NavData/NavData";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {NavData.map((singleNav, index) => (
        <Link
          href={singleNav.path}
          key={index}
          className={`${
            singleNav.path === pathname &&
            "text-amber-200 border-b-2 border-amber-200"
          } capitalize font-medium hover:text-amber-200 transition-all`}
        >
          {singleNav.name}
        </Link>
      ))}
    </nav>
  );
}
