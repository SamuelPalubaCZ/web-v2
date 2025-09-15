import { Hero } from "@/components/sections/hero";
import { MissionGoals } from "@/components/sections/mission-goals";
import { Features } from "@/components/sections/features";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing";
import { Metrics } from "@/components/sections/metrics";
import { Timeline } from "@/components/sections/timeline";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionGoals />
      <Features />
      <Stats />
      <Process />
      <Pricing />
      <Metrics />
      <Timeline />
      <Testimonials />
    </>
  );
}
