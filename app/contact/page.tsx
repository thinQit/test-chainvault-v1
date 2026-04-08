export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up overflow-hidden">
        <HeroBeams
          title="Support that speaks trader"
          highlightText="speaks trader"
          subtitle="Get help with onboarding, fees, supported networks, and security settings."
          primaryCta={{ label: "Email support", href: "mailto:support@chainvault.exchange" }}
          secondaryCta={{ label: "Read Security", href: "/security" }}
        />
      </section>
    </main>
  );
}
