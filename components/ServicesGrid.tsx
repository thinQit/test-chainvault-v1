"use client";

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ChartCandlestick, LockKeyhole, Wallet, Zap } from 'lucide-react'

interface ServiceItem {
  title: string
  description: string
  bullets: string[]
  icon: string
}
interface ServicesGridProps {
  heading?: string
  subheading?: string
  services?: ServiceItem[]
}

export default function ServicesGrid({
  heading = 'Built for professional crypto trading',
  subheading = 'Execute with confidence using institutional controls, clear pricing, and resilient infrastructure.',
  services = [
    { title: 'Live Trading Engine', description: 'Low-latency matching for spot pairs.', bullets: ['Real-time books', 'Reliable execution', 'Market depth tools'], icon: 'ChartCandlestick' },
    { title: 'Vault Security', description: 'Layered controls for account and custody safety.', bullets: ['MFA support', 'Withdrawal allowlists', 'Risk monitoring'], icon: 'LockKeyhole' },
    { title: 'Smart Wallet Funding', description: 'Fast deposits and clear settlement flows.', bullets: ['Multi-network deposits', 'Status tracking', 'Clear confirmations'], icon: 'Wallet' },
    { title: 'API + Automation', description: 'Programmatic access for advanced users.', bullets: ['REST + WebSocket', 'Rate limit visibility', 'Sandbox mode'], icon: 'Zap' },
  ],
}: Partial<ServicesGridProps>) {
  const icons: Record<string, React.ReactNode> = {
    ChartCandlestick: <ChartCandlestick className="h-5 w-5" />,
    LockKeyhole: <LockKeyhole className="h-5 w-5" />,
    Wallet: <Wallet className="h-5 w-5" />,
    Zap: <Zap className="h-5 w-5" />,
  }

  return (
    <section id="services" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">{heading}</h2>
        <p className="mt-3 max-w-3xl text-white/70">{subheading}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className={cn('rounded-xl border border-white/10 bg-[#071a38]/80 p-5 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg')}>
              <div className="inline-flex rounded-md bg-[#003F88]/40 p-2 text-[#D4A574]">
                {icons[service.icon] ?? <ChartCandlestick className="h-5 w-5" />}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-white/70">{service.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-white/80">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
