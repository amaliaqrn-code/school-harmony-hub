import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Role =
  | "super_admin"
  | "principal"
  | "teacher"
  | "student"
  | "parent"
  | "finance"
  | "hrd"
  | "dormitory"
  | "health";

export const ROLES: { value: Role; label: string }[] = [
  { value: "super_admin", label: "Super Admin" },
  { value: "principal", label: "Principal" },
  { value: "teacher", label: "Teacher" },
  { value: "student", label: "Student" },
  { value: "parent", label: "Parent" },
  { value: "finance", label: "Finance Staff" },
  { value: "hrd", label: "HRD Staff" },
  { value: "dormitory", label: "Dormitory Staff" },
  { value: "health", label: "Health Unit Staff" },
];

interface AppState {
  role: Role;
  setRole: (r: Role) => void;
  user: { name: string; email: string };
  theme: "light" | "dark";
  toggleTheme: () => void;
  isAuthed: boolean;
  login: (r: Role) => void;
  logout: () => void;
}

const Ctx = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("super_admin");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isAuthed, setAuthed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("sis-theme") as "light" | "dark" | null;
    const t = saved ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(t);
    const r = localStorage.getItem("sis-role") as Role | null;
    if (r) setRole(r);
    if (localStorage.getItem("sis-authed") === "1") setAuthed(true);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("sis-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("sis-role", role);
  }, [role]);

  const userByRole: Record<Role, { name: string; email: string }> = {
    super_admin: { name: "Aisha Rahman", email: "admin@nuralhuda.sch" },
    principal: { name: "Dr. Yusuf Ibrahim", email: "principal@nuralhuda.sch" },
    teacher: { name: "Bu Siti Nurhaliza", email: "siti@nuralhuda.sch" },
    student: { name: "Ahmad Fauzi", email: "ahmad.f@student.nuralhuda.sch" },
    parent: { name: "Pak Hadi Susanto", email: "hadi@parent.nuralhuda.sch" },
    finance: { name: "Bu Maryam", email: "finance@nuralhuda.sch" },
    hrd: { name: "Pak Rizal", email: "hrd@nuralhuda.sch" },
    dormitory: { name: "Ust. Fauzan", email: "asrama@nuralhuda.sch" },
    health: { name: "Suster Nadia", email: "uks@nuralhuda.sch" },
  };

  return (
    <Ctx.Provider
      value={{
        role,
        setRole,
        user: userByRole[role],
        theme,
        toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
        isAuthed,
        login: (r) => {
          setRole(r);
          setAuthed(true);
          if (typeof window !== "undefined") localStorage.setItem("sis-authed", "1");
        },
        logout: () => {
          setAuthed(false);
          if (typeof window !== "undefined") localStorage.removeItem("sis-authed");
        },
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useApp() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp outside provider");
  return v;
}
