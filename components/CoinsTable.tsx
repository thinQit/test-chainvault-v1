"use client";

import { Card } from '@/components/ui/card'

interface CoinRow {
  asset: string
  symbol: string
  networks: string
  minDeposit: string
}
interface CoinsTableProps {
  rows?: CoinRow[]
}

export default function CoinsTable({
  rows = [
    { asset: 'Bitcoin', symbol: 'BTC', networks: 'Bitcoin', minDeposit: '0.0005 BTC' },
    { asset: 'Ethereum', symbol: 'ETH', networks: 'Ethereum, Arbitrum', minDeposit: '0.01 ETH' },
    { asset: 'USD Coin', symbol: 'USDC', networks: 'Ethereum, Solana, Polygon', minDeposit: '25 USDC' },
    { asset: 'Solana', symbol: 'SOL', networks: 'Solana', minDeposit: '0.1 SOL' },
  ],
}: Partial<CoinsTableProps>) {
  return (
    <section id="coins" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-white">Supported Assets & Networks</h2>
        <Card className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#071a38]/80 text-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="sticky top-0 bg-[#0b2348] text-white">
                <tr>
                  <th className="px-4 py-3">Asset</th>
                  <th className="px-4 py-3">Symbol</th>
                  <th className="px-4 py-3">Networks</th>
                  <th className="px-4 py-3">Min Deposit</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.symbol} className="border-t border-white/10">
                    <td className="px-4 py-3">{row.asset}</td>
                    <td className="px-4 py-3">{row.symbol}</td>
                    <td className="px-4 py-3">{row.networks}</td>
                    <td className="px-4 py-3 [font-variant-numeric:tabular-nums]">{row.minDeposit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  )
}
