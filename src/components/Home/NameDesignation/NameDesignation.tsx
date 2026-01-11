import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { FiDownload } from "react-icons/fi";
import Social from "../Social/Social";

const NameDesignation = () => {
  return (
    <div className="text-center xl:text-left order-2 xl:order-none">
      <span className="text-xl">Web Developer</span>
      <h1 className="h1 mb-6">
        Hello I&apos;m <br />
        <span className="text-amber-200">Ripon Mondal</span>
      </h1>
      <p className="max-w-[500px] mb-9 text-white/80">
        A web developer and a curious learner who loves building websites and
        trying to fix critical errors. Although it&apos;s not always enjoyable,
        I always try to do my best.
      </p>

      {/* button and social */}
      {/* cv download button */}
      <div className="flex flex-col xl:flex-row  items-center gap-8">
        <Link
          href={
            "https://drive.google.com/drive/folders/1Ynu8DElNyvGStsfQpwcE-sV-TSxGVIRs?usp=sharing"
          }
          target="_blank"
        >
          <Button
            variant={"outline"}
            size={"lg"}
            className="uppercase flex items-center gap-2 hover:transition-all duration-500"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button>
        </Link>

        {/* social buttons */}
        <div className="mb-8 xl:mb-0">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default NameDesignation;
