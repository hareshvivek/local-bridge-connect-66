import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Local Bridge — $50 websites for local shops, built by students" },
      { name: "description", content: "Local Bridge pairs bakeries and cafes with student web developers. Flat $50 setup, $39/mo. 0% commission. Real portfolio proof for students." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center border border-foreground bg-foreground text-background font-display text-lg font-black">L</div>
            <span className="font-display text-xl font-black tracking-tight">Local Bridge<span className="text-clay">.</span></span>
          </div>
          <div className="hidden items-center gap-8 text-xs uppercase tracking-widest text-muted-foreground md:flex">
            <span>Est. Neighborhood</span>
            <span className="font-mono text-foreground">0% commission</span>
            <Link to="/admin" className="hover:text-foreground">Admin</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 px-6 py-14 md:grid-cols-12 md:px-10 md:py-24">
          <div className="md:col-span-8">
            <p className="eyebrow">A local marketplace, no. 001</p>
            <h1 className="mt-6 font-display text-[13vw] font-black leading-[0.85] tracking-tight md:text-[9rem]">
              Local<br />
              Bridge<span className="text-clay">.</span>
            </h1>
            <p className="mt-8 max-w-xl font-display text-2xl italic leading-snug text-muted-foreground md:text-3xl">
              Neighborhood shops get a website.<br />Students get real work.
            </p>
          </div>
          <div className="mt-10 flex flex-col justify-end gap-6 md:col-span-4 md:mt-0">
            <div className="border border-border p-6">
              <p className="eyebrow">Right now</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-black">14</span>
                <span className="text-sm text-muted-foreground">shops in sprint</span>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-5xl font-black">27</span>
                <span className="text-sm text-muted-foreground">student builders</span>
              </div>
              <div className="mt-6 h-px w-full bg-divider" />
              <p className="mt-6 font-mono text-xs uppercase tracking-widest text-moss">● Matching live</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two-path cards */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2">
          <div className="border-b border-border p-8 md:border-b-0 md:border-r md:p-14">
            <p className="eyebrow">For shopkeepers</p>
            <h2 className="mt-4 font-display text-5xl font-black leading-none tracking-tight md:text-6xl">
              A visual website<br />for your shop.
            </h2>
            <ul className="mt-10 space-y-3 border-t border-divider pt-6 text-sm">
              <li className="flex justify-between border-b border-divider pb-3"><span>Setup, one time</span><span className="font-mono">$50</span></li>
              <li className="flex justify-between border-b border-divider pb-3"><span>Hosting + edits, monthly</span><span className="font-mono">$39</span></li>
              <li className="flex justify-between border-b border-divider pb-3"><span>Marketplace commission</span><span className="font-mono">0%</span></li>
              <li className="flex justify-between"><span>Live in</span><span className="font-mono">~10 days</span></li>
            </ul>
            <div className="mt-10">
              <Link to="/shopkeeper" className="btn-primary">Enter as shopkeeper →</Link>
            </div>
          </div>
          <div className="p-8 md:p-14">
            <p className="eyebrow">For students</p>
            <h2 className="mt-4 font-display text-5xl font-black leading-none tracking-tight md:text-6xl">
              Build real work.<br />Get paid.
            </h2>
            <ul className="mt-10 space-y-3 border-t border-divider pt-6 text-sm">
              <li className="flex justify-between border-b border-divider pb-3"><span>Verified portfolio proof</span><span className="font-mono">✓</span></li>
              <li className="flex justify-between border-b border-divider pb-3"><span>Stipend per completed site</span><span className="font-mono">$120</span></li>
              <li className="flex justify-between border-b border-divider pb-3"><span>Sprint duration</span><span className="font-mono">7 days</span></li>
              <li className="flex justify-between"><span>Owner of the code</span><span className="font-mono">You</span></li>
            </ul>
            <div className="mt-10">
              <Link to="/student" className="btn-outline">Enter as student →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-20">
          <div className="flex items-end justify-between border-b border-border pb-4">
            <p className="eyebrow">How the bridge works</p>
            <p className="hidden font-mono text-xs uppercase tracking-widest md:block">Four steps · No dashboards</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-0 md:grid-cols-4">
            {[
              ["01", "Shop applies", "Owner uploads menu, photos, category. Five minutes flat."],
              ["02", "Student matches", "Admin approves the pairing. Sprint clock starts."],
              ["03", "Build sprint", "Seven days. One direct request box. No meetings."],
              ["04", "QA & deploy", "Admin reviews, deploys, releases stipend."],
            ].map(([n, t, d], i) => (
              <div key={n} className={"p-6 md:p-8 " + (i < 3 ? "border-b border-border md:border-b-0 md:border-r" : "")}>
                <p className="font-mono text-xs text-muted-foreground">{n}</p>
                <h3 className="mt-4 font-display text-2xl font-black leading-tight tracking-tight">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-muted-foreground md:px-10">
          <span>© Local Bridge — Built locally, delivered fast.</span>
          <span className="font-mono">Prototype · v0.1</span>
        </div>
      </footer>
    </div>
  );
}
