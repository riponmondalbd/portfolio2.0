import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/riponmondalbd",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/riponmondalbd",
  },
  {
    icon: <FaFacebook />,
    path: "https://m.facebook.com/riponmondalbd",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/riponmondalbd",
  },
];

export default function Social() {
  return (
    <div className="flex gap-4">
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="w-9 h-9 border border-amber-200 rounded-full flex justify-center items-center text-amber-200 text-base hover:bg-amber-200 hover:text-[#1c1b22] hover:transition-all duration-500"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
