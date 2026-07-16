"use client";

import { experience } from "@/content/experience";
import { Reveal } from "./motion";

type ArchitectureNodeProps = {
  label: string;
};

function ArchitectureNode({ label }: ArchitectureNodeProps) {
  return (
    <div className="w-44 rounded-lg border border-border bg-card px-6 py-3 text-center text-sm font-medium text-foreground shadow-[0_12px_32px_rgb(0_0_0_/_0.12)]">
      {label}
    </div>
  );
}

function VerticalConnector() {
  return (
    <div
      aria-hidden="true"
      className="relative h-7 w-px bg-accent/40 after:absolute after:bottom-0 after:left-1/2 after:size-1.5 after:-translate-x-1/2 after:rotate-45 after:border-r after:border-b after:border-accent/70"
    />
  );
}

function HorizontalConnector() {
  return (
    <div aria-hidden="true" className="flex w-10 items-center px-1">
      <div className="h-px flex-1 bg-accent/40" />
      <span className="-ml-0.5 text-sm leading-none text-accent/70">›</span>
    </div>
  );
}

export function ArchitectureDiagram() {
  const chapter = experience.publicis.chapters.architecture;
  const [dataSources, metadataLayer, bronze, silver, gold, snowflake, analytics] =
    chapter.stages;

  return (
    <Reveal>
      <h3 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        {chapter.title}
      </h3>
      <div
        role="img"
        aria-label={chapter.ariaLabel}
        className="mt-10"
      >
        <div className="flex flex-col items-center md:hidden">
          {chapter.stages.map((stage, index) => (
            <div key={stage} className="flex flex-col items-center">
              <ArchitectureNode label={stage} />
              {index < chapter.stages.length - 1 ? <VerticalConnector /> : null}
            </div>
          ))}
        </div>

        <div className="hidden flex-col items-center md:flex">
          <ArchitectureNode label={dataSources} />
          <VerticalConnector />
          <ArchitectureNode label={metadataLayer} />
          <VerticalConnector />
          <div className="flex items-start">
            <ArchitectureNode label={bronze} />
            <HorizontalConnector />
            <ArchitectureNode label={silver} />
            <HorizontalConnector />
            <div className="flex flex-col items-center">
              <ArchitectureNode label={gold} />
              <VerticalConnector />
              <ArchitectureNode label={snowflake} />
              <VerticalConnector />
              <ArchitectureNode label={analytics} />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
