export const experience = {
  hero: {
    eyebrow: "ENGINEERING JOURNEY",
    title: "From Building Pipelines\nto Engineering Platforms.",
    description:
      "Every role has shaped the way I think about engineering. From building cloud-native ETL pipelines to designing metadata-driven data platforms, each step has strengthened my understanding of scalable systems, maintainable software, and modern data engineering.",
    highlights: ["4+ Years Experience", "Product Engineering", "Data Platforms"],
  },
  publicis: {
    eyebrow: "CURRENT ROLE",
    company: "Publicis Groupe",
    role: "Senior Data Engineer",
    team: "Product Engineering",
    chapters: {
      platform: {
        title: "Building Platforms,\nNot Pipelines.",
        paragraphs: [
          "At Publicis Groupe, I work in a product engineering team responsible for building metadata-driven data platforms that power analytics across multiple clients. My focus isn't just writing ETL jobs—it's designing reusable systems that simplify onboarding, improve scalability, and reduce operational overhead.",
          "Much of my work revolves around modern Lakehouse architecture, orchestration, and platform engineering. Rather than building one-off solutions, I spend my time thinking about how systems can remain maintainable as new clients, new data sources, and new business requirements continue to grow.",
        ],
      },
      challenges: {
        title: "Engineering Challenges",
        items: [
          {
            icon: "blocks",
            title: "Metadata Driven Platforms",
            description:
              "Designing configurable pipelines instead of client-specific implementations.",
          },
          {
            icon: "workflow",
            title: "Pipeline Orchestration",
            description:
              "Building reliable orchestration workflows that simplify execution and monitoring.",
          },
          {
            icon: "layers",
            title: "Lakehouse Architecture",
            description: "Designing scalable Bronze, Silver and Gold data layers.",
          },
          {
            icon: "expand",
            title: "Platform Scalability",
            description:
              "Building reusable engineering solutions that scale across multiple clients.",
          },
          {
            icon: "shield",
            title: "Data Reliability",
            description:
              "Improving consistency, maintainability and operational confidence across pipelines.",
          },
        ],
      },
      architecture: {
        title: "Reference Architecture",
        ariaLabel: "Data platform reference architecture flow",
        stages: [
          "Data Sources",
          "Metadata Layer",
          "Bronze",
          "Silver",
          "Gold",
          "Snowflake",
          "Analytics",
        ],
      },
      technology: {
        title: "Technology Stack",
        categories: [
          { title: "Languages", technologies: ["Python", "SQL"] },
          {
            title: "Processing",
            technologies: ["Apache Spark", "PySpark", "Databricks"],
          },
          { title: "Orchestration", technologies: ["Airflow", "Azure DevOps"] },
          {
            title: "Storage",
            technologies: ["Delta Lake", "Snowflake", "Unity Catalog"],
          },
        ],
      },
      mindset: {
        title: "How This Role Changed Me",
        paragraphs: [
          "Moving into product engineering fundamentally changed the way I think about software.",
          "Instead of optimizing individual pipelines, I now focus on building reusable platforms that enable other engineers to move faster. It taught me that good engineering isn't measured by how much code you write—but by how much complexity you remove.",
        ],
        closing: "Every platform teaches a different way of thinking.",
      },
    },
  },
} as const;

// Used by the existing homepage experience preview.
export const experienceContent = {
  eyebrow: "EXPERIENCE",
  title: "Professional Journey",
  items: [
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
  ],
} as const;
