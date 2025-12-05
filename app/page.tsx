import VantaCells from "@/components/VantaCells";
import TsParticlesBG from "@/components/TsParticlesBG";
import TheName from "@/components/TheName";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import OverviewAndSkills from "@/components/OverviewAndSkills";
import MyTimeline from "@/components/MyTimeLine";

export default function Page() {
  return (
    <main className="w-screen min-h-screen overflow-hidden">
      <TsParticlesBG />
      <header className="relative w-full h-full bg-amber-200">
        <VantaCells />
        <Hero />
      </header>

      <section
        id="about-section"
        className="w-full min-h-screen relative flex items-center justify-center py-10 lg:py-25 "
      >
        <AboutMe />
      </section>

      <div
        id="skills-section"
        className="w-full min-h-screen relative flex items-center justify-center py-10 lg:py-25 "
      >
        <OverviewAndSkills />
      </div>

      <div
        id="timeline-section"
        className="w-full min-h-screen relative flex flex-col items-center justify-center gap-15 py-10 lg:py-25"
      >
        <h2 className="text-5xl font-semibold ">Learning Time Line</h2>
        <MyTimeline />
      </div>

      <div
        id="projects-section"
        className="w-full min-h-screen border relative flex items-center justify-center p-10"
      ></div>
      <div
        id="contact-section"
        className="w-full min-h-screen border relative flex items-center justify-center p-10"
      ></div>
    </main>
  );
}
