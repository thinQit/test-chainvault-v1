"use client";
import { BackgroundBeams } from "@/components/ui/backgrounds/background-beams";
import { Highlight } from "@/components/ui/text/hero-highlight";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroBeamsProps {
  headline: string;
  highlightText: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroBeams({
  headline = "Plan with confidence. Grow with discipline.",
  highlightText = "Independent fiduciary advice",
  subheadline = "From retirement planning to tax-aware portfolio strategy, we help families and business owners make clear, data-driven financial decisions.",
  primaryCta = { label: "Book a Consultation", href: "#contact" },
  secondaryCta = { label: "Explore Services", href: "#services" },
}: Partial<HeroBeamsProps>) {
  return (
    <section className="relative min-h-[620px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-background antialiased">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <BackgroundBeams beamColors={["#6366f1", "#a855f7", "#818cf8", "#c4b5fd", "#7c3aed"]} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center animate-fade-in-up">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: [18, -3, 0] }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          {headline}{" "}
          <Highlight className="text-foreground">{highlightText}</Highlight>
        </motion.h1>

        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
          {subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="transition-all duration-200 hover:scale-105" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta?.label && (
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-foreground transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
