"use client";

import { Clock3, FileText } from 'lucide-react'

interface ResourceItem {
  title: string
  category: string
  readTime: string
  summary: string
}
interface ResourcesTimelineProps {
  heading?: string
  resources?: ResourceItem[]
}

export default function ResourcesTimeline({
  heading = 'Guides and market resources',
  resources = [
    { title: 'Getting Started with Spot Trading', category: 'Beginner Guide', readTime: '6 min', summary: 'Walkthrough of order types, slippage, and risk basics.' },
    { title: 'Understanding Maker vs Taker Fees', category: 'Fees', readTime: '4 min', summary: 'How execution style changes your fee profile.' },
    { title: 'Secure Your Account in 5 Steps', category: 'Security', readTime: '5 min', summary: 'Practical checklist for MFA, device hygiene, and alerts.' },
  ],
}: Partial<ResourcesTimelineProps>) {
  return (
    <section id="resources" className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-white">{heading}</h2>
        <div className="mt-8 space-y-4">
          {resources.map((item, index) => (
            <article key={item.title} className="relative rounded-xl border border-white/10 bg-[#071a38]/80 p-5 text-white">
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-[#2D6A4F]" />
              <div className="ml-3">
                <p className="text-xs text-white/60">Resource {index + 1}</p>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-white/70">
                  <span className="inline-flex items-center gap-1"><FileText className="h-3.5 w-3.5" />{item.category}</span>
                  <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" />{item.readTime}</span>
                </div>
                <p className="mt-2 text-sm text-white/70">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
