import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Clock } from "lucide-react";
import { students } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/attendance")({ component: AttendancePage });

type Status = "P" | "A" | "L";

function AttendancePage() {
  const [marks, setMarks] = useState<Record<string, Status>>(
    Object.fromEntries(students.map((s) => [s.id, "P"])),
  );

  const counts = {
    P: Object.values(marks).filter((v) => v === "P").length,
    A: Object.values(marks).filter((v) => v === "A").length,
    L: Object.values(marks).filter((v) => v === "L").length,
  };

  return (
    <div>
      <PageHeader title="Attendance" subtitle={`Today · ${new Date().toLocaleDateString("en-US",{ weekday:"long", year:"numeric", month:"long", day:"numeric" })}`}
        actions={<Button size="sm">Save attendance</Button>} />

      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <Card><CardContent className="p-4"><div className="text-xs text-muted-foreground">Present</div><div className="text-2xl font-semibold text-success">{counts.P}</div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="text-xs text-muted-foreground">Absent</div><div className="text-2xl font-semibold text-destructive">{counts.A}</div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="text-xs text-muted-foreground">Leave</div><div className="text-2xl font-semibold text-warning">{counts.L}</div></CardContent></Card>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Class</th>
                  <th className="px-4 py-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => {
                  const mark = marks[s.id];
                  return (
                    <tr key={s.id} className="border-t border-border/60">
                      <td className="px-4 py-3 font-mono text-xs">{s.id}</td>
                      <td className="px-4 py-3 font-medium">{s.name}</td>
                      <td className="px-4 py-3">{s.class}</td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center gap-1">
                          {(["P","A","L"] as Status[]).map((v) => (
                            <button key={v}
                              onClick={() => setMarks({ ...marks, [s.id]: v })}
                              className={cn(
                                "flex h-8 w-8 items-center justify-center rounded-md border text-xs font-medium transition-colors",
                                mark === v
                                  ? v === "P" ? "border-success bg-success text-success-foreground"
                                    : v === "A" ? "border-destructive bg-destructive text-destructive-foreground"
                                    : "border-warning bg-warning text-warning-foreground"
                                  : "border-input text-muted-foreground hover:bg-muted",
                              )}>
                              {v === "P" ? <Check className="h-3.5 w-3.5" /> : v === "A" ? <X className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
