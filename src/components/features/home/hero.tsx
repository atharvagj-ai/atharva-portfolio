"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, FileText, Github, Linkedin } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const heroButtons = [
  {
    label: "Resume",
    href: siteConfig.links.resume,
    icon: FileText,
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
  },
];

export function Hero() {
  return (
    <Section className="flex min-h-[calc(100svh-4rem)] items-center py-16 sm:py-20">
      <Container>
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 text-sm font-medium text-accent"
          >
            Hi, I&apos;m Atharva Jibhakate.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.08, ease: "easeOut" }}
            className="font-heading max-w-4xl text-5xl leading-[1.03] font-semibold text-balance text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Turning raw data
            <span className="block">into reliable systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.16, ease: "easeOut" }}
            className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
          >
            Senior Data Engineer specializing in scalable data platforms, Apache
            Spark, Databricks and modern Lakehouse architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.24, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            {heroButtons.map(({ label, href, icon: Icon }, index) => (
              <Button
                key={label}
                asChild
                variant={index === 0 ? "default" : "secondary"}
                className="w-full sm:w-auto"
              >
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon aria-hidden="true" />
                  {label}
                  {href.startsWith("http") ? <ExternalLink aria-hidden="true" /> : null}
                </Link>
              </Button>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.56, delay: 0.42 }}
          className="mt-20 flex items-center gap-3 text-sm text-muted"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 transition-colors hover:text-foreground"
            aria-label="Scroll to contact"
          >
            <span className="flex size-9 items-center justify-center rounded-full border border-border bg-card transition-colors group-hover:border-accent/50">
              <ArrowDown
                className="size-4 animate-bounce text-accent motion-reduce:animate-none"
                aria-hidden="true"
              />
            </span>
            <span>Scroll</span>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
