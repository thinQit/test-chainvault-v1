"use client";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const Vortex = dynamic(() => import("@/components/ui/backgrounds/vortex").then((mod) => mod.Vortex), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />,
});

interface CTAVortexProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTAVortex({
  headline = "Ready for a clearer financial plan?",
  description = "Schedule a no-obligation strategy session and get a practical roadmap for your next 12 months.",
  ctaLabel = "Schedule Consultation",
  ctaHref = "#contact",
  secondaryCtaLabel = "Download Planning Guide",
  secondaryCtaHref = "#resources",
}: Partial<CTAVortexProps>) {
  return (
    <section className="w-full py-16 md:py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm min-h-[28rem]">
          <Vortex
            backgroundColor="transparent"
            baseHue={225}
            particleCount={420}
            className="flex h-full w-full flex-col items-center justify-center px-4 md:px-10 py-8"
          >
            <h2 className="max-w-3xl text-center text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
              {headline}
            </h2>
            {description && (
              <p className="mt-5 max-w-2xl text-center text-base md:text-lg text-muted-foreground">
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <Button size="lg" className="transition-all duration-200 hover:scale-105" asChild>
                <a href={ctaHref}>{ctaLabel}</a>
              </Button>
              {secondaryCtaLabel && secondaryCtaHref && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-foreground transition-all duration-200 hover:scale-105"
                  asChild
                >
                  <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
                </Button>
              )}
            </div>
          </Vortex>
        </div>
      </div>
    </section>
  );
}
