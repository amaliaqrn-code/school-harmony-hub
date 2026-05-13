import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";
import { useApp, ROLES, type Role } from "@/lib/app-context";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sign in — Nur Al-Huda SIS" },
      { name: "description", content: "Sign in to the Nur Al-Huda School Information System." },
    ],
  }),
  component: Login,
});

function Login() {
  const { login, isAuthed } = useApp();
  const nav = useNavigate();
  const [role, setRole] = useState<Role>("super_admin");

  if (isAuthed && typeof window !== "undefined") {
    nav({ to: "/dashboard" });
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    login(role);
    nav({ to: "/dashboard" });
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div
        className="relative hidden flex-col justify-between p-12 text-primary-foreground lg:flex"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="text-lg font-semibold">Nur Al-Huda SIS</span>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold leading-tight">
            One platform for your entire school community.
          </h2>
          <p className="max-w-md text-base text-white/85">
            Academics, admissions, finance, dormitory and health — unified for staff,
            teachers, students and parents.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/70">
            <ShieldCheck className="h-4 w-4" /> Role-based access · Audit logs · Secure
          </div>
        </div>
        <div className="text-xs text-white/60">© 2026 Nur Al-Huda Education</div>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-12">
        <form onSubmit={submit} className="w-full max-w-sm space-y-6">
          <div className="lg:hidden mb-2 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}>
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-semibold">Nur Al-Huda SIS</span>
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to continue. Pick a demo role to explore.</p>
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-medium text-muted-foreground">Email</label>
            <input
              defaultValue="demo@nuralhuda.sch"
              className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-ring"
            />
            <label className="block text-xs font-medium text-muted-foreground">Password</label>
            <input
              type="password"
              defaultValue="demo1234"
              className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-ring"
            />
            <label className="block text-xs font-medium text-muted-foreground pt-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-ring"
            >
              {ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
            </select>
          </div>

          <Button type="submit" className="w-full gap-2" size="lg">
            Sign in <ArrowRight className="h-4 w-4" />
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Demo build — no real authentication. Any input continues.
          </p>
        </form>
      </div>
    </div>
  );
}
