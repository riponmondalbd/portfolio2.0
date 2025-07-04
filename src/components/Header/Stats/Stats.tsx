"use client";

import CountUp from "react-countup";
import { getYearDifferenceFromDate } from "./YearCalculation/YearCalculation";

export default function Stats() {
  const yearOfExperience = getYearDifferenceFromDate("2023-01-01");

  const stats = [
    {
      num: yearOfExperience,
      text: "Years of experience",
    },
    {
      num: 26,
      text: "Projects completed",
    },
    {
      num: 8,
      text: "Technologies mastered",
    },
    {
      num: 500,
      text: "Code commits",
    },
  ];
  return (
    <div>
      {stats.map((item, index) => (
        <div key={index}>
          <CountUp
            end={item.num}
            duration={5}
            delay={2}
            className="text-4xl xl:text-6xl font-extrabold"
          />
        </div>
      ))}
    </div>
  );
}
