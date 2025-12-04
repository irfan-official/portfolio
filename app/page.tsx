import VantaCells from "@/components/VantaCells";
import TsParticlesBG from "@/components/TsParticlesBG";
import TheName from "@/components/TheName";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import OverviewAndSkills from "@/components/OverviewAndSkills";

export default function Page() {
  return (
    <main className="w-full min-h-screen">
      <TsParticlesBG />
      <header className="relative w-full h-full">
        <VantaCells />
        <Hero />
      </header>
      <AboutMe />
      <div className="w-full h-screen border relative flex items-center justify-center">
        <OverviewAndSkills />
      </div>
    </main>
  );
}
