import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notifications, activityLog } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/notifications")({ component: Notifs });

function Notifs() {
  return (
    <div>
      <PageHeader title="Notifications & Activity" subtitle="System events and audit log"
        actions={<Button variant="outline" size="sm" className="gap-2"><Check className="h-4 w-4" /> Mark all read</Button>} />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardContent className="p-0">
            <div className="border-b border-border p-4 text-sm font-semibold">Notifications</div>
            <ul className="divide-y divide-border/60">
              {notifications.map((n) => (
                <li key={n.id} className="flex gap-3 p-4">
                  <div className={`mt-1 h-2 w-2 shrink-0 rounded-full ${n.unread ? "bg-primary" : "bg-muted"}`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{n.title}</span>
                      <span className="text-[11px] text-muted-foreground">{n.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{n.body}</p>
                  </div>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="border-b border-border p-4 text-sm font-semibold">Activity Log</div>
            <ul className="divide-y divide-border/60">
              {activityLog.map((a) => (
                <li key={a.id} className="p-4">
                  <p className="text-sm"><span className="font-medium">{a.actor}</span> {a.action}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
