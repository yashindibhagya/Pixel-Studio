import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Services } from '@/components/sections/Services'
import { Work } from '@/components/sections/Work'
import { Process } from '@/components/sections/Process'
// import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { Benefits } from '@/components/sections/Benefits'
import { FAQ } from '@/components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Benefits />
      <Work />
      <Process />
      <FAQ />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}
