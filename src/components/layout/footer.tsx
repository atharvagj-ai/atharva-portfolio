import Link from "next/link";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-sm font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-muted">
              Copyright © {year} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          <nav className="flex items-center gap-2" aria-label="Social links">
            {siteConfig.socials.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-card text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                aria-label={label}
              >
                <Icon className="size-4" aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
