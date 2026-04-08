'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface TickerItem {
  symbol: string
  price: number
  change24h: number
  volume: string
}
interface MarketsTickerProps {
  items?: TickerItem[]
}

export default function MarketsTicker({
  items = [
    { symbol: 'BTC/USD', price: 68250, change24h: 2.1, volume: '$1.9B' },
    { symbol: 'ETH/USD', price: 3520, change24h: -0.8, volume: '$920M' },
    { symbol: 'SOL/USD', price: 142, change24h: 3.7, volume: '$410M' },
  ],
}: Partial<MarketsTickerProps>) {
  const [data, setData] = useState(items)

  useEffect(() => {
    const timer = setInterval(() => {
      setData((prev) =>
        prev.map((row) => {
          const drift = (Math.random() - 0.5) * row.price * 0.002
          const next = Math.max(0, row.price + drift)
          return { ...row, price: next }
        })
      )
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="markets" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-white">Live Markets (Demo)</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {data.map((item) => (
            <Card key={item.symbol} className="rounded-xl border border-white/10 bg-[#071a38]/80 p-5 text-white">
              <p className="text-sm text-white/70">{item.symbol}</p>
              <p className="mt-2 text-3xl font-semibold [font-variant-numeric:tabular-nums]">${item.price.toFixed(2)}</p>
              <p className={cn('mt-1 text-sm font-medium', item.change24h >= 0 ? 'text-emerald-400' : 'text-rose-400')}>
                {item.change24h >= 0 ? '+' : ''}{item.change24h.toFixed(2)}% (24h)
              </p>
              <p className="mt-2 text-xs text-white/60">Volume: {item.volume}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
