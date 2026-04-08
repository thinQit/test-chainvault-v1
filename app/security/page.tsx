export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";

export default function SecurityPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up overflow-hidden">
        <HeroBeams
          title="Security, by design—before features."
          highlightText="Security, by design"
          subtitle="ChainVault focuses on layered controls: account protection, custody practices, and operational discipline."
          primaryCta={{ label: "Create an account", href: "/signup" }}
          secondaryCta={{ label: "Contact security team", href: "/contact" }}
        />
      </section>
    </main>
  );
}
