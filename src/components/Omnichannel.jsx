import { PhoneCall, MessagesSquare, MailOpen, Bot, Github, Link2 } from 'lucide-react'

export default function Omnichannel() {
  return (
    <section id="omnichannel" className="relative bg-slate-950 text-white py-24">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">A single agent, everywhere</h2>
          <p className="mt-4 text-slate-300/80">Deploy the same brain across voice IVR, website chat, email inboxes, WhatsApp, and more. Central knowledge, shared memory, consistent tone.</p>
          <ul className="mt-6 space-y-3 text-slate-200">
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"/> Real-time voice with call deflection and smart routing</li>
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"/> Website and in-product chat with tool use and forms</li>
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-amber-400"/> Email triage, drafting, and escalation with human review</li>
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> WhatsApp, SMS, and social DMs with templates and opt-ins</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold">Book a demo</a>
            <a href="#docs" className="px-5 py-3 rounded-xl border border-white/15 hover:bg-white/5 transition inline-flex items-center gap-2"><Github className="h-4 w-4"/> Docs & SDK</a>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <PhoneCall className="h-6 w-6"/>
              <h4 className="mt-3 font-semibold">Voice IVR</h4>
              <p className="mt-1 text-sm text-slate-300/80">Answer calls, verify identity, complete actions, or handoff with context.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <MessagesSquare className="h-6 w-6"/>
              <h4 className="mt-3 font-semibold">Web chat</h4>
              <p className="mt-1 text-sm text-slate-300/80">Resolve in-site issues, collect data, and trigger workflows.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <MailOpen className="h-6 w-6"/>
              <h4 className="mt-3 font-semibold">Email</h4>
              <p className="mt-1 text-sm text-slate-300/80">Summarize threads and draft replies aligned to brand voice.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Bot className="h-6 w-6"/>
              <h4 className="mt-3 font-semibold">Messaging</h4>
              <p className="mt-1 text-sm text-slate-300/80">WhatsApp, SMS, and social DMs with templates and opt-ins.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
