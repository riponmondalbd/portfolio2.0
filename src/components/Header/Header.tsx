import Link from "next/link";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav/MobileNav";
import Nav from "./Nav/Nav";

export default function Header() {
  return (
    <div className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Ripon<span className="text-amber-200">.</span>
          </h1>
        </Link>
        {/* desktop nav and hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          {/* desktop nav */}
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
