import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, SectionHeader } from "@/components/app-shell";

export const Route = createFileRoute("/student")({
  head: () => ({ meta: [{ title: "Student — Local Bridge" }, { name: "description", content: "Your portfolio, the marketplace board, and your active workspace." }] }),
  component: StudentView,
});

const LAUNCHED = [
  { name: "Corner Coffee Co.", url: "cornercoffee.co", month: "May" },
  { name: "Hana Flowers", url: "hanaflowers.shop", month: "Apr" },
  { name: "Del Rio Tacos", url: "delriotacos.nyc", month: "Feb" },
];

const BOARD = [
  { name: "Miller Street Bakery", cat: "Bakery · Café", vibe: "Warm, editorial, cream tones" },
  { name: "Blue Fern Studio", cat: "Ceramics · Retail", vibe: "Minimal, gallery-style" },
  { name: "Nordic Cutlery", cat: "Kitchenware · Retail", vibe: "Nordic, monochrome" },
  { name: "Café Poesia", cat: "Espresso bar", vibe: "Editorial, small-menu focus" },
];

function StudentView() {
  const [submitted, setSubmitted] = useState(false);
  const [url, setUrl] = useState("https://millerstreet.local-bridge.app");

  return (
    <AppShell role="student">
      <SectionHeader
        eyebrow="Student · Priya Ashwini"
        title="Build. Ship. Prove it."
        kicker="Your profile, the shop board, and your current workspace — all one page."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Profile grid */}
        <section className="lg:col-span-5">
          <div className="border border-border">
            <div className="border-b border-border p-6">
              <p className="eyebrow">Profile</p>
              <h2 className="mt-3 font-display text-4xl font-black leading-none tracking-tight">Priya Ashwini</h2>
              <p className="mt-3 text-sm text-muted-foreground">New York University · Interaction Design, Class of ’27</p>
              <div className="mt-6 grid grid-cols-3 border-t border-divider">
                <Stat label="Shipped" value="4" />
                <Stat label="Earned" value="$480" borderLeft />
                <Stat label="Rating" value="4.9" borderLeft />
              </div>
            </div>
            <div>
              <p className="eyebrow px-6 pt-5">Verified launches</p>
              <ul className="mt-2 divide-y divide-divider">
                {LAUNCHED.map((l) => (
                  <li key={l.url} className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="font-display text-lg font-bold">{l.name}</p>
                      <p className="font-mono text-xs text-muted-foreground">{l.url}</p>
                    </div>
                    <span className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest">{l.month} · Live</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Marketplace board */}
        <section className="lg:col-span-7">
          <div className="border border-border">
            <div className="flex items-end justify-between border-b border-border p-6">
              <div>
                <p className="eyebrow">Marketplace board</p>
                <h2 className="mt-2 font-display text-3xl font-black leading-none tracking-tight">Open shops</h2>
              </div>
              <span className="font-mono text-xs text-muted-foreground">{BOARD.length} available</span>
            </div>
            <ul className="divide-y divide-divider">
              {BOARD.map((b, i) => (
                <li key={b.name} className="grid grid-cols-12 items-center gap-4 px-6 py-5">
                  <div className="col-span-1 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
                  <div className="col-span-7">
                    <p className="font-display text-xl font-black leading-tight tracking-tight">{b.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{b.cat}</p>
                    <p className="mt-2 text-sm text-muted-foreground italic">“{b.vibe}”</p>
                  </div>
                  <div className="col-span-4 flex justify-end">
                    <button className="btn-outline">Request match →</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Workspace */}
        <section className="lg:col-span-12">
          <div className="border border-border">
            <div className="flex items-end justify-between border-b border-border p-6">
              <div>
                <p className="eyebrow">Active workspace</p>
                <h2 className="mt-2 font-display text-3xl font-black leading-none tracking-tight">Miller Street Bakery</h2>
              </div>
              <span className="border border-moss px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-moss">● Day 4 / 7</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-b border-border p-6 md:border-b-0 md:border-r">
                <p className="eyebrow">Shop assets</p>
                <ul className="mt-3 divide-y divide-divider border-t border-divider">
                  {[
                    ["Business name", "Miller Street Bakery"],
                    ["Category", "Bakery · Café"],
                    ["Neighborhood", "Cobble Hill, Brooklyn"],
                    ["Files", "logo-mark.svg · storefront.jpg · counter-01.jpg"],
                  ].map(([k, v]) => (
                    <li key={k} className="grid grid-cols-12 gap-4 py-3">
                      <span className="col-span-4 eyebrow">{k}</span>
                      <span className="col-span-8 font-mono text-sm">{v}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border border-divider bg-background p-4">
                  <p className="eyebrow">Latest owner request</p>
                  <p className="mt-2 text-sm">Please add our Sunday hours (9am–2pm) to the footer.</p>
                </div>
              </div>

              <div className="p-6">
                <p className="eyebrow">Submit for QA</p>
                <p className="mt-2 text-sm text-muted-foreground">Paste the final URL. Admin reviews within 24h.</p>
                <label className="mt-6 block">
                  <span className="eyebrow">Live URL</span>
                  <input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="mt-2 w-full border-0 border-b border-foreground bg-transparent pb-2 font-mono text-base focus:outline-none"
                  />
                </label>
                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={() => setSubmitted(true)}
                    className="btn-primary"
                  >
                    {submitted ? "Submitted ✓" : "Submit to admin"}
                  </button>
                  {submitted && <span className="font-mono text-xs text-moss">● Queued for QA</span>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function Stat({ label, value, borderLeft = false }: { label: string; value: string; borderLeft?: boolean }) {
  return (
    <div className={"py-4 " + (borderLeft ? "border-l border-divider pl-4" : "pr-4")}>
      <p className="eyebrow">{label}</p>
      <p className="mt-1 font-display text-3xl font-black leading-none">{value}</p>
    </div>
  );
}
