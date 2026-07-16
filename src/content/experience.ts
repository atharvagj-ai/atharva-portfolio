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
  transition: {
    eyebrow: "THE FOUNDATION",
    title: "Every Platform\nStarts Somewhere.",
    paragraphs: [
      "Before working on product-scale platforms at Publicis Groupe, I built my engineering foundation at UST.",
      "It was there that I learned how distributed data systems behave in production, how cloud-native ETL pipelines are designed, and why reliability is just as important as writing code.",
      "Those early experiences continue to influence the way I design systems today.",
    ],
    period: "May 2022 — February 2025",
  },
  ust: {
    eyebrow: "FIRST PROFESSIONAL ROLE",
    company: "UST",
    role: "Data Engineer",
    client: "Blue Cross Blue Shield Association",
    initiative: "Transparency in Coverage Rule",
    chapters: {
      foundation: {
        title: "Building the Foundation.",
        paragraphs: [
          "My professional journey began at UST, where I worked on the Blue Cross Blue Shield Association Transparency in Coverage Rule initiative, focusing on Code Level Negotiated Rates (TCR-CLNR).",
          "This role introduced me to cloud-native data engineering, distributed data processing, and large-scale ETL workflows running on AWS. More importantly, it taught me how production systems behave, how engineering teams collaborate, and why maintainability matters just as much as functionality.",
          "It was during this period that I transitioned from writing software to thinking like a data engineer.",
        ],
      },
      responsibilities: {
        title: "Engineering Responsibilities",
        items: [
          {
            icon: "cloud",
            title: "Cloud-native ETL",
            description: "Designing and maintaining scalable ETL workflows on AWS.",
          },
          {
            icon: "processing",
            title: "Distributed Processing",
            description:
              "Working with Apache Spark to process large healthcare datasets efficiently.",
          },
          {
            icon: "pipeline",
            title: "Data Pipelines",
            description: "Building reliable ingestion and transformation workflows.",
          },
          {
            icon: "production",
            title: "Production Engineering",
            description:
              "Supporting production systems while improving reliability and operational stability.",
          },
        ],
      },
      architecture: {
        title: "Reference Architecture",
        ariaLabel: "UST AWS data pipeline reference architecture",
        stages: [
          "Healthcare Data",
          "AWS S3",
          "AWS Glue",
          "Apache Spark",
          "Apache Iceberg",
          "Analytics",
        ],
      },
      technology: {
        title: "Technology Stack",
        categories: [
          { title: "Cloud", technologies: ["AWS", "S3", "EC2"] },
          {
            title: "Processing",
            technologies: ["Apache Spark", "AWS Glue", "Apache Iceberg"],
          },
          { title: "Languages", technologies: ["Python", "SQL"] },
          { title: "Compute", technologies: ["AWS Lambda"] },
        ],
      },
      mindset: {
        title: "How This Role Changed Me",
        paragraphs: [
          "UST gave me my engineering foundation.",
          "It taught me that successful software isn't measured by how quickly it's written, but by how reliably it performs in production. Working with cloud-native architectures, distributed processing, and production support helped me develop habits that still guide the way I design data platforms today.",
        ],
        closing: "Every engineer remembers where they started.",
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
