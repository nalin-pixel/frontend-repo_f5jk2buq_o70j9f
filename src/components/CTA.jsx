export default function CTA() {
  return (
    <section id="get-started" className="relative bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-10">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to make your support AI-first?</h3>
          <p className="mt-3 text-slate-300/80">Launch an omnichannel agent that reduces handle time and lifts CSAT in weeks, not months.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#demo" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold">Book a demo</a>
            <a href="#contact" className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/15 hover:bg-white/5 transition">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
