'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children?: React.ReactNode
  className?: string
  threshold?: number
}

export default function ScrollReveal({
  children = null,
  className = '',
  threshold = 0.2,
}: Partial<ScrollRevealProps>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true)
      },
      { threshold }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className
      )}
    >
      {children}
    </div>
  )
}
