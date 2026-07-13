import { Hero } from "@/components/features/home/hero";
import {
  AboutSection,
  EngineeringAtAGlance,
  ExperienceTimeline,
} from "@/components/features/home/home-sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EngineeringAtAGlance />
      <AboutSection />
      <ExperienceTimeline />
    </>
  );
}
