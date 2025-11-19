import Hero from './components/Hero'
import Features from './components/Features'
import Omnichannel from './components/Omnichannel'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <Omnichannel />
      <CTA />
      <footer className="bg-slate-950 text-slate-400 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Retner AI. All rights reserved.</p>
          <div className="text-sm flex items-center gap-4">
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="/test" className="hover:text-white">System status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
