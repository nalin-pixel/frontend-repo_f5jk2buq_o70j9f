import Spline from '@splinetool/react-spline'
import { Menu, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Top navigation */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-fuchsia-500/20"/>
            <span className="text-lg font-semibold tracking-tight">Retner AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#omnichannel" className="hover:text-white transition-colors">Omnichannel</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="px-4 py-2 rounded-lg border border-white/15 text-slate-200 hover:bg-white/5 transition">Book a demo</a>
            <a href="#get-started" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-200 transition inline-flex items-center gap-2">Get started <ArrowRight className="h-4 w-4"/></a>
          </div>
          <button className="md:hidden p-2 rounded-lg border border-white/15 text-slate-200" aria-label="Open menu">
            <Menu className="h-5 w-5"/>
          </button>
        </div>
      </header>

      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (does not block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.25),transparent_60%)]"/>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/80 to-transparent"/>

      {/* Copy block */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-40 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/> Live AI voice + chat
        </div>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          AI-first omnichannel for modern customer experiences
        </h1>
        <p className="mt-5 text-lg md:text-xl text-slate-200/80">
          Automate voice, chat, email, and messaging with a single intelligent agent. Route, resolve, and personalize across every channel.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#get-started" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-slate-950 font-semibold shadow-lg shadow-fuchsia-500/20">Start free</a>
          <a href="#demo" className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/15 hover:bg-white/5 transition">See a demo</a>
        </div>
        <p className="mt-4 text-xs text-slate-400">Trusted by teams to reduce handle time, boost CSAT, and increase revenue</p>
      </div>
    </section>
  )
}
