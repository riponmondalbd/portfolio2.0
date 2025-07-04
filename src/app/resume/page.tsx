"use client";

import { getYearDifferenceFromDate } from "@/components/Home/Stats/YearCalculation/YearCalculation";

export default function ResumePage() {
  const yearOfExperience = getYearDifferenceFromDate("2022-01-01");

  const about = {
    title: "About me",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem modi vel rerum! Vitae autem non eius minus, explicabo labore.",
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
  return <div>resume page</div>;
}
