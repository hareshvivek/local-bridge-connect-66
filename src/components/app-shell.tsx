import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface ShellProps {
  role: "shopkeeper" | "student" | "admin";
  children: ReactNode;
}

const roleLabel = {
  shopkeeper: "Shopkeeper",
  student: "Student",
  admin: "Admin",
} as const;

export function AppShell({ role, children }: ShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center border border-foreground bg-foreground text-background font-display text-lg font-black">L</div>
            <span className="font-display text-xl font-black tracking-tight">Local Bridge<span className="text-clay">.</span></span>
          </Link>
          <div className="flex items-center gap-6">
            <span className="eyebrow hidden md:inline">Signed in as / {roleLabel[role]}</span>
            <nav className="flex items-center gap-1 border border-border">
              <RoleTab to="/shopkeeper" active={role === "shopkeeper"} label="Shop" />
              <RoleTab to="/student" active={role === "student"} label="Student" />
              <RoleTab to="/admin" active={role === "admin"} label="Admin" />
            </nav>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-14">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-muted-foreground md:px-10">
          <span>© Local Bridge — Built locally, delivered fast.</span>
          <span className="font-mono">v0.1 · prototype</span>
        </div>
      </footer>
    </div>
  );
}

function RoleTab({ to, active, label }: { to: string; active: boolean; label: string }) {
  return (
    <Link
      to={to}
      className={
        "px-3 py-1.5 text-xs uppercase tracking-widest transition-colors " +
        (active ? "bg-foreground text-background" : "hover:bg-secondary")
      }
    >
      {label}
    </Link>
  );
}

export function Panel({
  children,
  className = "",
  bordered = true,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  as?: keyof HTMLElementTagNameMap;
}) {
  const Comp = Tag as "div";
  return (
    <Comp className={(bordered ? "border border-border bg-card " : "") + className}>{children}</Comp>
  );
}

export function SectionHeader({ eyebrow, title, kicker }: { eyebrow: string; title: string; kicker?: string }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-2 font-display text-4xl font-black leading-none tracking-tight md:text-5xl">{title}</h1>
      </div>
      {kicker && <p className="max-w-sm text-sm text-muted-foreground">{kicker}</p>}
    </div>
  );
}
