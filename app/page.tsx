import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhatIDo from '@/components/WhatIDo'
import Skills from '@/components/Skills'
import ExperienceAreas from '@/components/ExperienceAreas'
import Projects from '@/components/Projects'
import Personal from '@/components/Personal'
import Mission from '@/components/Mission'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatIDo />
      <Skills />
      <ExperienceAreas />
      <Projects />
      <Personal />
      <Mission />
      <Footer />
    </main>
  )
}
