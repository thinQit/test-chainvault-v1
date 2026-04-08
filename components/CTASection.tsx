"use client";

import { Button } from '@/components/ui/button'

interface Stat {
  label: string
  value: string
}
interface CTASectionProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  stats?: Stat[]
}

export default function CTASection({
  title = 'Trade with confidence on ChainVault',
  description = 'Join a secure, high-performance exchange with transparent fees and institutional-grade controls.',
  primaryLabel = 'Start Trading',
  primaryHref = '#signup',
  secondaryLabel = 'View Security',
  secondaryHref = '#security',
  stats = [
    { label: 'Spot Pairs', value: '120+' },
    { label: 'Uptime', value: '99.99%' },
    { label: 'Custody Coverage', value: '24/7' },
  ],
}: Partial<CTASectionProps>) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-gradient-to-r from-[#003F88]/40 to-[#2D6A4F]/30 px-6 py-10 text-white md:px-10">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="mt-3 max-w-2xl text-white/80">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="bg-[#D4A574] text-black hover:bg-[#bf8f60]"><a href={primaryHref}>{primaryLabel}</a></Button>
          <Button asChild variant="outline"><a href={secondaryHref}>{secondaryLabel}</a></Button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-white/15 bg-black/20 p-4">
              <p className="text-2xl font-semibold [font-variant-numeric:tabular-nums]">{s.value}</p>
              <p className="text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
