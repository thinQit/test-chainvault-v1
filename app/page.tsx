export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";
import MarketsTicker from "@/components/MarketsTicker";
import ServicesGrid from "@/components/ServicesGrid";
import CoinsTable from "@/components/CoinsTable";
import FeeScheduleTable from "@/components/FeeScheduleTable";
import FeeCalculator from "@/components/FeeCalculator";
import TeamSection from "@/components/TeamSection";
import CertificationsList from "@/components/CertificationsList";
import ResourcesTimeline from "@/components/ResourcesTimeline";
import ContactForm from "@/components/ContactForm";
import AuthCard from "@/components/AuthCard";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section id="hero" className="animate-fade-in-up overflow-hidden">
        <HeroBeams
          title="Trade crypto with speed, clarity, and a vault-first security model."
          highlightText="vault-first security"
          subtitle="ChainVault is a modern exchange experience: live price boards, transparent fees, and security controls designed for serious traders—without the clutter."
          primaryCta={{ label: "Create free account", href: "/signup" }}
          secondaryCta={{ label: "View fees", href: "/fees" }}
        />
      </section>

      <ScrollReveal>
        <MarketsTicker />
      </ScrollReveal>

      <ScrollReveal>
        <ServicesGrid />
      </ScrollReveal>

      <ScrollReveal>
        <CoinsTable />
      </ScrollReveal>

      <ScrollReveal>
        <FeeScheduleTable />
      </ScrollReveal>

      <ScrollReveal>
        <FeeCalculator />
      </ScrollReveal>

      <ScrollReveal>
        <TeamSection />
      </ScrollReveal>

      <ScrollReveal>
        <CertificationsList ctaHref="/security" ctaLabel="Read the Security overview" />
      </ScrollReveal>

      <ScrollReveal>
        <ResourcesTimeline />
      </ScrollReveal>

      <ScrollReveal>
        <section id="signup" className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="rounded-xl border border-border bg-card/80 p-6 shadow-sm">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Create an account in minutes
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Sign up to explore the demo trading experience, preview fees in the order flow, and
                  enable security controls like 2FA and withdrawal allowlists.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li>• Maker/taker fee preview before confirming orders</li>
                  <li>• Device sessions and login notifications</li>
                  <li>• Deposit/withdraw network guidance (demo)</li>
                </ul>
              </div>
              <AuthCard />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <ContactForm />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection
          primaryHref="/signup"
          secondaryHref="/security"
          primaryLabel="Sign up"
          secondaryLabel="View security"
          stats={[
            { label: "Maker fees from", value: "0.10%" },
            { label: "Supported assets", value: "40+" },
            { label: "Uptime target", value: "99.95%" },
          ]}
        />
      </ScrollReveal>
    </main>
  );
}
