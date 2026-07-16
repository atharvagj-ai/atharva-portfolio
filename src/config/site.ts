import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const siteConfig = {
  name: "Atharva Jibhakate",
  title: "Atharva Jibhakate | Senior Data Engineer",
  description:
    "Senior Data Engineer specializing in scalable data platforms, Apache Spark, Databricks and modern Lakehouse architectures.",
  url: "https://atharvajibhakate.com",
  links: {
    github: "https://github.com/atharva-jibhakate",
    linkedin: "https://www.linkedin.com/in/atharva-jibhakate",
    email: "mailto:atharvajibhakate@gmail.com",
    resume: "/resume.pdf",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Architecture", href: "/#architecture" },
    { label: "Learning Lab", href: "/#learning-lab" },
    { label: "Blogs", href: "/#blogs" },
    { label: "Certifications", href: "/#certifications" },
    { label: "Resume", href: "/resume.pdf" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/atharva-jibhakate",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/atharva-jibhakate",
      icon: Linkedin,
    },
    {
      label: "Email",
      href: "mailto:atharvajibhakate@gmail.com",
      icon: Mail,
    },
  ] satisfies SocialLink[],
};
