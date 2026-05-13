import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Users, GraduationCap, BookOpen, Calendar, ClipboardCheck,
  Wallet, UserPlus, Building2, HeartPulse, Briefcase, Settings, Bell,
  FileText, BarChart3, ClipboardList,
} from "lucide-react";
import { useApp, type Role } from "@/lib/app-context";
import { cn } from "@/lib/utils";

type NavItem = { to: string; label: string; icon: typeof Users; roles?: Role[] };

const NAV: { section: string; items: NavItem[] }[] = [
  {
    section: "Overview",
    items: [
      { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { to: "/analytics", label: "Analytics", icon: BarChart3 },
    ],
  },
  {
    section: "Academic",
    items: [
      { to: "/students", label: "Students", icon: Users },
      { to: "/classes", label: "Classes", icon: GraduationCap },
      { to: "/subjects", label: "Subjects", icon: BookOpen },
      { to: "/schedule", label: "Schedule", icon: Calendar },
      { to: "/attendance", label: "Attendance", icon: ClipboardCheck },
      { to: "/grades", label: "Grades", icon: FileText },
      { to: "/assignments", label: "Assignments & LMS", icon: ClipboardList },
    ],
  },
  {
    section: "Operations",
    items: [
      { to: "/admissions", label: "PPDB / Admissions", icon: UserPlus },
      { to: "/finance", label: "Finance", icon: Wallet },
      { to: "/hr", label: "HRD & Employees", icon: Briefcase },
      { to: "/dormitory", label: "Dormitory", icon: Building2 },
      { to: "/health", label: "Health Unit", icon: HeartPulse },
    ],
  },
  {
    section: "System",
    items: [
      { to: "/notifications", label: "Notifications", icon: Bell },
      { to: "/settings", label: "Settings", icon: Settings },
    ],
  },
];

export function AppSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { role } = useApp();

  return (
    <aside className="flex h-full w-64 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-5">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground shadow-md"
          style={{ background: "var(--gradient-primary)" }}
        >
          <GraduationCap className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-sidebar-foreground">Nur Al-Huda</div>
          <div className="text-[11px] text-muted-foreground">School Information System</div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {NAV.map((sec) => (
          <div key={sec.section} className="mb-5">
            <div className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {sec.section}
            </div>
            <ul className="space-y-0.5">
              {sec.items.map((item) => {
                const active = path === item.to;
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={onNavigate}
                      className={cn(
                        "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                        active
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/60",
                      )}
                    >
                      <Icon className={cn("h-4 w-4 shrink-0", active ? "text-primary" : "text-muted-foreground")} />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-sidebar-border px-4 py-3 text-[11px] text-muted-foreground">
        Signed in as <span className="font-medium capitalize">{role.replace("_", " ")}</span>
      </div>
    </aside>
  );
}
