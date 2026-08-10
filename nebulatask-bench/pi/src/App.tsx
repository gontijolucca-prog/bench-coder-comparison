import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-bone-50">
      <div className="pointer-events-none absolute inset-0 grain opacity-90" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />

      <main className="relative">
        <Hero />
        <Features />
        <Stats />
      </main>

      <Footer />
    </div>
  );
}