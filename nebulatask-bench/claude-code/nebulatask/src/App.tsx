import type { JSX } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Footer from './components/Footer'

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </div>
  )
}