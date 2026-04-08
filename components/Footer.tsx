"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}
interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright: string;
  variant?: "columns" | "minimal";
}

export default function Footer({
  brand,
  description,
  columns,
  copyright,
  variant = "columns",
}: FooterProps) {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
          <span className="text-lg font-semibold">{brand}</span>
        </div>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          {description}
        </p>

        {variant === "columns" ? (
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-semibold text-foreground">
                  {column.title}
                </h4>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-sm text-muted-foreground transition-colors hover:text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>{copyright}</p>
          <p className="mt-3">
            © {new Date().getFullYear()} {brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
