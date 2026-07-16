import { experience } from "@/content/experience";
import { Reveal } from "./motion";

export function TransitionSection() {
  const transition = experience.transition;

  return (
    <Reveal className="mx-auto max-w-3xl py-12 text-center sm:py-20">
      <p className="text-xs font-medium tracking-[0.18em] text-accent/80 uppercase">
        {transition.eyebrow}
      </p>
      <h2 className="font-heading mt-5 whitespace-pre-line text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
        {transition.title}
      </h2>
      <div className="mt-8 space-y-6 text-lg leading-8 text-muted">
        {transition.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-12 border-t border-border pt-5 text-sm text-muted">
        {transition.period}
      </div>
    </Reveal>
  );
}
