"use client";

import { Projects } from "@/components/Work/Projects/Projects";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { getYearDifferenceFromDate } from "./YearCalculation/YearCalculation";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const GITHUB_USERNAME = "riponmondalbd";

const GITHUB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export default function Stats() {
  const [totalCommits, setTotalCommits] = useState<number | null>(null);
  const yearOfExperience = getYearDifferenceFromDate("2022-01-01");

  useEffect(() => {
    async function fetchTotalCommits() {
      try {
        const query = `
          query {
            user(login: "${GITHUB_USERNAME}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }
        `;
        const response = await fetch(GITHUB_GRAPHQL_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });
        const json = await response.json();
        const commits =
          json?.data?.user?.contributionsCollection?.contributionCalendar
            ?.totalContributions ?? 0;
        setTotalCommits(commits);
      } catch (error) {
        console.error("Failed to fetch GitHub commits", error);
      }
    }
    fetchTotalCommits();
  }, []);

  const stats = [
    {
      num: yearOfExperience,
      text: "Years of experience",
    },
    {
      num: Projects.length,
      text: "Projects completed",
    },
    {
      num: 20,
      text: "Technologies mastered",
    },
    {
      num: totalCommits ?? 3000, // fallback to 3000 if loading
      text: "Code commits",
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
