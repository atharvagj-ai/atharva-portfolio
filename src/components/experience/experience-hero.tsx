"use client";

import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { fadeUp } from "./motion";

export function ExperienceHero() {
  const { hero } = experience;
  return (
    <Section className="flex min-h-[calc(100svh-4rem)] items-center py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 text-xs font-medium tracking-[0.18em] text-accent/80 uppercase"
          >
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.56, delay: 0.08, ease: "easeOut" }}
            className="font-heading max-w-[700px] whitespace-pre-line text-5xl leading-[1.03] font-semibold text-foreground sm:text-6xl md:text-7xl"
          >
            {hero.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.56, delay: 0.16, ease: "easeOut" }}
            className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
          >
            {hero.description}
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.56, delay: 0.24, ease: "easeOut" }}
            className="mt-10 border-t border-border pt-6"
          >
            <ul className="flex flex-col gap-3 sm:flex-row">
              {hero.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted shadow-[0_12px_32px_rgb(0_0_0_/_0.12)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
