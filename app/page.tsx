import VantaCells from "@/components/VantaCells";
import TsParticlesBG from "@/components/TsParticlesBG";
import TheName from "@/components/TheName";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import OverviewAndSkills from "@/components/OverviewAndSkills";
import MyTimeline from "@/components/MyTimeLine";
import GetInTouch from "@/components/GetInTouch";

export default function Page() {
  return (
    <main className="w-full min-h-screen overflow-hidden text-white">
      <TsParticlesBG />
      <header className="relative w-full min-h-full bg-black">
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
        <h2 className="text-4xl lg:text-6xl font-semibold px-5">
          Learning Time Line
        </h2>
        <MyTimeline />
      </div>
      <div
        id="contact-section"
        className="w-full min-h-screen relative flex flex-col items-center justify-evenly gap-15 py-10 lg:py-25 
             bg-[url('/bg_2.png')] bg-cover bg-center bg-no-repeat"
      >
        <h2 className="text-4xl lg:text-6xl font-semibold px-5 hidden lg:block">
          Get In Touch
        </h2>
        <GetInTouch />
      </div>

      {/* <div
        id="projects-section"
        className="w-full min-h-screen relative flex flex-col items-center justify-center gap-15 py-10 lg:py-25"
      ></div> */}
    </main>
  );
}
