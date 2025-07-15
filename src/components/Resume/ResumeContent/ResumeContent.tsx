"use client";

import { motion } from "motion/react";
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
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

import { getYearDifferenceFromDate } from "@/components/Home/Stats/YearCalculation/YearCalculation";
import { EducationData } from "@/components/Resume/EducationData/EducationData";
import { ExperienceData } from "@/components/Resume/ExperienceData/ExperienceData";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ResumeContent() {
  const yearOfExperience = getYearDifferenceFromDate("2022-01-01");

  // about data
  const aboutData = {
    title: "About me",
    description:
      "A web developer and a curious learner who loves building websites and trying to fix critical errors. Although it's not always enjoyable, I always try to do my best.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Ripon Mondal",
      },
      {
        fieldName: "Phone",
        fieldValue: "+880 1956 149980",
      },
      {
        fieldName: "Experience",
        fieldValue: `${yearOfExperience}+ Years`,
      },
      {
        fieldName: "GitHub",
        fieldValue: "riponmondalbd",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Bangladeshi",
      },
      {
        fieldName: "Email",
        fieldValue: "contact.riponmondal@gmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Language",
        fieldValue: "English, Bengali",
      },
    ],
  };

  // skills data
  const skillsData = {
    title: "My skills",
    description:
      "A diverse set of technical and creative skills built through real-world projects and continuous learning.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
      {
        icon: <FaBootstrap />,
        name: "Bootstrap",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <FaFigma />,
        name: "Figma",
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
      },
      {
        icon: <SiExpress />,
        name: "Express.js",
      },
      {
        icon: <FaGithub />,
        name: "Github",
      },
    ],
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w[380px] mx-auto xl:mx-0 gap-6">
            {/* <TabsTrigger value="experience">Experience</TabsTrigger> */}
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* contents */}

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{ExperienceData.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {ExperienceData.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {ExperienceData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-amber-200">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* make dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-amber-200"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{EducationData.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {EducationData.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {EducationData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          {/* <span className="text-amber-200">
                            {item.duration}
                          </span> */}
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* make dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-amber-200"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skillsData.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skillsData.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skillsData.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-amber-200 transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{aboutData.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {aboutData.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {aboutData.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
