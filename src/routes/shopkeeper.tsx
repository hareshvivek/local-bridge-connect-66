import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, SectionHeader } from "@/components/app-shell";

export const Route = createFileRoute("/shopkeeper")({
  head: () => ({ meta: [{ title: "Shopkeeper — Local Bridge" }, { name: "description", content: "Onboard your shop, track your sprint, and request changes in one place." }] }),
  component: ShopkeeperView,
});

const STAGES = ["Matched", "Building", "Quality Check", "Live"] as const;

function ShopkeeperView() {
  const [stageIdx] = useState(1);
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState<{ id: number; text: string; when: string }[]>([
    { id: 1, text: "Please add our Sunday hours (9am–2pm) to the footer.", when: "Yesterday" },
  ]);

  function submitRequest() {
    if (!msg.trim()) return;
    setSent((s) => [{ id: Date.now(), text: msg.trim(), when: "Just now" }, ...s]);
    setMsg("");
  }

  return (
    <AppShell role="shopkeeper">
      <SectionHeader
        eyebrow="Shop · Miller Street Bakery"
        title="Your sprint, in one page."
        kicker="No settings, no dashboards. Upload, track, and request changes right here."
      />

      {/* Sprint progress */}
      <div className="mb-10 border border-border">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <p className="eyebrow">Sprint progress · Week 1</p>
          <p className="font-mono text-xs text-muted-foreground">Day 4 / 7</p>
        </div>
        <div className="grid grid-cols-4">
          {STAGES.map((s, i) => {
            const done = i < stageIdx;
            const active = i === stageIdx;
            return (
              <div key={s} className={"relative border-r border-border p-6 last:border-r-0 " + (done ? "bg-foreground text-background" : active ? "bg-secondary" : "")}>
                <p className={"font-mono text-xs " + (done ? "opacity-60" : "text-muted-foreground")}>{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-display text-xl font-black leading-tight">{s}</p>
                {active && <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-widest text-moss">● In progress</span>}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Onboarding panel */}
        <section className="lg:col-span-7">
          <div className="border border-border">
            <div className="border-b border-border px-6 py-4">
              <p className="eyebrow">Onboarding</p>
              <h2 className="mt-1 font-display text-2xl font-black tracking-tight">Your shop, in five fields.</h2>
            </div>
            <form className="grid grid-cols-1 divide-y divide-divider" onSubmit={(e) => e.preventDefault()}>
              <Field label="01 / Business name" defaultValue="Miller Street Bakery" />
              <Field label="02 / Category" defaultValue="Bakery · Café" />
              <Field label="03 / Neighborhood" defaultValue="Cobble Hill, Brooklyn" />
              <FieldTextarea label="04 / Menu (paste or list)" defaultValue={"Sourdough loaf — $8\nAlmond croissant — $4.50\nCortado — $5"} />
              <UploadRow label="05 / Photos + logo" files={["logo-mark.svg", "storefront.jpg", "counter-01.jpg"]} />
            </form>
            <div className="flex items-center justify-between border-t border-border px-6 py-4">
              <p className="text-xs text-muted-foreground">Last saved · 2 min ago</p>
              <button className="btn-primary">Save & notify builder</button>
            </div>
          </div>
        </section>

        {/* Right column */}
        <section className="flex flex-col gap-6 lg:col-span-5">
          {/* Match card */}
          <div className="border border-border">
            <div className="border-b border-border px-6 py-4">
              <p className="eyebrow">Your builder</p>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-3xl font-black leading-none tracking-tight">Priya Ashwini</p>
                  <p className="mt-2 text-sm text-muted-foreground">NYU · Junior · Interaction Design</p>
                </div>
                <span className="border border-moss px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-moss">Matched</span>
              </div>
              <div className="mt-6 grid grid-cols-2 border-t border-divider">
                <Stat label="Past shops" value="4" />
                <Stat label="On-time rate" value="100%" borderLeft />
              </div>
            </div>
          </div>

          {/* Request box */}
          <div className="border border-border">
            <div className="border-b border-border px-6 py-4">
              <p className="eyebrow">Request an update</p>
              <p className="mt-1 text-sm text-muted-foreground">Type it in plain words. We handle the rest.</p>
            </div>
            <div className="p-6">
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={4}
                placeholder='e.g. "Change croissant price to $4"'
                className="w-full resize-none border border-border bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-foreground"
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="font-mono text-xs text-muted-foreground">Direct to builder · Avg reply 3h</p>
                <button onClick={submitRequest} className="btn-primary">Send request</button>
              </div>
            </div>
            {sent.length > 0 && (
              <div className="border-t border-border">
                <p className="eyebrow px-6 pt-4">Recent</p>
                <ul className="divide-y divide-divider">
                  {sent.map((s) => (
                    <li key={s.id} className="flex items-start justify-between gap-4 px-6 py-4">
                      <p className="text-sm">{s.text}</p>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.when}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function Field({ label, defaultValue }: { label: string; defaultValue?: string }) {
  return (
    <label className="block px-6 py-4">
      <span className="eyebrow">{label}</span>
      <input
        defaultValue={defaultValue}
        className="mt-2 w-full border-0 border-b border-transparent bg-transparent pb-1 font-display text-xl font-semibold focus:border-foreground focus:outline-none"
      />
    </label>
  );
}

function FieldTextarea({ label, defaultValue }: { label: string; defaultValue?: string }) {
  return (
    <label className="block px-6 py-4">
      <span className="eyebrow">{label}</span>
      <textarea
        defaultValue={defaultValue}
        rows={4}
        className="mt-2 w-full resize-none border-0 border-b border-transparent bg-transparent pb-1 font-mono text-sm focus:border-foreground focus:outline-none"
      />
    </label>
  );
}

function UploadRow({ label, files }: { label: string; files: string[] }) {
  return (
    <div className="px-6 py-4">
      <div className="flex items-center justify-between">
        <span className="eyebrow">{label}</span>
        <button type="button" className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background">+ Upload</button>
      </div>
      <ul className="mt-3 divide-y divide-divider border-t border-divider">
        {files.map((f) => (
          <li key={f} className="flex items-center justify-between py-2 font-mono text-xs">
            <span>{f}</span>
            <span className="text-muted-foreground">Ready</span>
          </li>
        ))}
      </ul>
    </div>
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
