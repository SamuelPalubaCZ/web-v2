import { Hero } from "@/components/sections/hero";
import { MissionGoals } from "@/components/sections/mission-goals";
import { Features } from "@/components/sections/features";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing";
import { Metrics } from "@/components/sections/metrics";
import { Timeline } from "@/components/sections/timeline";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactForm } from "@/components/sections/contact-form";

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <MissionGoals />
      </section>
      
      <section id="features">
        <Features />
      </section>
      
      <section id="stats">
        <Stats />
      </section>
      
      <section id="process">
        <Process />
      </section>
      
      <section id="services">
        <Pricing />
      </section>
      
      <section id="metrics">
        <Metrics />
      </section>
      
      <section id="timeline">
        <Timeline />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}
