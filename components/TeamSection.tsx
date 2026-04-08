"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface TeamMember {
  name: string
  role: string
  bio: string
  highlight: string
  photo: string
}
interface TeamSectionProps {
  heading?: string
  members?: TeamMember[]
}

export default function TeamSection({
  heading = 'Leadership and advisors',
  members = [
    { name: 'Elena Park', role: 'Chief Executive Officer', bio: 'Former exchange operations leader focused on compliance and market integrity.', highlight: '12+ years in digital assets', photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577358/site-images/team-people/1181401.jpg' },
    { name: 'Marcus Reed', role: 'Chief Security Officer', bio: 'Built custody and risk frameworks for regulated fintech institutions.', highlight: 'Security architecture specialist', photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577357/site-images/team-people/1181738.jpg' },
    { name: 'Amina Shah', role: 'Head of Markets', bio: 'Designs liquidity and execution programs for professional traders.', highlight: 'Market microstructure expert', photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577327/site-images/team-people/12899112.jpg' },
  ],
}: Partial<TeamSectionProps>) {
  return (
    <section id="team" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">{heading}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {members.map((member) => (
            <Card key={member.name} className="overflow-hidden rounded-xl border border-white/10 bg-[#071a38]/80 text-white">
              <Image src={member.photo} alt={member.name} width={640} height={360} className="h-48 w-full object-cover" unoptimized />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-[#D4A574]">{member.role}</p>
                <p className="mt-3 text-sm text-white/70">{member.bio}</p>
                <p className="mt-3 text-sm font-medium text-white">{member.highlight}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
