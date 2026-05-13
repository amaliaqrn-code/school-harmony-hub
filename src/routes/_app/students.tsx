import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Plus, Download } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { students } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/students")({ component: StudentsPage });

function StudentsPage() {
  const [q, setQ] = useState("");
  const filtered = students.filter((s) =>
    [s.name, s.id, s.class, s.parent].join(" ").toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div>
      <PageHeader
        title="Students"
        subtitle={`${students.length} active students across all grades`}
        actions={
          <>
            <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export</Button>
            <Button size="sm" className="gap-2"><Plus className="h-4 w-4" /> Add student</Button>
          </>
        }
      />

      <Card>
        <CardContent className="p-0">
          <div className="flex flex-wrap items-center gap-2 border-b border-border p-4">
            <div className="relative max-w-sm flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q} onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, ID, class…"
                className="h-9 w-full rounded-lg border border-input bg-muted/40 pl-9 pr-3 text-sm outline-none focus:border-ring focus:bg-background"
              />
            </div>
            <select className="h-9 rounded-lg border border-input bg-background px-3 text-sm">
              <option>All grades</option><option>X</option><option>XI</option><option>XII</option>
            </select>
            <select className="h-9 rounded-lg border border-input bg-background px-3 text-sm">
              <option>All status</option><option>Active</option><option>Leave</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Student ID</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Class</th>
                  <th className="px-4 py-3">Gender</th>
                  <th className="px-4 py-3">Parent</th>
                  <th className="px-4 py-3">Attendance</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr key={s.id} className="border-t border-border/60 hover:bg-muted/30">
                    <td className="px-4 py-3 font-mono text-xs">{s.id}</td>
                    <td className="px-4 py-3 font-medium">{s.name}</td>
                    <td className="px-4 py-3">{s.class}</td>
                    <td className="px-4 py-3">{s.gender}</td>
                    <td className="px-4 py-3 text-muted-foreground">{s.parent}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                          <div className="h-full bg-primary" style={{ width: `${s.attendance}%` }} />
                        </div>
                        <span className="text-xs text-muted-foreground">{s.attendance}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={s.status === "Active" ? "secondary" : "outline"}>{s.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
