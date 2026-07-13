"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { getYearsOfExperience } from "@/lib/experience";
import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const coreStack = [
  "Apache Spark",
  "Databricks",
  "Python",
  "SQL",
  "Airflow",
  "AWS",
  "Snowflake",
  "Apache Iceberg",
];

const exploringTopics = [
  "Databricks Professional",
  "AI in Data Engineering",
  "Model Context Protocol (MCP)",
  "Retrieval-Augmented Generation (RAG)",
];

const timelineItems = [
  {
    year: "2025",
    company: "Publicis Groupe",
    description:
      "Works on scalable data pipelines and modern lakehouse patterns for production-grade analytics platforms.",
    skills: [
      "Spark",
      "Databricks",
      "Airflow",
      "Metadata Driven Pipelines",
      "Medallion Architecture",
      "Snowflake",
    ],
  },
  {
    year: "2022",
    company: "UST",
    description:
      "Built and supported data engineering workflows across cloud-native ETL and distributed processing environments.",
    skills: ["AWS", "Spark", "Glue", "Lambda", "Apache Iceberg", "ETL"],
  },
];

function CardShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.article
      variants={fadeIn}
      transition={{ duration: 0.48, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className={cn(
        "rounded-lg border border-border bg-card p-6 shadow-[0_18px_56px_rgb(0_0_0_/_0.16)] transition-colors duration-200 hover:border-accent/40 hover:bg-white/[0.035]",
        className,
      )}
    >
      {children}
    </motion.article>
  );
}

function CardLabel({ children }: { children: ReactNode }) {
  return <p className="text-sm font-medium text-muted">{children}</p>;
}

export function EngineeringAtAGlance() {
  const yearsOfExperience = getYearsOfExperience();

  return (
    <Section className="pt-0">
      <Container>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium text-accent">Engineering at a Glance</p>
          <h2 className="font-heading text-3xl leading-tight font-semibold text-foreground sm:text-4xl">
            Engineering at a Glance
          </h2>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <CardShell>
            <CardLabel>Experience</CardLabel>
            <p className="font-heading mt-5 text-3xl leading-tight font-semibold text-foreground lg:text-[2rem]">
              {yearsOfExperience} Years
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">Building Data Platforms</p>
          </CardShell>

          <CardShell className="group relative overflow-hidden p-0">
            <a
              href="https://www.publicisgroupe.com/en/the-groupe/about-publicis-groupe"
              target="_blank"
              rel="noreferrer"
              className="block p-6"
              aria-label="Learn more about Publicis Groupe (opens in a new tab)"
            >
              <CardLabel>Current Role</CardLabel>
              <p className="font-heading mt-5 text-2xl leading-tight font-semibold text-foreground">
                Senior Data Engineer
              </p>
              <p className="mt-4 text-sm leading-6 text-muted">Publicis Groupe</p>
              <p className="text-sm leading-6 text-muted">Product Engineering</p>
              <span className="pointer-events-none absolute inset-x-6 bottom-6 flex translate-y-1 items-center gap-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <span className="flex size-6 items-center justify-center rounded-full border border-foreground/30 text-[10px] font-semibold text-foreground">
                  P
                </span>
                <span className="font-heading text-xs font-semibold tracking-[0.12em] text-foreground">
                  PUBLICIS GROUPE
                </span>
              </span>
            </a>
          </CardShell>

          <CardShell>
            <CardLabel>Core Stack</CardLabel>
            <div className="mt-5 flex flex-wrap gap-2">
              {coreStack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs leading-5 text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </CardShell>

          <CardShell className="border-accent/25 bg-accent/[0.025]">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              <CardLabel>Currently Exploring</CardLabel>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm leading-5 text-muted">
              {exploringTopics.map((topic) => (
                <li key={topic} className="flex gap-2.5">
                  <span
                    className="mt-2 size-1 rounded-full bg-accent/80"
                    aria-hidden="true"
                  />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </CardShell>
        </motion.div>
      </Container>
    </Section>
  );
}

export function AboutSection() {
  return (
    <Section id="about" className="border-t border-border/70">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-4 text-sm font-medium text-accent">About</p>
            <h2 className="font-heading text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
              About
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="max-w-3xl space-y-8 text-lg leading-9 text-muted sm:text-[1.125rem]"
          >
            <p>
              I started my engineering career in 2022 at UST, where I began working with
              the systems that turn raw data into dependable platforms. That early
              foundation shaped how I think about data engineering: not as a chain of
              scripts, but as a discipline of reliability, scale, and thoughtful design.
            </p>
            <p>
              Today, I work as a Senior Data Engineer at Publicis Groupe, building
              scalable ETL pipelines, metadata-driven platforms, and modern Lakehouse
              architectures. My work is centered on designing systems that are
              maintainable, observable, and ready for real production demands.
            </p>
            <p>
              I am especially interested in distributed systems, AI in Data Engineering,
              MCP, and Retrieval-Augmented Generation. What keeps me moving is the
              engineering problem underneath the code: finding the clean model, the
              resilient workflow, and the approach that makes a platform easier to trust.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export function ExperienceTimeline() {
  const [openCompany, setOpenCompany] = useState(timelineItems[0].company);

  return (
    <Section id="experience" className="border-t border-border/70">
      <Container>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium text-accent">Timeline</p>
          <h2 className="font-heading text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
            Experience Timeline
          </h2>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative max-w-4xl"
        >
          <div
            className="absolute top-5 bottom-5 left-4 w-px bg-border sm:left-6"
            aria-hidden="true"
          />
          <div className="grid gap-6">
            {timelineItems.map((item) => {
              const isOpen = openCompany === item.company;

              return (
                <motion.article
                  key={item.company}
                  variants={fadeIn}
                  transition={{ duration: 0.48, ease: "easeOut" }}
                  className="relative pl-12 sm:pl-16"
                >
                  <div
                    className="absolute top-4 left-0 flex size-8 items-center justify-center rounded-full border border-accent/40 bg-background text-xs font-semibold text-accent shadow-[0_0_22px_rgb(56_189_248_/_0.13)] sm:size-12"
                    aria-hidden="true"
                  >
                    {item.year}
                  </div>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenCompany((current) =>
                        current === item.company ? "" : item.company,
                      )
                    }
                    className="group w-full rounded-lg border border-border bg-card p-5 text-left shadow-[0_18px_56px_rgb(0_0_0_/_0.14)] transition-colors duration-200 hover:border-accent/40 hover:bg-white/[0.035] sm:p-6"
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span>
                        <span className="text-sm font-medium text-accent">
                          {item.year}
                        </span>
                        <span className="font-heading mt-2 block text-2xl font-semibold text-foreground">
                          {item.company}
                        </span>
                      </span>
                      <ChevronDown
                        className={cn(
                          "mt-1 size-5 shrink-0 text-muted transition-transform duration-200 group-hover:text-foreground",
                          isOpen && "rotate-180 text-foreground",
                        )}
                        aria-hidden="true"
                      />
                    </span>
                    <motion.div
                      initial={false}
                      animate={isOpen ? "open" : "closed"}
                      variants={{
                        open: { opacity: 1, height: "auto", y: 0 },
                        closed: { opacity: 0, height: 0, y: -4 },
                      }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                        {item.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </button>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
