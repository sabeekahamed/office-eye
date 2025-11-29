
import React from "react";

export default function OfficeEyeLanding() {
  return (
    <div className="min-h-screen bg-neutral-50 text-slate-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold">OfficeEye</h1>
            <p className="text-xs text-slate-500">Simple, lightweight employee monitoring for small teams</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="#" className="ml-4 inline-flex items-center px-4 py-2 border rounded-md bg-indigo-600 text-white">Get Started</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Know who is working. <span className="text-indigo-600">Real insights</span>, not guesswork.</h2>
            <p className="mt-6 text-lg text-slate-600">OfficeEye is a lightweight agent + web dashboard that shows active hours, apps used, and productivity trends — built for small businesses and managers who need answers, not overhead.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-indigo-600 text-white font-medium">Start 14-day Trial</a>
              <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-md border text-slate-700">See Features</a>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
              <li>• Lightweight Windows agent (&lt;30MB)</li>
              <li>• Mobile and web manager apps</li>
              <li>• Affordable monthly pricing</li>
              <li>• Privacy-first defaults</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border">
            <div className="text-xs text-slate-500">Live demo</div>
            <div className="mt-3 border rounded-lg overflow-hidden">
              <div className="bg-slate-900 text-white p-3 flex items-center justify-between">
                <div className="text-sm">Team: Acme IT</div>
                <div className="text-xs opacity-80">Status: Online</div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Sabeek A.</div>
                    <div className="text-xs text-slate-500">Active: 6h 22m</div>
                  </div>
                  <div className="text-sm text-slate-600">Current App: VS Code</div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-600">
                  <div className="p-2 bg-neutral-100 rounded">Chrome — 2h</div>
                  <div className="p-2 bg-neutral-100 rounded">Teams — 1h</div>
                  <div className="p-2 bg-neutral-100 rounded">VS Code — 2h 15m</div>
                  <div className="p-2 bg-neutral-100 rounded">Idle — 45m</div>
                </div>

                <div className="mt-4 text-right">
                  <a className="text-indigo-600 text-sm font-medium">Open full report →</a>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-slate-500">Note: screenshots and keystroke capture are disabled by default for privacy. Enable only with consent.</div>
          </div>
        </section>

        <section id="features" className="py-12">
          <h3 className="text-2xl font-bold">Key Features</h3>
          <p className="text-slate-600 mt-2">Everything a manager needs — simple, secure, and affordable.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-xl shadow-sm border"><h4 className="font-semibold">Active time & Attendance</h4><p className="mt-2 text-sm text-slate-600">Track active/idle hours, auto-attendance export, daily summaries.</p></div>
            <div className="p-5 bg-white rounded-xl shadow-sm border"><h4 className="font-semibold">App & Website Usage</h4><p className="mt-2 text-sm text-slate-600">See which applications and websites take most of the time.</p></div>
            <div className="p-5 bg-white rounded-xl shadow-sm border"><h4 className="font-semibold">Live Online Status</h4><p className="mt-2 text-sm text-slate-600">Who is currently online and what they are working on.</p></div>
            <div className="p-5 bg-white rounded-xl shadow-sm border"><h4 className="font-semibold">Alerts</h4><p className="mt-2 text-sm text-slate-600">Get notified on suspicious activity or long idle durations.</p></div>
            <div className="p-5 bg-white rounded-xl shadow-sm border"><h4 className="font-semibold">Mobile Monitoring</h4><p className="mt-2 text-sm text-slate-600">Quick checks and alerts via Android app for managers.</p></div>
            <div className="p-5 bg-white rounded-xl shadow-sm border"><h4 className="font-semibold">Privacy-first</h4><p className="mt-2 text-sm text-slate-600">Screenshots off by default; easy consent and compliance controls.</p></div>
          </div>
        </section>

        <section id="how" className="py-12 bg-gradient-to-b from-transparent to-neutral-100 rounded-lg p-6">
          <h3 className="text-2xl font-bold">How OfficeEye Works</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg border shadow-sm"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">1</div><div><div className="font-medium">Install Agent</div><div className="text-sm text-slate-600 mt-1">Deploy a small agent to employees' Windows laptops via a single MSI or remote push.</div></div></div></div>
            <div className="p-4 bg-white rounded-lg border shadow-sm"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">2</div><div><div className="font-medium">Connect to Server</div><div className="text-sm text-slate-600 mt-1">Agent sends compressed usage events every 1–2 mins to your secure server over HTTPS.</div></div></div></div>
            <div className="p-4 bg-white rounded-lg border shadow-sm"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">3</div><div><div className="font-medium">Monitor & Act</div><div className="text-sm text-slate-600 mt-1">Use the web dashboard or mobile app to review reports, export CSVs, and set alerts.</div></div></div></div>
          </div>
        </section>

        <section id="pricing" className="py-12">
          <h3 className="text-2xl font-bold">Pricing</h3>
          <p className="text-slate-600 mt-2">Simple per-seat pricing. Month-to-month, cancel anytime.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border bg-white"><div className="flex items-baseline gap-3"><div className="text-lg font-semibold">Starter</div></div><div className="mt-4 text-3xl font-extrabold">{"₹99"}<span className="text-sm font-medium text-slate-600">/user/month</span></div><ul className="mt-4 text-sm text-slate-600 space-y-2"><li>• Up to 10 users</li><li>• Active time</li><li>• App usage</li></ul><div className="mt-6"><a className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Start Trial</a></div></div>
            <div className="p-6 rounded-xl border bg-white ring-2 ring-indigo-200"><div className="flex items-baseline gap-3"><div className="text-lg font-semibold">Growth</div><div className="ml-auto text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded">Popular</div></div><div className="mt-4 text-3xl font-extrabold">{"₹149"}<span className="text-sm font-medium text-slate-600">/user/month</span></div><ul className="mt-4 text-sm text-slate-600 space-y-2"><li>• Up to 100 users</li><li>• Mobile app</li><li>• Export reports</li></ul><div className="mt-6"><a className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Start Trial</a></div></div>
            <div className="p-6 rounded-xl border bg-white"><div className="flex items-baseline gap-3"><div className="text-lg font-semibold">Pro</div></div><div className="mt-4 text-3xl font-extrabold">{"₹199"}<span className="text-sm font-medium text-slate-600">/user/month</span></div><ul className="mt-4 text-sm text-slate-600 space-y-2"><li>• Unlimited users</li><li>• Priority support</li><li>• Custom integrations</li></ul><div className="mt-6"><a className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Start Trial</a></div></div>
          </div>
        </section>

        <section id="faq" className="py-12">
          <h3 className="text-2xl font-bold">FAQ</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
            <div className="p-4 bg-white rounded border"><div className="font-medium">Is it legal to monitor employees?</div><div className="mt-2 text-sm text-slate-600">Laws vary by region. We recommend transparent policies and consent. Provide a notice and get written consent where required.</div></div>
            <div className="p-4 bg-white rounded border"><div className="font-medium">Does the agent affect performance?</div><div className="mt-2 text-sm text-slate-600">No. The agent is designed to be lightweight and uses minimal CPU/RAM. It samples active window and usage events efficiently.</div></div>
            <div className="p-4 bg-white rounded border"><div className="font-medium">Can I disable screenshots?</div><div className="mt-2 text-sm text-slate-600">Yes. Screenshots and keylogging are disabled by default. Enable only with consent and for specific cases.</div></div>
            <div className="p-4 bg-white rounded border"><div className="font-medium">How do I install across multiple PCs?</div><div className="mt-2 text-sm text-slate-600">We provide MSI, remote push scripts, and an Active Directory-friendly installer.</div></div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <h3 className="text-2xl font-bold">Contact / Start Trial</h3>
          <p className="text-slate-600 mt-2">Ready to try? Fill the form and we’ll set up a 14-day trial for your team.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <form action="REPLACE_WITH_FORM_ACTION" method="POST" className="space-y-4 bg-white p-6 rounded-lg shadow">
              <div><label className="block text-sm font-medium text-slate-700">Full name</label><input name="name" required className="mt-1 block w-full rounded-md border px-3 py-2" /></div>
              <div><label className="block text-sm font-medium text-slate-700">Email</label><input name="email" type="email" required className="mt-1 block w-full rounded-md border px-3 py-2" /></div>
              <div><label className="block text-sm font-medium text-slate-700">Company</label><input name="company" className="mt-1 block w-full rounded-md border px-3 py-2" /></div>
              <div><label className="block text-sm font-medium text-slate-700">Message</label><textarea name="message" rows={4} className="mt-1 block w-full rounded-md border px-3 py-2" /></div>
              <div className="text-right"><button type="submit" className="px-5 py-2 rounded-md bg-indigo-600 text-white">Request Trial</button></div>
            </form>

            <div className="p-6 bg-neutral-100 rounded-lg"><h4 className="font-semibold">Contact Info</h4><p className="mt-2 text-sm text-slate-600">Email: hello@officeeye.example (replace)</p><p className="mt-1 text-sm text-slate-600">Phone: +91 90000 00000 (replace)</p><div className="mt-6"><h5 className="font-medium">Why OfficeEye?</h5><p className="mt-2 text-sm text-slate-600">Affordable, privacy-first, and built for small businesses. Deploy in minutes, understand productivity in hours.</p></div></div>
          </div>
        </section>

        <footer className="py-10 text-sm text-slate-500 text-center">© {new Date().getFullYear()} OfficeEye — Built for small teams. All rights reserved.</footer>
      </main>
    </div>
  );
}
