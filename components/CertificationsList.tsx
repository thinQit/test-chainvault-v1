"use client";

import { ShieldCheck, Lock, Fingerprint, BadgeCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CertItem {
  title: string
  description: string
  icon: string
}
interface CertificationsListProps {
  heading?: string
  items?: CertItem[]
  ctaLabel?: string
  ctaHref?: string
}

export default function CertificationsList({
  heading = 'Security controls and trust posture',
  items = [
    { title: 'Cold Storage Policy', description: 'Majority of assets held in offline custody workflows.', icon: 'Lock' },
    { title: 'Account Protection', description: 'MFA enforcement, session checks, and withdrawal safeguards.', icon: 'Fingerprint' },
    { title: 'Compliance Monitoring', description: 'Continuous transaction and risk pattern monitoring.', icon: 'ShieldCheck' },
    { title: 'Operational Reviews', description: 'Regular control testing and internal audit cycles.', icon: 'BadgeCheck' },
  ],
  ctaLabel = 'View Security Page',
  ctaHref = '#security',
}: Partial<CertificationsListProps>) {
  const iconMap: Record<string, React.ReactNode> = {
    Lock: <Lock className="h-5 w-5" />,
    Fingerprint: <Fingerprint className="h-5 w-5" />,
    ShieldCheck: <ShieldCheck className="h-5 w-5" />,
    BadgeCheck: <BadgeCheck className="h-5 w-5" />,
  }

  return (
    <section id="certifications" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-white">{heading}</h2>
        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#071a38]/80 p-4 text-white">
              <span className="mt-0.5 text-[#D4A574]">{iconMap[item.icon] ?? <ShieldCheck className="h-5 w-5" />}</span>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Button asChild className="mt-6 bg-[#003F88] hover:bg-[#00316c]">
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      </div>
    </section>
  )
}
