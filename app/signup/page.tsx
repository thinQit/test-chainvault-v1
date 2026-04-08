export const dynamic = 'force-dynamic';

import HeroBeams from "@/components/HeroBeams";

export default function SignupPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="animate-fade-in-up overflow-hidden">
        <HeroBeams
          title="Create your ChainVault account"
          highlightText="ChainVault account"
          subtitle="Start with email signup, then secure your account with 2FA and withdrawal controls."
          primaryCta={{ label: "Continue to signup", href: "/signup#form" }}
          secondaryCta={{ label: "Read security overview", href: "/security" }}
        />
      </section>
    </main>
  );
}
