'use client'

import { useMemo, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Tier {
  name: string
  maker: number
  taker: number
}
interface FeeCalculatorProps {
  tiers?: Tier[]
  defaultVolume?: string
}

export default function FeeCalculator({
  tiers = [
    { name: 'Starter', maker: 0.0015, taker: 0.0020 },
    { name: 'Active', maker: 0.0010, taker: 0.0016 },
    { name: 'Pro', maker: 0.0006, taker: 0.0012 },
  ],
  defaultVolume = '25000',
}: Partial<FeeCalculatorProps>) {
  const [volume, setVolume] = useState(defaultVolume)
  const [tierIndex, setTierIndex] = useState(0)
  const [role, setRole] = useState<'maker' | 'taker'>('maker')

  const parsedVolume = Number(volume) || 0
  const rate = role === 'maker' ? tiers[tierIndex]?.maker ?? 0 : tiers[tierIndex]?.taker ?? 0

  const fee = useMemo(() => parsedVolume * rate, [parsedVolume, rate])

  return (
    <section id="calculator" className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Card className="rounded-xl border border-white/10 bg-[#071a38]/80 p-6 text-white">
          <h2 className="text-2xl font-semibold md:text-3xl">Fee Estimator</h2>
          <p className="mt-2 text-sm text-white/70">Estimate your trade cost using ChainVault maker/taker tiers.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm text-white/80">Trade Volume (USD)</label>
              <Input
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="mt-2 border-white/20 bg-[#03152f] text-white [font-variant-numeric:tabular-nums]"
              />
            </div>
            <div>
              <label className="text-sm text-white/80">Tier</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {tiers.map((t, i) => (
                  <Button key={t.name} variant={i === tierIndex ? 'default' : 'outline'} onClick={() => setTierIndex(i)}>
                    {t.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex gap-2">
            <Button variant={role === 'maker' ? 'default' : 'outline'} onClick={() => setRole('maker')}>Maker</Button>
            <Button variant={role === 'taker' ? 'default' : 'outline'} onClick={() => setRole('taker')}>Taker</Button>
          </div>

          <div className="mt-6 rounded-lg border border-[#2D6A4F]/40 bg-[#0a2138] p-4 [font-variant-numeric:tabular-nums]">
            <p className="text-sm text-white/70">Estimated Fee</p>
            <p className="mt-1 text-3xl font-semibold text-[#D4A574]">${fee.toFixed(2)}</p>
            <p className="mt-1 text-xs text-white/60">Rate: {(rate * 100).toFixed(2)}%</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
