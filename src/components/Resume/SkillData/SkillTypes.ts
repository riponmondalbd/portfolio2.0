import { IconType } from "react-icons";

export type SkillItem = {
  icon: IconType;
  name: string;
};

export type SkillsData = {
  title: string;
  description: string;
  skillList: SkillItem[];
};
