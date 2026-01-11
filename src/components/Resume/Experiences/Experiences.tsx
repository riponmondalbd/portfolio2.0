"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TabsContent } from "@/components/ui/tabs";
import { ExperienceData } from "../ExperienceData/ExperienceData";

const Experiences = () => {
  return (
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
                  <span className="text-amber-200">{item.duration}</span>
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
  );
};

export default Experiences;
