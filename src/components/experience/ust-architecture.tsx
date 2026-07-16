"use client";

import { experience } from "@/content/experience";
import { Reveal } from "./motion";

function Node({ label }: { label: string }) {
  return (
    <div className="w-40 rounded-lg border border-border bg-card px-5 py-3 text-center text-sm font-medium text-foreground shadow-[0_12px_32px_rgb(0_0_0_/_0.12)]">
      {label}
    </div>
  );
}

function Connector({ horizontal = false }: { horizontal?: boolean }) {
  return horizontal ? (
    <div aria-hidden="true" className="flex w-9 items-center px-1">
      <div className="h-px flex-1 bg-accent/40" />
      <span className="-ml-0.5 text-sm leading-none text-accent/70">›</span>
    </div>
  ) : (
    <div
      aria-hidden="true"
      className="relative h-7 w-px bg-accent/40 after:absolute after:bottom-0 after:left-1/2 after:size-1.5 after:-translate-x-1/2 after:rotate-45 after:border-r after:border-b after:border-accent/70"
    />
  );
}

export function UstArchitecture() {
  const chapter = experience.ust.chapters.architecture;

  return (
    <Reveal>
      <h3 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        {chapter.title}
      </h3>
      <div role="img" aria-label={chapter.ariaLabel} className="mt-10">
        <div className="flex flex-col items-center md:hidden">
          {chapter.stages.map((stage, index) => (
            <div key={stage} className="flex flex-col items-center">
              <Node label={stage} />
              {index < chapter.stages.length - 1 ? <Connector /> : null}
            </div>
          ))}
        </div>
        <div className="hidden items-center justify-center md:flex">
          {chapter.stages.map((stage, index) => (
            <div key={stage} className="flex items-center">
              <Node label={stage} />
              {index < chapter.stages.length - 1 ? <Connector horizontal /> : null}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
