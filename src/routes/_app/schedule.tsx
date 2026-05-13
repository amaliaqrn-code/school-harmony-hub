import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { schedule } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/schedule")({ component: SchedulePage });

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function SchedulePage() {
  return (
    <div>
      <PageHeader title="Schedule" subtitle="Weekly class timetable" />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {days.map((d) => {
          const items = schedule.filter((s) => s.day === d);
          return (
            <Card key={d}>
              <CardContent className="p-4">
                <h3 className="mb-3 text-sm font-semibold">{d}</h3>
                {items.length === 0 ? (
                  <p className="text-xs text-muted-foreground">No classes</p>
                ) : (
                  <div className="space-y-2">
                    {items.map((s, i) => (
                      <div key={i} className="rounded-lg border border-border/60 p-3 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">{s.subject}</span>
                          <span className="text-xs text-muted-foreground">{s.time}</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{s.teacher} · Room {s.room}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
