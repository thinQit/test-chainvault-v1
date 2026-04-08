export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";

export default function CoinsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up overflow-hidden">
        <HeroBeams
          title="Supported coins and networks—clearly listed."
          highlightText="clearly listed"
          subtitle="Trade major assets and stablecoins with straightforward network guidance to help you deposit and withdraw safely."
          primaryCta={{ label: "Create account", href: "/signup" }}
          secondaryCta={{ label: "View fees", href: "/fees" }}
        />
      </section>
    </main>
  );
}
