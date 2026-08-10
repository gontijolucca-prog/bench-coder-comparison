import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-nebula-950 text-slate-100 overflow-x-hidden">
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </div>
  )
}
