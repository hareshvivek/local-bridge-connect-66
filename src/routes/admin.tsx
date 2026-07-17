import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, SectionHeader } from "@/components/app-shell";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Local Bridge" }, { name: "description", content: "Approve matches, QA submissions, release stipends." }] }),
  component: AdminView,
});

type Match = { id: number; shop: string; student: string; uni: string; note: string };
type QA = { id: number; shop: string; student: string; url: string; submitted: string };

const INITIAL_MATCHES: Match[] = [
  { id: 1, shop: "Miller Street Bakery", student: "Priya Ashwini", uni: "NYU", note: "Editorial vibe match" },
  { id: 2, shop: "Blue Fern Studio", student: "Marco Silva", uni: "Parsons", note: "Portfolio: 3 gallery sites" },
  { id: 3, shop: "Café Poesia", student: "Ana Rehm", uni: "Cooper Union", note: "Requested this shop" },
];

const INITIAL_QA: QA[] = [
  { id: 11, shop: "Nordic Cutlery", student: "James Okafor", url: "nordiccutlery.local-bridge.app", submitted: "2h ago" },
  { id: 12, shop: "Hana Flowers", student: "Priya Ashwini", url: "hanaflowers.shop", submitted: "Yesterday" },
];

function AdminView() {
  const [matches, setMatches] = useState(INITIAL_MATCHES);
  const [qa, setQa] = useState(INITIAL_QA);
  const [revenue, setRevenue] = useState(546); // $39 × 14 shops
  const [stipendsReleased, setStipendsReleased] = useState(2);
  const [deployedCount, setDeployedCount] = useState(0);

  function approveMatch(id: number) {
    setMatches((m) => m.filter((x) => x.id !== id));
  }

  function approveDeploy(id: number) {
    setQa((q) => q.filter((x) => x.id !== id));
    setStipendsReleased((s) => s + 1);
    setDeployedCount((d) => d + 1);
    setRevenue((r) => r + 39);
  }

  function sendBack(id: number) {
    setQa((q) => q.filter((x) => x.id !== id));
  }

  return (
    <AppShell role="admin">
      <SectionHeader
        eyebrow="Admin · Control panel"
        title="Approve. QA. Pay out."
        kicker="Two queues, one page. Keep the bridge moving."
      />

      {/* Metrics row */}
      <div className="mb-8 grid grid-cols-2 border border-border md:grid-cols-4">
        <Metric label="Revenue pool" value={`$${revenue}`} sub="This month · $39 × active" />
        <Metric label="Stipends released" value={String(stipendsReleased)} sub="$120 each" borderLeft />
        <Metric label="Pending matches" value={String(matches.length)} sub="Awaiting approval" borderLeft />
        <Metric label="Sites deployed" value={String(deployedCount)} sub="This session" borderLeft />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left: matches */}
        <section className="border border-border">
          <div className="flex items-end justify-between border-b border-border p-6">
            <div>
              <p className="eyebrow">Panel A · Matches</p>
              <h2 className="mt-2 font-display text-3xl font-black leading-none tracking-tight">Pending pairings</h2>
            </div>
            <span className="font-mono text-xs text-muted-foreground">{matches.length} open</span>
          </div>
          {matches.length === 0 ? (
            <Empty label="All matches cleared." />
          ) : (
            <ul className="divide-y divide-divider">
              {matches.map((m) => (
                <li key={m.id} className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-xl font-black leading-tight tracking-tight">{m.shop}</p>
                      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        ↔ {m.student} · {m.uni}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground italic">“{m.note}”</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button onClick={() => approveMatch(m.id)} className="btn-primary">Approve match</button>
                      <button onClick={() => approveMatch(m.id)} className="border border-border px-4 py-2 text-xs uppercase tracking-widest hover:bg-secondary">Reject</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Right: QA + payouts */}
        <section className="border border-border">
          <div className="flex items-end justify-between border-b border-border p-6">
            <div>
              <p className="eyebrow">Panel B · QA & payouts</p>
              <h2 className="mt-2 font-display text-3xl font-black leading-none tracking-tight">Ready for deploy</h2>
            </div>
            <span className="font-mono text-xs text-muted-foreground">{qa.length} in queue</span>
          </div>
          {qa.length === 0 ? (
            <Empty label="Queue clear. Nice." />
          ) : (
            <ul className="divide-y divide-divider">
              {qa.map((q) => (
                <li key={q.id} className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-xl font-black leading-tight tracking-tight">{q.shop}</p>
                      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        by {q.student} · {q.submitted}
                      </p>
                      <a href={`https://${q.url}`} className="mt-3 inline-block break-all border-b border-foreground font-mono text-sm">
                        {q.url}
                      </a>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button onClick={() => approveDeploy(q.id)} className="btn-primary">Approve & deploy</button>
                      <button onClick={() => sendBack(q.id)} className="border border-border px-4 py-2 text-xs uppercase tracking-widest hover:bg-secondary">Send back with notes</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {/* Ledger strip */}
      <section className="mt-8 border border-border">
        <div className="flex items-end justify-between border-b border-border p-6">
          <div>
            <p className="eyebrow">Ledger · Payouts</p>
            <h2 className="mt-2 font-display text-3xl font-black leading-none tracking-tight">This month</h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">Auto-updated</span>
        </div>
        <div className="grid grid-cols-1 divide-y divide-divider md:grid-cols-3 md:divide-x md:divide-y-0">
          <LedgerCell label="Shop subscriptions in" value={`$${revenue}`} note="14 shops × $39" />
          <LedgerCell label="Stipends out" value={`$${stipendsReleased * 120}`} note={`${stipendsReleased} students × $120`} />
          <LedgerCell label="Net to platform" value={`$${revenue - stipendsReleased * 120}`} note="Hosting, QA, ops" accent />
        </div>
      </section>
    </AppShell>
  );
}

function Metric({ label, value, sub, borderLeft = false }: { label: string; value: string; sub: string; borderLeft?: boolean }) {
  return (
    <div className={"p-6 " + (borderLeft ? "border-l border-border" : "")}>
      <p className="eyebrow">{label}</p>
      <p className="mt-2 font-display text-4xl font-black leading-none">{value}</p>
      <p className="mt-2 font-mono text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}

function LedgerCell({ label, value, note, accent = false }: { label: string; value: string; note: string; accent?: boolean }) {
  return (
    <div className={"p-6 " + (accent ? "bg-foreground text-background" : "")}>
      <p className={"font-mono text-xs uppercase tracking-widest " + (accent ? "opacity-70" : "text-muted-foreground")}>{label}</p>
      <p className="mt-2 font-display text-4xl font-black leading-none">{value}</p>
      <p className={"mt-2 text-xs " + (accent ? "opacity-70" : "text-muted-foreground")}>{note}</p>
    </div>
  );
}

function Empty({ label }: { label: string }) {
  return (
    <div className="p-10 text-center">
      <p className="font-display text-2xl font-black italic text-muted-foreground">{label}</p>
    </div>
  );
}
