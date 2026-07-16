"use client";

import { Cloud, Database, GitBranch, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import { ResponsibilityCard } from "./responsibility-card";
import { Reveal } from "./motion";

const icons = {
  cloud: Cloud,
  processing: Database,
  pipeline: GitBranch,
  production: Wrench,
};

export function UstHeader() {
  const { ust } = experience;

  return (
    <header className="mb-16 max-w-3xl sm:mb-20">
      <p className="mb-4 text-xs font-medium tracking-[0.18em] text-accent/80 uppercase">
        {ust.eyebrow}
      </p>
      <h2 className="font-heading text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
        {ust.company}
      </h2>
      <div className="mt-5 space-y-1 text-base text-muted">
        <p>{ust.role}</p>
        <p>{ust.client}</p>
        <p>{ust.initiative}</p>
      </div>
    </header>
  );
}

export function UstResponsibilities() {
  const chapter = experience.ust.chapters.responsibilities;

  return (
    <div>
      <h3 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        {chapter.title}
      </h3>
      <motion.div
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-9 grid gap-4 sm:grid-cols-2"
      >
        {chapter.items.map((item) => (
          <ResponsibilityCard key={item.title} {...item} icon={icons[item.icon]} />
        ))}
      </motion.div>
    </div>
  );
}

export function UstMindset() {
  const chapter = experience.ust.chapters.mindset;

  return (
    <Reveal className="relative max-w-3xl overflow-hidden">
      <span
        aria-hidden="true"
        className="font-heading pointer-events-none absolute -top-16 -left-5 text-[13rem] leading-none text-foreground/[0.035]"
      >
        &ldquo;
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
