"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";

type ResponsibilityCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ResponsibilityCard({
  title,
  description,
  icon: Icon,
}: ResponsibilityCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="rounded-lg border border-border bg-card p-6 shadow-[0_18px_56px_rgb(0_0_0_/_0.14)] transition-colors duration-200 hover:border-accent/50 hover:bg-white/[0.035]"
    >
      <Icon className="size-5 text-accent" aria-hidden="true" />
      <h4 className="font-heading mt-5 text-xl font-semibold text-foreground">{title}</h4>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </motion.article>
  );
}
