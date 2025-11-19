import { Phone, MessageSquare, Mail, Globe, Zap, Shield, Sparkles, Headphones } from 'lucide-react'

const features = [
  {
    icon: Phone,
    title: 'Voice',
    desc: 'Natural, latency-optimized speech that understands accents and context in real-time.'
  },
  {
    icon: MessageSquare,
    title: 'Chat',
    desc: 'AI chat that resolves complex issues with memory, tools, and secure handoffs.'
  },
  { icon: Mail, title: 'Email', desc: 'Generate, route, and summarize email threads with enterprise guardrails.' },
  { icon: Globe, title: 'Web & In-app', desc: 'Widget SDK to embed a unified agent in any site or product.' },
  { icon: Zap, title: 'Fast setup', desc: 'Go live in days with templates for support, sales, and onboarding.' },
  { icon: Shield, title: 'Enterprise-grade', desc: 'SOC2, SSO, RBAC, PII redaction, and audit trails built-in.' },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">Platform</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">One brain, every channel</h2>
          <p className="mt-3 text-slate-300/80 max-w-2xl mx-auto">Unify voice, chat, email, and messaging into a single agent that learns from every interaction.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-300/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
