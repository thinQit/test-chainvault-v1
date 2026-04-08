"use client";

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface FeeRow {
  tier: string
  volume: string
  maker: string
  taker: string
  best?: boolean
}
interface FeeScheduleTableProps {
  rows?: FeeRow[]
}

export default function FeeScheduleTable({
  rows = [
    { tier: 'Starter', volume: '< $100k', maker: '0.15%', taker: '0.20%' },
    { tier: 'Active', volume: '$100k - $1M', maker: '0.10%', taker: '0.16%' },
    { tier: 'Pro', volume: '> $1M', maker: '0.06%', taker: '0.12%', best: true },
  ],
}: Partial<FeeScheduleTableProps>) {
  return (
    <section id="fees" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-white">Fee Schedule</h2>
        <Card className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#071a38]/80 text-white">
          <table className="w-full text-sm">
            <thead className="bg-[#0b2348]">
              <tr>
                <th className="px-4 py-3 text-left">Tier</th>
                <th className="px-4 py-3 text-left">30d Volume</th>
                <th className="px-4 py-3 text-left">Maker</th>
                <th className="px-4 py-3 text-left">Taker</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.tier} className={cn('border-t border-white/10', row.best && 'bg-[#2D6A4F]/20')}>
                  <td className="px-4 py-3 font-medium">{row.tier}</td>
                  <td className="px-4 py-3">{row.volume}</td>
                  <td className="px-4 py-3 [font-variant-numeric:tabular-nums]">{row.maker}</td>
                  <td className="px-4 py-3 [font-variant-numeric:tabular-nums]">{row.taker}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  )
}
