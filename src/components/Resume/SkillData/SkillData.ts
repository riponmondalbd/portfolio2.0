"use client";

import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiCanva,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { SkillsData } from "./SkillTypes";

export const skillsData: SkillsData = {
  title: "My skills",
  description:
    "A diverse set of technical and creative skills built through real-world projects and continuous learning.",
  skillList: [
    { icon: FaHtml5, name: "HTML 5" },
    { icon: FaCss3, name: "CSS 3" },
    { icon: FaJs, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: FaReact, name: "React.js" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiRedux, name: "Redux.js" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: FaBootstrap, name: "Bootstrap" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaFigma, name: "Figma" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiMongoose, name: "Mongoose" },
    { icon: SiExpress, name: "Express.js" },
    { icon: FaGithub, name: "GitHub" },
    { icon: SiCanva, name: "Canva" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiPrisma, name: "Prisma" },
    { icon: SiPostman, name: "Postman" },
  ],
};
