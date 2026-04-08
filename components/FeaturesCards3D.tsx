"use client";
import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";
import { BadgeCheck, BarChart3, Calculator, Landmark, PiggyBank, Shield, Sparkles, TrendingUp } from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = {
  Shield,
  TrendingUp,
  Calculator,
  Landmark,
  PiggyBank,
  BarChart3,
  BadgeCheck,
  Sparkles,
};

export default function FeaturesCards3D({
  badge = "Core Services",
  headline = "Comprehensive planning built for long-term stability",
  subheadline = "Each advisory track is tailored to your goals, risk profile, and timeline.",
  features = [
    { icon: "Shield", title: "Retirement Income Planning", description: "Create durable retirement cash-flow strategies with tax-aware drawdown sequencing." },
    { icon: "TrendingUp", title: "Portfolio Strategy", description: "Evidence-based allocation models focused on downside resilience and consistent growth." },
    { icon: "Calculator", title: "Tax Efficiency Reviews", description: "Coordinate account location, gains harvesting, and charitable strategies to reduce drag." },
    { icon: "Landmark", title: "Business Owner Planning", description: "Align personal wealth planning with succession, liquidity, and entity-level decisions." },
    { icon: "PiggyBank", title: "Education & Legacy Plans", description: "Fund education goals while preserving estate objectives across generations." },
    { icon: "BadgeCheck", title: "Risk & Insurance Analysis", description: "Validate coverage gaps and optimize protection as your net worth evolves." },
  ],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && (
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wide text-primary">
              {badge}
            </span>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? Shield;
            return (
              <CardContainer key={index} className="inter-var" containerClassName="w-full">
                <CardBody className="w-full h-auto rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm card-hover">
                  <CardItem translateZ={45} className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </CardItem>
                  <CardItem translateZ={55} className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ={35} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
