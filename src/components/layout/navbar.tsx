"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-border/80 bg-background/80 shadow-[0_12px_48px_rgb(0_0_0_/_0.22)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="font-heading text-sm font-semibold tracking-[0.18em] text-foreground uppercase"
            aria-label="Atharva Jibhakate home"
          >
            AJ
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {siteConfig.nav.map((item) => {
              const isActive = isActiveNavItem(pathname, item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm text-muted transition-colors duration-200 hover:bg-white/[0.04] hover:text-foreground",
                    isActive && "bg-white/[0.06] text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background/96 backdrop-blur-xl lg:hidden"
          >
            <Container className="py-3">
              <nav className="grid gap-1" aria-label="Mobile navigation">
                {siteConfig.nav.map((item) => {
                  const isActive = isActiveNavItem(pathname, item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "rounded-md px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/[0.04] hover:text-foreground",
                        isActive && "bg-white/[0.06] text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function isActiveNavItem(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return !href.startsWith("/#") && pathname === href;
}
