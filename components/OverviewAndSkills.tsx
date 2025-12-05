import React from "react";
import SkillCard from "./SkillCard";
import ShowTech from "./ShowTech";

function OverviewAndSkills() {
  return (
    <div className="flex w-screen h-full flex-col gap-30 items-center">
      <section className="flex flex-col gap-15 items-center">
        <h2 className="font-semibold text-4xl lg:text-6xl">Tech Stack</h2>
        <section className="flex flex-row gap-3 lg:gap-5 flex-wrap items-center justify-center">
          <SkillCard />
        </section>
      </section>
      <section className="w-full h-full flex flex-col gap-10 items-center">
        <h2 className="text-4xl lg:text-6xl px-6 text-center font-semibold">
          Tools & Technology
        </h2>
        <section className="w-full h-full flex items-center justify-center px-5">
          <ShowTech />
        </section>
      </section>
    </div>
  );
}

export default OverviewAndSkills;
