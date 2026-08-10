import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Stats } from './components/Stats'
import { Footer } from './components/Footer'

const NOISE = "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"

export default function App() {
  return (
    <main className="min-h-screen gradient-mesh relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#08080A_90%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("${NOISE}")` }}></div>
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </main>
  )
}
