import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dormRooms } from "@/lib/mock-data";
import { BookOpen, ShieldAlert, Moon } from "lucide-react";

export const Route = createFileRoute("/_app/dormitory")({ component: Dormitory });

const tahfidz = [
  { name: "Ahmad Fauzi", juz: 8, lastReview: "May 10" },
  { name: "Siti Aminah", juz: 12, lastReview: "May 11" },
  { name: "M. Iqbal", juz: 5, lastReview: "May 09" },
];

const violations = [
  { date: "May 10", student: "Rizky Pratama", note: "Late return after curfew", action: "Warning" },
  { date: "May 08", student: "Budi Santoso", note: "Missed Subuh prayer x2", action: "Counseling" },
];

function Dormitory() {
  return (
    <div>
      <PageHeader title="Dormitory / Asrama" subtitle="Rooms, tahfidz progress, worship and discipline" />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Rooms</CardTitle></CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Room</th>
                    <th className="px-4 py-3">Building</th>
                    <th className="px-4 py-3">Occupancy</th>
                    <th className="px-4 py-3">Supervisor</th>
                  </tr>
                </thead>
                <tbody>
                  {dormRooms.map((r) => (
                    <tr key={r.id} className="border-t border-border/60">
                      <td className="px-4 py-3 font-mono text-xs">{r.id}</td>
                      <td className="px-4 py-3">{r.building}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                            <div className="h-full bg-primary" style={{ width: `${(r.occupants/r.capacity)*100}%` }} />
                          </div>
                          <span className="text-xs">{r.occupants}/{r.capacity}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{r.supervisor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" /><CardTitle className="text-base">Tahfidz Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {tahfidz.map((t) => (
                <div key={t.name} className="flex items-center justify-between rounded-lg border border-border/60 p-3 text-sm">
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">Last review {t.lastReview}</div>
                  </div>
                  <Badge>Juz {t.juz}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2">
              <Moon className="h-4 w-4 text-info" /><CardTitle className="text-base">Worship Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-1.5 text-center text-xs">
                {["Subuh","Dzuhur","Ashar","Maghrib","Isya"].map((p, i) => (
                  <div key={p} className={`rounded-md p-2 ${i < 3 ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`}>
                    {p}<br /><span className="font-semibold">{i < 3 ? "✓" : "—"}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader className="flex flex-row items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-destructive" />
          <CardTitle className="text-base">Recent Violations</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr><th className="px-4 py-3">Date</th><th className="px-4 py-3">Student</th><th className="px-4 py-3">Note</th><th className="px-4 py-3">Action</th></tr>
            </thead>
            <tbody>
              {violations.map((v, i) => (
                <tr key={i} className="border-t border-border/60">
                  <td className="px-4 py-3 text-muted-foreground">{v.date}</td>
                  <td className="px-4 py-3 font-medium">{v.student}</td>
                  <td className="px-4 py-3">{v.note}</td>
                  <td className="px-4 py-3"><Badge variant="outline">{v.action}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
