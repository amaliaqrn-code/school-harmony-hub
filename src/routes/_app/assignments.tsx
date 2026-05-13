import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, FileText, Video, Download } from "lucide-react";

export const Route = createFileRoute("/_app/assignments")({ component: AssignmentsPage });

const items = [
  { title: "Algebra Practice Set 4", subject: "Mathematics", class: "X-IPA-1", due: "May 18", submitted: 28, total: 32, type: "assignment" },
  { title: "Lab Report — Refraction", subject: "Physics", class: "X-IPA-1", due: "May 20", submitted: 24, total: 32, type: "assignment" },
  { title: "Surah Al-Mulk (memorization)", subject: "Quran", class: "X-IPA-1", due: "May 22", submitted: 19, total: 32, type: "assignment" },
  { title: "Mid-term CBT — English", subject: "English", class: "X-IPA-1", due: "May 24", submitted: 0, total: 32, type: "exam" },
];

const materials = [
  { title: "Chapter 5 — Quadratic Equations", subject: "Math", kind: "pdf" },
  { title: "Newton's Laws (video)", subject: "Physics", kind: "video" },
  { title: "Tajweed rules handout", subject: "Quran", kind: "pdf" },
];

function AssignmentsPage() {
  return (
    <div>
      <PageHeader title="Assignments & LMS" subtitle="Coursework, materials and online exams" actions={
        <Button size="sm" className="gap-2"><Plus className="h-4 w-4" /> New assignment</Button>
      } />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          {items.map((a) => {
            const pct = Math.round((a.submitted / a.total) * 100);
            return (
              <Card key={a.title}>
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{a.title}</h3>
                        <Badge variant={a.type === "exam" ? "destructive" : "secondary"}>{a.type}</Badge>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{a.subject} · {a.class} · Due {a.due}</p>
                    </div>
                    <Button variant="outline" size="sm">Open</Button>
                  </div>
                  <div className="mt-4">
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-muted-foreground">Submissions</span>
                      <span className="font-medium">{a.submitted}/{a.total} · {pct}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader><CardTitle>Learning Materials</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {materials.map((m) => (
              <div key={m.title} className="flex items-center gap-3 rounded-lg border border-border/60 p-3">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  {m.kind === "video" ? <Video className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{m.title}</p>
                  <p className="text-xs text-muted-foreground">{m.subject}</p>
                </div>
                <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
