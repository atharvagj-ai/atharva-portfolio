"use client";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import { Reveal } from "./motion";
export function TechnologyStack() {
  const chapter = experience.publicis.chapters.technology;
  return (
    <Reveal>
      <h3 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        {chapter.title}
      </h3>
      <div className="mt-9 grid gap-4 sm:grid-cols-2">
        {chapter.categories.map((category) => (
          <article
            key={category.title}
            className="rounded-lg border border-border bg-card p-6 shadow-[0_18px_56px_rgb(0_0_0_/_0.12)]"
          >
            <h4 className="text-sm font-medium text-muted">{category.title}</h4>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.technologies.map((technology) => (
                <motion.span
                  key={technology}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
