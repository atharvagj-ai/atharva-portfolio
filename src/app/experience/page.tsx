import { ArchitectureDiagram } from "@/components/experience/architecture-diagram";
import { ChallengeGrid } from "@/components/experience/challenge-grid";
import { CompanyHeader } from "@/components/experience/company-header";
import { EngineeringMindset } from "@/components/experience/engineering-mindset";
import { ExperienceHero } from "@/components/experience/experience-hero";
import { Reveal } from "@/components/experience/motion";
import { TechnologyStack } from "@/components/experience/technology-stack";
import { TransitionSection } from "@/components/experience/transition-section";
import { UstArchitecture } from "@/components/experience/ust-architecture";
import {
  UstHeader,
  UstMindset,
  UstResponsibilities,
} from "@/components/experience/ust-section";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { experience } from "@/content/experience";

export default function ExperiencePage() {
  const platform = experience.publicis.chapters.platform;
  const foundation = experience.ust.chapters.foundation;
  return (
    <>
      <ExperienceHero />
      <Section className="border-t border-border/70">
        <Container>
          <CompanyHeader />
          <Reveal className="max-w-3xl">
            <h3 className="font-heading whitespace-pre-line text-3xl leading-tight font-semibold text-foreground sm:text-4xl">
              {platform.title}
            </h3>
            <div className="mt-8 max-w-[70ch] space-y-6 text-lg leading-8 text-muted">
              {platform.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>
      <Section>
        <Container>
          <ChallengeGrid />
        </Container>
      </Section>
      <Section className="border-t border-border/70">
        <Container>
          <ArchitectureDiagram />
        </Container>
      </Section>
      <Section>
        <Container>
          <TechnologyStack />
        </Container>
      </Section>
      <Section className="border-t border-border/70">
        <Container>
          <EngineeringMindset />
        </Container>
      </Section>
      <Section>
        <Container>
          <TransitionSection />
        </Container>
      </Section>
      <Section className="border-t border-border/70">
        <Container>
          <Reveal>
            <UstHeader />
          </Reveal>
          <Reveal className="max-w-3xl">
            <h3 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              {foundation.title}
            </h3>
            <div className="mt-8 max-w-[70ch] space-y-6 text-lg leading-8 text-muted">
              {foundation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>
      <Section>
        <Container>
          <UstResponsibilities />
        </Container>
      </Section>
      <Section className="border-t border-border/70">
        <Container>
          <UstArchitecture />
        </Container>
      </Section>
      <Section>
        <Container>
          <TechnologyStack chapter={experience.ust.chapters.technology} />
        </Container>
      </Section>
      <Section className="border-t border-border/70 pb-32 sm:pb-40 lg:pb-48">
        <Container>
          <UstMindset />
        </Container>
      </Section>
    </>
  );
}
