import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import ForWho from '@/components/ForWho'
import Coverage from '@/components/Coverage'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HowItWorks />
      <ForWho />
      <Coverage />
      <CTA />
      <Footer />
    </main>
  )
}