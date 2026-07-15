"use client";
import { Blocks, Expand, Layers3, ShieldCheck, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import { fadeUp } from "./motion";
const icons = {
  blocks: Blocks,
  workflow: Workflow,
  layers: Layers3,
  expand: Expand,
  shield: ShieldCheck,
};
export function ChallengeGrid() {
  const chapter = experience.publicis.chapters.challenges;
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
        className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {chapter.items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <motion.article
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              className="rounded-lg border border-border bg-card p-6 shadow-[0_18px_56px_rgb(0_0_0_/_0.14)] transition-colors duration-200 hover:border-accent/50 hover:bg-white/[0.035]"
            >
              <Icon className="size-5 text-accent" aria-hidden="true" />
              <h4 className="font-heading mt-5 text-xl font-semibold text-foreground">
                {item.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}
