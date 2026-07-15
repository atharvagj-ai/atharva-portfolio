"use client";
import { ArrowDown } from "lucide-react";
import { experience } from "@/content/experience";
import { Reveal } from "./motion";
export function ArchitectureDiagram() {
  const chapter = experience.publicis.chapters.architecture;
  return (
    <Reveal>
      <h3 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        {chapter.title}
      </h3>
      <div
        role="img"
        aria-label={chapter.ariaLabel}
        className="mt-10 flex flex-col items-center"
      >
        {chapter.stages.map((stage, index) => (
          <div key={stage} className="flex flex-col items-center">
            <div className="min-w-52 rounded-lg border border-border bg-card px-6 py-3 text-center text-sm font-medium text-foreground shadow-[0_12px_32px_rgb(0_0_0_/_0.12)]">
              {stage}
            </div>
            {index < chapter.stages.length - 1 ? (
              <ArrowDown className="my-2.5 size-4 text-accent/70" aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
