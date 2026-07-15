"use client";
import { experience } from "@/content/experience";
import { Reveal } from "./motion";
export function EngineeringMindset() {
  const chapter = experience.publicis.chapters.mindset;
  return (
    <Reveal className="relative max-w-3xl overflow-hidden">
      <span
        aria-hidden="true"
        className="font-heading pointer-events-none absolute -top-16 -left-5 text-[13rem] leading-none text-foreground/[0.035]"
      >
        “
      </span>
      <div className="relative">
        <h3 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          {chapter.title}
        </h3>
        <div className="mt-8 space-y-6 text-lg leading-8 text-muted">
          {chapter.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 border-t border-border pt-5 text-sm text-muted">
          {chapter.closing}
        </div>
      </div>
    </Reveal>
  );
}
