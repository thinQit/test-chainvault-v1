"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Menu, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";

interface NavbarProps {
  logo: string;
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Navbar({
  logo,
  navItems,
  ctaLabel,
  ctaHref,
}: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeHref = useMemo(() => {
    // Simple active matching for top-level routes.
    const exact = navItems.find((i) => i.href === pathname)?.href;
    if (exact) return exact;

    const prefix = navItems
      .filter((i) => i.href !== "/" && pathname.startsWith(i.href))
      .sort((a, b) => b.href.length - a.href.length)[0]?.href;

    return prefix ?? "/";
  }, [navItems, pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <span className="rounded-md bg-primary/15 p-2 text-accent">
            <Shield className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">{logo}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm text-muted-foreground transition hover:bg-muted/40 hover:text-foreground",
                activeHref === item.href && "bg-muted/60 text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          {ctaLabel && ctaHref ? (
            <Button asChild>
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          ) : null}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                  activeHref === item.href && "bg-muted/60 text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            {ctaLabel && ctaHref ? (
              <Button asChild className="mt-2 w-full">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
