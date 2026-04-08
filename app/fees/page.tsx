export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";

export default function FeesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up overflow-hidden">
        <HeroBeams
          title="Transparent fees with volume-based discounts"
          highlightText="Transparent fees"
          subtitle="Maker/taker pricing that’s easy to understand. Preview costs before you trade and see how tiers reduce rates as volume grows."
          primaryCta={{ label: "Use fee estimator", href: "/#calculator" }}
          secondaryCta={{ label: "Create account", href: "/signup" }}
        />
      </section>
    </main>
  );
}
