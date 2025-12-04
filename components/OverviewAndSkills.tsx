import React from "react";
import SkillCard from "./SkillCard";

function OverviewAndSkills() {
  return (
    <div className="flex flex-col gap-30 items-center">
      <section className="flex flex-col gap-15 items-center">
        <h2 className="font-semibold text-6xl">Tech Stack</h2>
        <section className="flex gap-5">
          <SkillCard />
        </section>
      </section>
      <section className="c">
        <h2 className="text-5xl text-center font-semibold">
          Tools & Technology
        </h2>
      </section>
    </div>
  );
}

export default OverviewAndSkills;
